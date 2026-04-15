import { ArrowRight, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: "hsl(195, 85%, 45%)" }}>
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70 mb-4">
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold font-heading text-primary-foreground mb-6 leading-tight">
          Ready to Visualize Your Salesforce Relationships?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-4">
          See RelationshipVista in action. Transform how your org explores and
          understands data connections.
        </p>
        <p className="text-sm text-primary-foreground/60 max-w-xl mx-auto mb-8">
          Get instant access to interactive relationship mapping, simplified hierarchy
          exploration, and visual data insights — all natively within Salesforce.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="btn-cta shadow-lg"
          >
            Book a Demo <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            View on AppExchange <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
