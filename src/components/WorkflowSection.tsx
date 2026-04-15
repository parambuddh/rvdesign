import { Monitor, Network, SlidersHorizontal, Search, ChevronRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Monitor,
    step: "1",
    title: "Open a Record",
    description: "User opens an Account, Opportunity, or Contact record.",
    details: ["Account", "Opportunity", "Contact", "Custom Object"],
  },
  {
    icon: Network,
    step: "2",
    title: "Visualize Relationships",
    description: "RelationshipVista maps all related records automatically.",
    details: ["Opportunities", "Contacts", "Contracts", "Activities"],
  },
  {
    icon: SlidersHorizontal,
    step: "3",
    title: "Customize View",
    description: "Apply filters, groups, and customizations to focus analysis.",
    details: ["Filter", "Group", "Sort", "Customize"],
  },
  {
    icon: Search,
    step: "4",
    title: "Explore & Analyze",
    description: "Navigate hierarchy, click nodes, and drive decisions.",
    details: ["Drill Down", "Navigate", "Export", "Decide"],
  },
];

const WorkflowSection = () => {
  const { ref, visibleItems } = useStaggerReveal(steps.length);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-narrow">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-[38px] font-extrabold font-heading leading-tight mb-3">
              From Single Record to Complete Relationship Map
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </RevealOnScroll>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div
                className="premium-card p-6 text-center h-full"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? "none" : "translateY(30px)",
                  transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                }}
              >
                <div className="step-number mx-auto mb-4">{s.step}</div>
                <div className="icon-box-lg mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted mb-4 leading-relaxed">{s.description}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {s.details.map((d) => (
                    <span key={d} className="pill-badge !text-xs !px-2.5 !py-0.5">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary">
                  <ChevronRight className="h-5 w-5" />
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
