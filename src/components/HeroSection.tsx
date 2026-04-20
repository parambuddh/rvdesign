import { ArrowRight, ExternalLink, BookOpen, Download } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import CalendlyModal from "./CalendlyModal";
import GetNowModal from "./GetNowModal";

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isGetNowOpen, setIsGetNowOpen] = useState(false);

  return (
    <section id="home" className="section-padding relative overflow-hidden gradient-mesh">
      {/* Animated gradient blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] -top-40 -left-40" />
      <div className="blob blob-2 w-[400px] h-[400px] -bottom-20 -right-20" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="pill-badge">
                <span className="w-2 h-2 rounded-full bg-primary" style={{ animation: "pulse-glow 2s infinite" }} />
                100% Native Salesforce
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full"
            >
              <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] font-heading tracking-tight">
                <span className="relative inline-block z-10">
                  RelationshipVista
                  <svg className="absolute -bottom-4 sm:-bottom-7 left-0 w-[102%] -translate-x-[1%] -z-10 overflow-visible" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M6 14 Q 100 8 194 18"
                      stroke="url(#hero-gradient)" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </svg>
                </span>
                <br className="hidden sm:block" />
                <span className="gradient-text mt-2 block">
                  for Intelligent Relationship Mapping & Visualization
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg sm:text-xl md:text-[22px] font-semibold text-text-heading leading-snug">
                Interactive Data Exploration for
                <br className="hidden sm:block" />
                Account Hierarchies & Connected Records.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm sm:text-base text-text-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                See deeper insights into your account hierarchies, opportunity
                pipelines, and connected records — all within Salesforce.
                No code required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full flex flex-col items-center lg:items-start"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="btn-cta text-sm sm:text-base px-6 sm:px-7"
                >
                  Book a Demo <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsGetNowOpen(true)}
                  className="btn-outline text-sm sm:text-base px-6 sm:px-7"
                >
                  View on AppExchange <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4"
              >
                <Link 
                  to="/user-guide" 
                  className="flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  User Guide
                </Link>
                <Link 
                  to="/installation-guide" 
                  className="flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Download className="h-4 w-4" />
                  </div>
                  Installation Guide
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image with glassmorphism floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/30 relative">
                <img
                  src={heroDashboard}
                  alt="Interactive Relationship Mapping with RelationshipVista — Salesforce account hierarchy visualization dashboard"
                  width={1280}
                  height={800}
                  fetchPriority="high"
                  className="w-full h-auto"
                />
                {/* Glassmorphism overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating glassmorphism badges */}
              <div
                className="absolute -top-4 -right-4 glass-card shadow-xl px-5 py-3 hidden lg:block"
                style={{ animation: "badge-float 6s ease-in-out infinite", animationDelay: "0s" }}
              >
                <p className="text-sm font-bold text-text-heading">Relationships Mapped</p>
                <p className="text-xs text-text-muted">1,247 records • 3 sec</p>
              </div>
              <div
                className="absolute -bottom-4 -left-4 glass-card shadow-xl px-5 py-3 hidden lg:block"
                style={{ animation: "badge-float 12s ease-in-out infinite", animationDelay: "-6s" }}
              >
                <p className="text-sm font-bold text-primary">Hierarchy: 5 Levels</p>
                <p className="text-xs text-text-muted">Real-time visualization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
      <GetNowModal isOpen={isGetNowOpen} onClose={() => setIsGetNowOpen(false)} />
    </section>
  );
};

export default HeroSection;
