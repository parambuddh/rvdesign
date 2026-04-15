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
      setScrolled(window.scrollY > 10);
      // Detect active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-shadow ${scrolled ? "shadow-sm border-b border-border" : ""}`}>
      <div className="container-narrow flex items-center justify-between h-[70px] px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img src={logo} alt="RelationshipVista" className="h-9 md:h-11 w-auto" />
        </a>

        {/* Desktop Nav - matching AgentVista's centered links with active highlighting */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors ${
                activeSection === link.href
                  ? "text-primary"
                  : "text-text-body hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - AgentVista style rounded button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="btn-cta text-sm px-5 py-2.5 rounded-full">
            Book a Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 shadow-lg">
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
          <a
            href="#contact"
            className="btn-cta text-sm w-full justify-center mt-2 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
