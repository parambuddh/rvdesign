import logo from "@/assets/logo.webp";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-heading section-padding !py-12">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <img src={logo} alt="RelationshipVista" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-sm text-background/50 leading-relaxed">
              Relationship Intelligence for Salesforce.
              <br />
              Natively Powered by Salesforce Lightning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Features", href: "#features" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Benefits", href: "#benefits" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Globe className="h-4 w-4 shrink-0" /> www.relationshipvista.com
              </li>
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Mail className="h-4 w-4 shrink-0" /> info@ardira.com
              </li>
              <li className="flex items-center gap-2 text-sm text-background/50">
                <Phone className="h-4 w-4 shrink-0" /> 1.669.777.6838
              </li>
            </ul>
            <p className="text-xs text-background/35 mt-3">
              For customer support, email us at support@ardira.com
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-background mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-background/50">
              <li><a href="#" className="hover:text-background transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/35">
            © 2026 Ardira Corporation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-background/35">
            <span>Terms of Use</span>
            <span>·</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
