import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }, 
    { icon: Mail, href: "mailto:hello@nguyenvana.dev", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-xl mb-4">Nguyễn Văn A</h3>
              <p className="text-muted-foreground mb-4">
                Full-stack Developer & UI/UX Designer chuyên tạo ra những sản phẩm số 
                đẹp và hiệu quả.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    size="icon"
                    variant="ghost"
                    className="hover:bg-primary hover:text-white transition-smooth"
                    asChild
                  >
                    <a href={link.href} aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Về tôi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Dự án
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Liên hệ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 hello@nguyenvana.dev</p>
                <p>📱 +84 123 456 789</p>
                <p>📍 Hồ Chí Minh, Việt Nam</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} Nguyễn Văn A. Được thiết kế với{" "}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              bằng React & Tailwind CSS
            </p>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-white transition-smooth"
            >
              Về đầu trang ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;