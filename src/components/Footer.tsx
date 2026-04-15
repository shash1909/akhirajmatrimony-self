import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Akhiraj Matrimony"
              className="w-12 h-12 object-contain rounded-full bg-background/90 p-1"
              loading="lazy"
              width={48}
              height={48}
            />
            <div>
              <h3 className="font-heading text-xl font-bold text-gold-light">
                Akhiraj Matrimony
              </h3>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Trusted Partnerships, Joyful Unions. Helping families find the perfect match since day one.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg text-gold-light mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>
              <a href="#" className="hover:text-gold transition-colors">Home</a>
            </li>
            <li>
              <a href="#register" className="hover:text-gold transition-colors">Register</a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-gold transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition-colors">Contact</a>
            </li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-lg text-gold-light mb-4">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <span>+91 9415794484,+91 8317047114</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              <span>srisanjaysrivastava@yahoo.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-1" />
              <span>
                MMIG 1 / 197 Vastu Khand<br />
                Gomti Nagar, India
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Akhiraj Matrimony. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
