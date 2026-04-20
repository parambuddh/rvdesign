import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.webp";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import CalendlyModal from "./CalendlyModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "User Guide", href: "/user-guide" },
  { label: "Contact Us", href: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setShowScrollTop(currentScrollY > 300);
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
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div
        className={`mx-auto transition-all duration-500 max-w-7xl ${
          isScrolled 
            ? "mt-4 rounded-[2.5rem] bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 px-4 md:px-8" 
            : "mt-0 rounded-none bg-transparent px-4 md:px-8"
        }`}
      >
        <nav className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <a href="#home" className="flex items-center gap-2 transition-all duration-500">
            <img src={logo} alt="RelationshipVista Logo" decoding="async" className={`transition-all duration-500 w-auto ${isScrolled ? 'h-8 md:h-9' : 'h-9 md:h-11'}`} />
          </a>

          <div className="hidden lg:flex items-center justify-end gap-1 ml-auto">
            {navLinks.map((link) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-300 text-slate-800 hover:text-slate-900 hover:bg-slate-800/5`}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <motion.div 
                      layoutId="nav-indicator" 
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" 
                    />
                  )}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-300 text-slate-800 hover:text-slate-900 hover:bg-slate-800/5`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div 
                      layoutId="nav-indicator" 
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" 
                    />
                  )}
                </a>
              )
            ))}

            <button
              onClick={() => setIsCalendlyOpen(true)}
              className={`ml-4 flex items-center gap-2 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
                isScrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm"
              }`}
            >
              Book Demo <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-primary/10 text-primary hover:bg-primary/20"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      location.pathname === link.href ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      activeSection === link.href ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  onClick={() => { setMobileOpen(false); setIsCalendlyOpen(true); }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow-md cursor-pointer"
                >
                  Book Demo <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(113, 42%, 42%), hsl(113, 42%, 35%))",
              boxShadow: "0 4px 20px hsl(113, 42%, 42%, 0.4)",
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
