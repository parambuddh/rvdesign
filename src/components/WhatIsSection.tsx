import whatIsScreenshot from "@/assets/what-is-screenshot.jpg";

const WhatIsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-border">
            <img
              src={whatIsScreenshot}
              alt="RelationshipVista intelligent relationship visualization interface showcasing multi-level hierarchy mapping and data exploration features"
              loading="lazy"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary">
              What is RelationshipVista?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-heading">
              The Intelligent Relationship Visualization Tool Built within Salesforce
            </h2>
            <div className="space-y-4 text-text-body leading-relaxed">
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
            <p className="text-primary font-semibold italic text-lg">
              "Visualize any relationship. Customize any view. Explore any hierarchy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
