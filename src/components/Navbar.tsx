import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card !rounded-none shadow-lg border-b border-border/40"
          : "bg-transparent"
      }`}
      style={scrolled ? { backdropFilter: "blur(20px)", background: "hsla(0, 0%, 100%, 0.85)" } : {}}
    >
      <div className="container-narrow flex items-center justify-between h-[72px] px-4 md:px-8">
        <a href="#home" className="flex items-center shrink-0">
          <img src={logo} alt="RelationshipVista" className="h-9 md:h-11 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-all duration-200 relative ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-text-body hover:text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="btn-cta text-sm">
            Book a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-4 pb-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block py-3 text-[15px] font-medium ${
                activeSection === link.href ? "text-primary" : "text-text-body"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-cta text-sm w-full justify-center mt-3" onClick={() => setMobileOpen(false)}>
            Book a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
