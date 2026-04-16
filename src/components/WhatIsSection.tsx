import RevealOnScroll from "./RevealOnScroll";
import HeroAnimation from "./HeroAnimation";

const WhatIsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <RevealOnScroll direction="left" className="h-full relative w-full aspect-video lg:aspect-square">
            <div className="relative group w-full h-full">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border/30 transition-transform duration-500 group-hover:scale-[1.02] w-full h-full bg-white relative pt-8 pb-8">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" />
                <HeroAnimation />
              </div>
              {/* Decorative gradient behind iframe */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary-blue/5 blur-xl" />
            </div>
          </RevealOnScroll>

          {/* Text */}
          <div className="space-y-5">
            <RevealOnScroll>
              <div className="pill-badge">
                What is RelationshipVista?
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-[36px] font-bold leading-tight font-heading">
                The Intelligent Relationship Visualization Tool Built within Salesforce
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="space-y-4 text-text-body text-[15px] leading-relaxed">
                <p>
                  RelationshipVista is a powerful Lightning Web Component that lives natively
                  inside Salesforce. It lets you instantly visualize and navigate all related
                  records with interactive, dynamic relationship maps.
                </p>
                <p>
                  From account hierarchies to opportunity pipelines, from complex multi-level
                  relationships to custom object connections, RelationshipVista transforms
                  scattered data into clear, actionable visual insights.
                </p>
                <p>
                  Empower your users to explore relationships faster, understand data connections
                  deeper, and make better-informed decisions — without writing a single line of code.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="relative pl-5 mt-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: "linear-gradient(180deg, hsl(113, 42%, 42%), hsl(202, 35%, 62%))" }} />
                <p className="text-primary font-semibold italic text-lg">
                  "Visualize any relationship. Customize any view. Explore any hierarchy."
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
