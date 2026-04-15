import { ArrowRight, ExternalLink } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight font-heading">
              Uncover and Analyze Your{" "}
              <span className="text-gradient">Salesforce Relationships</span>
            </h1>
            <p className="text-lg text-text-body leading-relaxed max-w-xl">
              Interactive relationship mapping and visualization — all inside Salesforce.
              No code required. See deeper insights into your account hierarchies, opportunity
              pipelines, and connected records.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-dark transition-colors shadow-md"
              >
                Book a Demo <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-semibold text-base hover:bg-secondary/10 transition-colors"
              >
                View on AppExchange <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroDashboard}
                alt="Interactive Relationship Mapping - Visualize Account Hierarchies with RelationshipVista"
                width={1280}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
