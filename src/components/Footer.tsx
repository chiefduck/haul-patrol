import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/haul-patrol-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logo} 
                  alt="Haul Patrol" 
                  className="w-16 h-16 object-contain rounded-full"
                />
                <div>
                  <h3 className="font-bold text-2xl">Haul Patrol</h3>
                  <p className="text-sm text-primary-foreground/80">The Good Boys of Junk Removal</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Fast, friendly, and affordable junk removal services for Denver and surrounding areas. 
                Licensed, insured, and committed to eco-friendly disposal.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact-form" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+17205550123" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>(720) 555-0123</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@haulpatrol.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@haulpatrol.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Serving Denver Metro Area</span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a 
                  href="https://facebook.com/haulpatrol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/haulpatrol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
              <p>© {currentYear} Haul Patrol. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/privacy" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
