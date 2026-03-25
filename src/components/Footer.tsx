import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground/80">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
              Build<span className="text-gold">Nest</span> Realty
            </h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner in real estate and construction in Coimbatore. Building dreams with integrity since 2005.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Properties", "Services", "Projects", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                    className="hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Land Sales</li>
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Turnkey Solutions</li>
              <li>Property Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                123 Builder Street, RS Puram, Coimbatore, Tamil Nadu 641002
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                info@buildnestrealty.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BuildNest Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
