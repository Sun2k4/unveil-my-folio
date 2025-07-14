import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="flex-1 max-w-sm lg:max-w-md animate-scale-in order-1 lg:order-none">
            <div className="relative group">
              <div className="absolute -inset-2.5 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={heroImage}
                alt="Nguyễn Tuấn Anh"
                className="relative w-full aspect-square rounded-full object-cover shadow-elegant hover-lift transition-spring"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary font-semibold">
              Full-stack Developer & UI/UX Enthusiast
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
              Nguyễn Tuấn Anh
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Kiến tạo giải pháp số.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Tôi là một lập trình viên full-stack với niềm đam mê tạo ra các ứng dụng web đẹp, hiệu quả và mang lại trải nghiệm người dùng tốt nhất.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="/CV_Nguyen_Tuan_Anh.pdf" download>
                <Button size="lg" className="shadow-elegant transition-spring w-full sm:w-auto hover-glow">
                  <Download className="mr-2 h-5 w-5" />
                  Tải CV
                </Button>
              </a>
              <Button size="lg" variant="outline" className="transition-spring w-full sm:w-auto" onClick={() => scrollToSection('contact')}>
                <Mail className="mr-2 h-5 w-5" />
                Liên hệ
              </Button>
            </div>
            
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://github.com/Sun2k4" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="transition-smooth">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="transition-smooth">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button
            size="icon"
            variant="ghost"
            className="text-muted-foreground hover:bg-secondary rounded-full"
            onClick={() => scrollToSection('projects')}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
