import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Link } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Hệ thống quản lý bán hàng trực tuyến với React, Node.js và MongoDB. Tính năng bao gồm quản lý sản phẩm, đơn hàng, thống kê doanh thu.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://unveil-my-folio.onrender.com",
      githubUrl: "https://github.com/Sun2k4/unveil-my-folio",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Mobile Shopping App",
      description: "Ứng dụng mua sắm di động được phát triển với React Native. Giao diện đẹp, hiệu suất cao và trải nghiệm người dùng mượt mà.",
      image: project2,
      technologies: ["React Native", "Firebase", "Redux", "Stripe"],
      demoUrl: "https://gemini.google.com/app/cd7d3ade7b375a98",
      githubUrl: "#",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Website doanh nghiệp hiện đại với Next.js và Sanity CMS. Tối ưu SEO, tốc độ tải nhanh và responsive hoàn hảo.",
      image: project3,
      technologies: ["Next.js", "Sanity CMS", "Vercel", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Website"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4">
              Dự án
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Các dự án <span className="text-gradient">nổi bật</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Khám phá những dự án tôi đã thực hiện, từ web applications đến mobile apps, 
              mỗi dự án đều được thiết kế và phát triển với sự tận tâm cao nhất.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-card hover-lift transition-spring group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                     <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="hover-glow" >
                        <Eye className="h-4 w-4 mr-2" />
                        Xem demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="hover-glow">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                     </a>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Project */}
          <Card className="shadow-card card-gradient">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Có dự án thú vị?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Tôi luôn sẵn sàng hợp tác trong các dự án mới, đặc biệt là những ý tưởng sáng tạo 
                  và có tác động tích cực đến cộng đồng.
                </p>
                <Button size="lg" className="transition-spring">
                  Thảo luận dự án
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
