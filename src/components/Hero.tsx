import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 hover-glow">
              👋 Chào mừng đến với portfolio của tôi
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Xin chào, tôi là
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Nguyễn Văn A
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Full-stack Developer chuyên về React, Node.js và UI/UX Design. 
              Tạo ra những sản phẩm số đẹp và hiệu quả.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-spring">
                <Mail className="mr-2 h-5 w-5" />
                Liên hệ với tôi
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-spring">
                <Download className="mr-2 h-5 w-5" />
                Tải CV
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white transition-smooth">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white transition-smooth">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20 text-white transition-smooth">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 max-w-md lg:max-w-lg animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-110"></div>
              <img
                src={heroImage}
                alt="Nguyễn Văn A"
                className="relative w-full h-auto rounded-full shadow-elegant hover-lift transition-spring"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20 transition-smooth"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;