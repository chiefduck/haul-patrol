import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/haul-patrol-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Haul Patrol" 
              className="w-32 h-32 object-contain"
            />
            <p className="text-primary-foreground/80">
              The Good Boys of Junk Removal
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <a 
                href="tel:+17205550123" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                (720) 555-0123
              </a>
              <a 
                href="mailto:info@haulpatrol.com" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@haulpatrol.com
              </a>
              <p className="text-sm">
                Hours: Mon-Sat, 7AM - 7PM
              </p>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/haulpatrol" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/haulpatrol" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Licensed & Insured<br />
              Serving Denver Metro Area
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Haul Patrol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
