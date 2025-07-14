import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }, 
    { icon: Mail, href: "mailto:hello@nguyentuananh.dev", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-2xl mb-2 text-gradient">Nguyễn Tuấn Anh</h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto md:mx-0">
                Đam mê xây dựng những trải nghiệm web đẹp và hiệu quả, biến ý tưởng thành hiện thực.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Điều hướng</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">Về tôi</button></li>
                <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">Dự án</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-muted-foreground hover:text-primary transition-colors">Liên hệ</button></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Kết nối</h4>
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.map((link) => (
                  <Button key={link.label} size="icon" variant="outline" className="transition-spring hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Nguyễn Tuấn Anh. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="inline h-4 w-4 text-primary" /> in Hanoi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
