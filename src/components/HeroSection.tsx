import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.webp";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import CalendlyModal from "./CalendlyModal";
import HeroInfographic from "./HeroInfographic";

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const APPEXCHANGE_URL = "https://appexchange.salesforce.com/appxListingDetail?listingId=a0N4V00000FZcqBUAT";

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 md:pt-28 pb-12 md:pb-20 lg:pb-24 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] -top-40 -left-40" />
      <div className="blob blob-2 w-[400px] h-[400px] -bottom-20 -right-20" />

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center justify-items-center">
          {/* Text */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">Salesforce-Native Solution</span>
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
                      d="M3,14 Q90,7 200,17"
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
                Interactive Data Exploration for{" "}
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
                Unlock deeper insights into your record hierarchies, opportunity
                pipelines, and connected records — all inside Salesforce.
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
                  onClick={() => window.open(APPEXCHANGE_URL, "_blank")}
                  className="btn-outline text-sm sm:text-base px-6 sm:px-7"
                >
                  View on AppExchange <ExternalLink className="h-4 w-4" />
                </button>
              </div>


            </motion.div>
          </div>

          {/* Hero Infographic with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full flex justify-center items-center relative"
          >
            <div className="w-full max-w-[580px] lg:max-w-none">
              <HeroInfographic />
            </div>
          </motion.div>
        </div>
      </div>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default HeroSection;

