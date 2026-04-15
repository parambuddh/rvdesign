import { ArrowRight, ExternalLink } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(113, 42%, 42%), hsl(113, 42%, 35%), hsl(113, 50%, 30%))" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[600px] h-[600px] rounded-full -top-60 -left-60 bg-white/10 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full -bottom-40 -right-40 bg-white/10 blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container-narrow text-center max-w-3xl mx-auto relative z-10">
        <RevealOnScroll>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/50 mb-4">
            Get Started
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-3xl md:text-[42px] font-extrabold font-heading text-primary-foreground mb-6 leading-tight">
            Ready to Visualize Your Salesforce Relationships?
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            See RelationshipVista in action. Transform how your org explores and
            understands data connections.
          </p>
          <p className="text-sm text-primary-foreground/50 max-w-xl mx-auto mb-8">
            Get instant access to interactive relationship mapping, simplified hierarchy
            exploration, and visual data insights — all natively within Salesforce.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-primary font-bold text-base hover:bg-background/90 transition-all shadow-xl hover:-translate-y-1"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
            >
              Book a Demo <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all hover:-translate-y-0.5"
            >
              View on AppExchange <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
