import { Monitor, Network, SlidersHorizontal, Search, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: Monitor,
    step: "1",
    title: "Open a Record",
    description: "User opens an Account, Opportunity, or Contact record in Salesforce.",
    details: ["Account", "Opportunity", "Contact", "Custom Object"],
  },
  {
    icon: Network,
    step: "2",
    title: "Visualize Relationships",
    description: "RelationshipVista automatically maps all related records into an interactive view.",
    details: ["Opportunities by Stage", "Connected Contacts", "Contracts & Assets", "Cases & Activities"],
  },
  {
    icon: SlidersHorizontal,
    step: "3",
    title: "Customize View",
    description: "Apply filters, groups, and customizations to focus on what matters.",
    details: ["Filter by Amount", "Filter by Status", "Group by Owner", "Sort by Date"],
  },
  {
    icon: Search,
    step: "4",
    title: "Explore & Analyze",
    description: "Navigate through the hierarchy, click nodes for details, and drive decisions.",
    details: ["Click for Details", "Navigate Records", "Export Map", "Drive Decisions"],
  },
];

const WorkflowSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-[38px] font-extrabold font-heading leading-tight">
            From Single Record to Complete Relationship Map
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="bg-card rounded-2xl border border-border/60 p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                {/* Step number badge */}
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-primary-foreground">{s.step}</span>
                </div>
                <div className="icon-box-lg mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted mb-4 leading-relaxed">{s.description}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {s.details.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-primary-light text-primary font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowDown className="h-5 w-5 text-primary rotate-[-90deg]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
