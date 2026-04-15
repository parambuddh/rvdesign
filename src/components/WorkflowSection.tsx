import { Monitor, Network, SlidersHorizontal, Search } from "lucide-react";

const steps = [
  {
    icon: Monitor,
    step: "01",
    title: "Open a Record",
    description: "User opens an Account, Opportunity, or Contact record in Salesforce.",
    details: ["Account", "Opportunity", "Contact", "Custom Object"],
  },
  {
    icon: Network,
    step: "02",
    title: "Visualize Relationships",
    description: "RelationshipVista automatically maps all related records into an interactive view.",
    details: ["Opportunities by Stage", "Connected Contacts", "Contracts & Assets", "Cases & Activities"],
  },
  {
    icon: SlidersHorizontal,
    step: "03",
    title: "Customize View",
    description: "Apply filters, groups, and customizations to focus on what matters.",
    details: ["Filter by Amount", "Filter by Status", "Group by Owner", "Sort by Date"],
  },
  {
    icon: Search,
    step: "04",
    title: "Explore & Analyze",
    description: "Navigate through the hierarchy, click nodes for details, and drive decisions.",
    details: ["Click for Details", "Navigate Records", "Export Map", "Drive Decisions"],
  },
];

const WorkflowSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            From Single Record to Complete Relationship Map
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border z-0" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative z-10 text-center">
                <div className="icon-box-lg mx-auto mb-5 shadow-sm border border-border/50">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest">STEP {s.step}</span>
                <h3 className="text-lg font-bold font-heading mt-2 mb-3">{s.title}</h3>
                <p className="text-sm text-text-body mb-4">{s.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {s.details.map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
