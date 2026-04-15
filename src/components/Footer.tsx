import logo from "@/assets/logo.webp";
import { Globe, Mail, Phone } from "lucide-react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to top button - like AgentVista */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-0.5 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>

      <footer style={{ backgroundColor: "hsl(210, 14%, 18%)" }} className="section-padding !py-14">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Branding */}
            <div>
              <img src={logo} alt="RelationshipVista" className="h-10 w-auto mb-4 brightness-[2]" />
              <p className="text-sm leading-relaxed" style={{ color: "hsl(210, 8%, 55%)" }}>
                The AI Copilot for Relationship Mapping & Visualization –
                <br />
                Natively Powered by Salesforce Lightning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: "hsl(0, 0%, 95%)" }}>
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
                      className="text-sm transition-colors hover:text-primary"
                      style={{ color: "hsl(210, 8%, 55%)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: "hsl(0, 0%, 95%)" }}>
                Contact Info
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: Globe, text: "www.relationshipvista.com" },
                  { icon: Mail, text: "info@ardira.com" },
                  { icon: Phone, text: "1.669.777.6838" },
                ].map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "hsl(210, 8%, 55%)" }}>
                    <Icon className="h-4 w-4 shrink-0" /> {text}
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4" style={{ color: "hsl(210, 8%, 45%)" }}>
                For customer support, email us at support@ardira.com
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid hsl(210, 8%, 25%)" }}>
            <p className="text-xs" style={{ color: "hsl(210, 8%, 40%)" }}>
              © 2026 Ardira Corporation. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs" style={{ color: "hsl(210, 8%, 40%)" }}>
              <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
