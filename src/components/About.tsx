import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "bg-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Express, MongoDB, PostgreSQL",
      color: "bg-green-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Prototyping, User Research",
      color: "bg-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { number: "3+", label: "Năm kinh nghiệm" },
    { number: "50+", label: "Dự án hoàn thành" },
    { number: "20+", label: "Khách hàng hài lòng" },
    { number: "100%", label: "Cam kết chất lượng" }
  ];

  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Về tôi
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Passion for <span className="text-gradient">Creating</span> Amazing Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Với hơn 3 năm kinh nghiệm trong phát triển web và mobile, tôi chuyên tạo ra những sản phẩm 
              số đẹp mắt, hiệu quả và thân thiện với người dùng. Tôi tin rằng công nghệ tốt nhất là 
              công nghệ mang lại giá trị thực sự cho con người.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card hover-lift transition-spring">
                <CardContent className="pt-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="shadow-card hover-lift transition-spring group">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal touch */}
          <div className="mt-20">
            <Card className="shadow-card card-gradient">
              <CardContent className="p-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">Triết lý làm việc</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    "Code is poetry, design is art, and great products are born when they dance together."
                  </p>
                  <p className="text-muted-foreground">
                    Tôi luôn theo đuổi sự hoàn hảo trong từng dòng code và từng pixel design. 
                    Mỗi dự án là một cơ hội để học hỏi, sáng tạo và mang lại giá trị tốt nhất cho người dùng.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;