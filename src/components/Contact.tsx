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
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Liên hệ
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hãy <span className="text-gradient">kết nối</span> với tôi
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tôi luôn sẵn sàng lắng nghe những ý tưởng mới và hợp tác trong các dự án thú vị. 
              Đừng ngần ngại liên hệ với tôi để thảo luận về dự án của bạn.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card hover-glow transition-spring">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Gửi tin nhắn
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ tên</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Nhập họ tên của bạn" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="subject">Chủ đề</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="Chủ đề tin nhắn" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Tin nhắn</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Chia sẻ ý tưởng của bạn..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full transition-spring" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-card card-gradient">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-spring">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
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
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Giờ làm việc</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Thứ 2 - Thứ 6</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thứ 7</span>
                      <span>9:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chủ nhật</span>
                      <span>Nghỉ</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      💡 <strong>Tip:</strong> Tôi thường phản hồi email trong vòng 24 giờ. 
                      Đối với các dự án khẩn cấp, hãy gọi điện trực tiếp.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <Card className="shadow-card hero-gradient text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Sẵn sàng bắt đầu dự án?
                </h3>
                <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                  Hãy cùng nhau biến ý tưởng của bạn thành hiện thực. 
                  Tôi cam kết mang đến giải pháp tốt nhất cho dự án của bạn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="transition-spring">
                    <Phone className="h-5 w-5 mr-2" />
                    Gọi ngay
                  </Button>
                  <Button size="lg" variant="secondary" className="transition-spring">
                    <Mail className="h-5 w-5 mr-2" />
                    Gửi email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
