import { ArrowRight, ExternalLink } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding section-hero">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-accent/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Powered by Salesforce Lightning</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.15] font-heading">
              Uncover and Analyze Your Salesforce Relationships
            </h1>

            <p className="text-lg text-text-body leading-relaxed max-w-xl">
              Interactive relationship mapping and visualization — all inside Salesforce.
              No code required.
            </p>
            <p className="text-base text-text-muted leading-relaxed max-w-xl">
              See deeper insights into your account hierarchies, opportunity
              pipelines, and connected records. RelationshipVista visualizes complex
              relationships in seconds, making data exploration intuitive and powerful.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-cta">
                Book a Demo <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#" className="btn-outline">
                View on AppExchange <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
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
