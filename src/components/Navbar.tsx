import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logoIcon} alt="RelationshipVista" className="h-8 w-8" />
          <span className="font-heading font-bold text-lg text-text-heading">
            Relationship<span className="text-primary">Vista</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-body hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
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
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-text-body hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
