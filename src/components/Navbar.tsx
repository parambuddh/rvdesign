import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, ArrowUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";
import CalendlyModal from "./CalendlyModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOverColoredSection, setIsOverColoredSection] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Determine if we're on an independent page (not the home page)
  const isIndependentPage = location.pathname !== "/" && location.pathname !== "";

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowScrollTop(currentScrollY > 300);
      
      // Detect if navbar is over a colored section (like CTA section)
      const ctaElement = document.getElementById("cta-section");
      
      let overColored = false;
      
      if (ctaElement) {
        const rect = ctaElement.getBoundingClientRect();
        if (rect.top < 80 && rect.bottom > 0) {
          overColored = true;
        }
      }
      
      setIsOverColoredSection(overColored);

      // Reliable scroll-based section detection
      if (!isIndependentPage) {
        // Evaluate in reverse order (bottom to top)
        const sectionIds = ["contact", "faq", "use-cases", "benefits", "features", "overview", "home"];
        let currentSection = "home";
        
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              currentSection = id;
              break;
            }
          }
        }

        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isIndependentPage]);

  const scrollToSection = (targetId: string) => {
    const selector = targetId.startsWith("#") ? targetId : `#${targetId}`;
    const element = document.querySelector(selector);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleClick = (href: string) => {
    setTimeout(() => setMobileOpen(false), 150);

    if (isIndependentPage && href.startsWith("#")) {
      navigate("/", { replace: false });
      // Wait for navigation and mount
      setTimeout(() => scrollToSection(href), 150);
    } else if (href.startsWith("#")) {
      setActiveSection(href.slice(1));
      scrollToSection(href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isIndependentPage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div
        className={`mx-auto transition-all duration-500 max-w-7xl ${
          scrolled
            ? isOverColoredSection
              ? "mt-4 rounded-[2.5rem] bg-slate-900/80 backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.4)] border border-white/10 px-4 md:px-8"
              : "mt-4 rounded-[2.5rem] bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 px-4 md:px-8"
            : "mt-0 rounded-none bg-transparent px-4 md:px-8"
        }`}
      >
        <nav className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 transition-all duration-500">
            <img src={logo} alt="RelationshipVista Logo" className={`transition-all duration-500 w-auto ${scrolled ? 'h-8 md:h-9' : 'h-9 md:h-11'}`} /></a><div className="hidden lg:flex items-center justify-end gap-1 ml-auto">{navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-300 ${
                  isIndependentPage
                    ? isOverColoredSection && scrolled ? "text-white/80 hover:text-white" : "text-slate-800 hover:bg-slate-800/5"
                    : activeSection === link.href.slice(1)
                    ? isOverColoredSection && scrolled ? "text-white" : "text-primary"
                    : isOverColoredSection && scrolled ? "text-white/70 hover:text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-800/5"
                }`}
              >
                {link.label}
                {!isIndependentPage && activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${isOverColoredSection && scrolled ? "bg-white" : "bg-primary"}`}
                  />
                )}
              </button>
            ))}

            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-cta text-sm sm:text-base px-6 sm:px-7 ml-4 cursor-pointer"
            >
              Book a Demo <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <button
            className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isOverColoredSection && scrolled
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-primary/10 text-primary hover:bg-primary/20"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden absolute top-full left-4 right-4 mt-2 backdrop-blur-xl border border-border/50 shadow-2xl overflow-hidden rounded-2xl ${
              scrolled ? "bg-white/90" : "bg-white/95"
            }`}
          >
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    !isIndependentPage && activeSection === link.href.slice(1) 
                      ? "bg-primary/10 text-primary" 
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  onClick={() => { setMobileOpen(false); setIsCalendlyOpen(true); }}
                  className="btn-cta w-full flex justify-center text-sm sm:text-base cursor-pointer"
                >
                  Book a Demo <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrolled && showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))",
              boxShadow: "0 4px 20px hsl(var(--primary) / 0.4)",
              color: "white",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </motion.header>
  );
};

export default Navbar;





