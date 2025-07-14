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
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary font-semibold">
              My Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Các dự án <span className="text-gradient">tâm huyết</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Đây là những sản phẩm mà tôi đã dành nhiều thời gian và tâm huyết để xây dựng, thể hiện kỹ năng và đam mê của tôi trong lĩnh vực phát triển phần mềm.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Card key={project.id} className="bg-card border shadow-card hover-lift transition-spring group flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold">
                    {project.category}
                  </Badge>
                </div>
                
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full transition-spring hover:bg-primary/90 shadow-elegant">
                        <Eye className="h-4 w-4 mr-2" />
                        Xem Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="transition-spring hover:bg-secondary">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Bạn có một ý tưởng tuyệt vời?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Tôi rất mong được lắng nghe và cùng bạn biến ý tưởng đó thành hiện thực. Đừng ngần ngại liên hệ!
            </p>
            <Button size="lg" className="transition-spring shadow-elegant hover-glow">
              <Link className="mr-2 h-5 w-5" />
              Bắt đầu một dự án
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
