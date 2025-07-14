import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tanh0411k4@gmail.com",
      link: "mailto:tanh0411k4@gmail.com"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      value: "+84 123 456 789",
      link: "tel:+84123456789"
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      value: "Bắc Từ Liêm, Hà Nội",
      link: "#"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) throw error;

      toast({
        title: "Thành công!",
        description: "Tin nhắn của bạn đã được gửi. Tôi sẽ phản hồi sớm nhất có thể."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary font-semibold">
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hãy <span className="text-gradient">kết nối</span> với tôi
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nếu bạn có bất kỳ câu hỏi, dự án hay chỉ đơn giản là muốn chào hỏi, đừng ngần ngại liên hệ. Tôi luôn sẵn lòng lắng nghe.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-spring flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-card bg-card border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    Gửi tin nhắn cho tôi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ tên</Label>
                        <Input id="name" name="name" placeholder="Tên của bạn" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Email của bạn" value={formData.email} onChange={handleInputChange} required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Chủ đề</Label>
                      <Input id="subject" name="subject" placeholder="Dự án mới, hợp tác,..." value={formData.subject} onChange={handleInputChange} required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Tin nhắn</Label>
                      <Textarea id="message" name="message" placeholder="Nội dung tin nhắn..." className="min-h-36" value={formData.message} onChange={handleInputChange} required />
                    </div>
                    
                    <Button type="submit" className="w-full transition-spring shadow-elegant hover-glow" size="lg" disabled={isSubmitting}>
                      <Send className="h-5 w-5 mr-2" />
                      {isSubmitting ? "Đang gửi..." : "Gửi đi"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
