import { ArrowRight, ExternalLink } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";
import RevealOnScroll from "./RevealOnScroll";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding relative overflow-hidden gradient-mesh">
      {/* Animated gradient blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] -top-40 -left-40" />
      <div className="blob blob-2 w-[400px] h-[400px] -bottom-20 -right-20" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text */}
          <div className="space-y-6">
            <RevealOnScroll delay={0}>
              <div className="pill-badge">
                <span className="w-2 h-2 rounded-full bg-primary" style={{ animation: "pulse-glow 2s infinite" }} />
                100% Native Salesforce
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] font-heading tracking-tight">
                <span className="green-underline">RelationshipVista</span>
                <br />
                <span className="gradient-text">
                  for Intelligent Relationship Mapping & Visualization
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-xl md:text-[22px] font-semibold text-text-heading leading-snug">
                Interactive Data Exploration for
                <br />
                Account Hierarchies & Connected Records.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-base text-text-light leading-relaxed max-w-lg">
                See deeper insights into your account hierarchies, opportunity
                pipelines, and connected records — all within Salesforce.
                No code required.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#contact" className="btn-cta">
                  Book a Demo <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#" className="btn-outline">
                  View on AppExchange <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Image with glassmorphism floating cards */}
          <RevealOnScroll delay={0.2} direction="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/30 relative">
                <img
                  src={heroDashboard}
                  alt="Interactive Relationship Mapping with RelationshipVista"
                  width={1280}
                  height={800}
                  className="w-full h-auto"
                />
                {/* Glassmorphism overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating glassmorphism badges */}
              <div
                className="absolute -top-4 -right-4 glass-card shadow-xl px-5 py-3 hidden lg:block"
                style={{ animation: "blob-float 6s ease-in-out infinite", animationDelay: "0s" }}
              >
                <p className="text-sm font-bold text-text-heading">Relationships Mapped</p>
                <p className="text-xs text-text-muted">1,247 records • 3 sec</p>
              </div>
              <div
                className="absolute -bottom-4 -left-4 glass-card shadow-xl px-5 py-3 hidden lg:block"
                style={{ animation: "blob-float 12s ease-in-out infinite", animationDelay: "-6s" }}
              >
                <p className="text-sm font-bold text-primary">Hierarchy: 5 Levels</p>
                <p className="text-xs text-text-muted">Real-time visualization</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
