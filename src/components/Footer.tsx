import React from "react";
import logo from "@/assets/logo.webp";
import { Link } from "react-router-dom";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "linear-gradient(180deg, hsl(210, 14%, 16%), hsl(210, 14%, 12%))" }} className="section-padding !py-10 !pb-6">
      <div className="container-narrow">
        <div className="flex gap-12 mb-10 justify-between">
          {/* Logo and Description */}
          <div style={{ width: "30%" }}>
            <img src={logo} alt="RelationshipVista" className="h-16 w-auto mb-4" />
            <p className="text-base leading-relaxed" style={{ color: "hsl(210, 8%, 65%)" }}>
              Turn complex relationships into clear, actionable insights your team can explore and understand instantly Natively within Salesforce.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ width: "12%" }}>
            <h4 className="font-heading font-bold text-lg tracking-wider mb-5" style={{ color: "white" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "/#features" },
                { label: "Benefits", href: "/#benefits" },
                { label: "Use Cases", href: "/#use-cases" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      className="text-base transition-colors"
                      style={{ color: "hsl(210, 8%, 65%)" }}
                      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"}
                      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-base transition-colors"
                      style={{ color: "hsl(210, 8%, 65%)" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ width: "21%" }}>
            <h4 className="font-heading font-bold text-lg tracking-wider mb-5" style={{ color: "white" }}>
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-base">
                <a
                  href="https://www.relationshipvista.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors"
                  style={{ color: "hsl(210, 8%, 65%)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}
                >
                  <Globe className="h-4 w-4 shrink-0" /> www.relationshipvista.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-base">
                <a
                  href="mailto:support@ardira.com"
                  className="flex items-center gap-2.5 transition-colors"
                  style={{ color: "hsl(210, 8%, 65%)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}
                >
                  <Mail className="h-4 w-4 shrink-0" /> support@ardira.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-base">
                <a
                  href="tel:+16697776838"
                  className="flex items-center gap-2.5 transition-colors"
                  style={{ color: "hsl(210, 8%, 65%)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}
                >
                  <Phone className="h-4 w-4 shrink-0" /> 1.669.777.6838
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 pt-3 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid hsl(210, 8%, 22%)" }}>
          <p className="text-sm" style={{ color: "hsl(210, 8%, 65%)" }}>
            © {new Date().getFullYear()} RelationshipVista. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm" style={{ color: "hsl(210, 8%, 65%)" }}>
            <a href="#" className="transition-colors" style={{ color: "hsl(210, 8%, 65%)" }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}>Terms of Use</a>
            <a href="#" className="transition-colors" style={{ color: "hsl(210, 8%, 65%)" }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(113, 42%, 60%)"} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "hsl(210, 8%, 65%)"}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
