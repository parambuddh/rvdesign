import { useState, useEffect } from "react";
import logo from "@/assets/logo.webp";
import { Link } from "react-router-dom";
import { Globe, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Floating scroll-to-top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, hsl(113, 42%, 42%), hsl(113, 42%, 35%))",
          boxShadow: "0 4px 20px hsl(113, 42%, 42%, 0.4)",
          color: "white",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <footer style={{ background: "linear-gradient(180deg, hsl(210, 14%, 16%), hsl(210, 14%, 12%))" }} className="section-padding !py-14">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <img src={logo} alt="RelationshipVista" className="h-10 w-auto mb-4" />
              <p className="text-sm leading-relaxed" style={{ color: "hsl(210, 8%, 50%)" }}>
                Transform scattered data into meaningful relationships that are easy to explore, understand, and act on.
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: "hsl(0, 0%, 92%)" }}>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "Features", href: "/#features" },
                  { label: "Benefits", href: "/#benefits" },
                  { label: "Use Cases", href: "/#use-cases" },
                  { label: "User Guide", href: "/user-guide" },
                  { label: "Contact Us", href: "/#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.includes("#") ? (
                      <Link
                        to={link.href}
                        className="text-sm transition-colors hover:text-primary"
                        style={{ color: "hsl(210, 8%, 50%)" }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-primary"
                        style={{ color: "hsl(210, 8%, 50%)" }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-5" style={{ color: "hsl(0, 0%, 92%)" }}>
                Contact Info
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: Globe, text: "www.relationshipvista.com" },
                  { icon: Mail, text: "info@ardira.com" },
                  { icon: Phone, text: "1.669.777.6838" },
                ].map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "hsl(210, 8%, 50%)" }}>
                    <Icon className="h-4 w-4 shrink-0" /> {text}
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4" style={{ color: "hsl(210, 8%, 40%)" }}>
                For customer support, email support@ardira.com
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid hsl(210, 8%, 22%)" }}>
            <p className="text-xs" style={{ color: "hsl(210, 8%, 38%)" }}>
              © 2026 Ardira Corporation. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs" style={{ color: "hsl(210, 8%, 38%)" }}>
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
