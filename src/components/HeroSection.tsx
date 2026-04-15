import { ArrowRight, ExternalLink } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding section-hero overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text - AgentVista pattern: badge → heading with colored text → body → CTAs */}
          <div className="space-y-6">
            {/* Badge pill - matching AgentVista's "Powered by Salesforce Agentforce" */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary">Powered by Salesforce Lightning</span>
            </div>

            {/* Heading with green underline like AgentVista */}
            <h1 className="text-[38px] md:text-[46px] lg:text-[52px] font-extrabold leading-[1.12] font-heading tracking-tight">
              <span className="green-underline">RelationshipVista</span>
              <br />
              <span className="text-primary">
                for Intelligent Relationship Mapping & Visualization
              </span>
            </h1>

            {/* Subtitle - matching AgentVista's bold subtitle */}
            <p className="text-xl md:text-[22px] font-semibold text-text-heading leading-snug">
              Interactive Data Exploration for
              <br />
              Account Hierarchies & Connected Records.
            </p>

            {/* Body text */}
            <p className="text-base text-text-light leading-relaxed max-w-lg">
              See deeper insights into your account hierarchies, opportunity
              pipelines, and connected records — all within Salesforce.
              No code required.
            </p>

            {/* CTAs - matching AgentVista's button styling */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-cta rounded-full px-7">
                Book a Demo <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#" className="btn-outline rounded-full px-7">
                View on AppExchange <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hero Image - AgentVista style with floating badges */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 relative">
              <img
                src={heroDashboard}
                alt="Interactive Relationship Mapping - Visualize Account Hierarchies with RelationshipVista"
                width={1280}
                height={800}
                className="w-full h-auto"
              />
            </div>
            {/* Floating badges like AgentVista */}
            <div className="absolute -top-3 -right-3 bg-card rounded-xl shadow-lg border border-border px-4 py-2.5 hidden lg:block">
              <p className="text-sm font-bold text-text-heading">Relationships Mapped</p>
              <p className="text-xs text-text-muted">1,247 records • 3 sec</p>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-card rounded-xl shadow-lg border border-border px-4 py-2.5 hidden lg:block">
              <p className="text-sm font-bold text-primary">Hierarchy: 5 Levels Deep</p>
              <p className="text-xs text-text-muted">Real-time visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
