import { ArrowRight, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "hsl(113, 42%, 42%)" }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container-narrow text-center max-w-3xl mx-auto relative z-10">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60 mb-4">
          Get Started
        </p>
        <h2 className="text-3xl md:text-[42px] font-extrabold font-heading text-primary-foreground mb-6 leading-tight">
          Ready to Visualize Your Salesforce Relationships?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-background text-primary font-bold text-base hover:bg-background/90 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Book a Demo <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            View on AppExchange <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
