import {
  Network, SlidersHorizontal, GitBranch, LayoutList,
  Filter, Smartphone, Eye, Navigation, LayoutTemplate,
} from "lucide-react";
import featuresImage from "@/assets/features-image.png";
import RevealOnScroll from "./RevealOnScroll";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const capabilities = [
  {
    icon: Network,
    title: "Interactive Relationship Visualization",
    description: "Explore all related records in rich, interactive visual maps with multiple layout options.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Relationship Views (R-Views)",
    description: "Create tailored relationship visualizations using custom filters and groups, just like list views.",
  },
  {
    icon: GitBranch,
    title: "Multi-Level Hierarchy Exploration",
    description: "Navigate one-to-one, one-to-many, and many-to-many relationships across your org effortlessly.",
  },
  {
    icon: LayoutList,
    title: "Explorer & Tree Layouts",
    description: "Switch between indented explorer view and graphical tree layout for different exploration needs.",
  },
  {
    icon: Filter,
    title: "Dynamic Filtering & Grouping",
    description: "Filter related records by any field and group by custom attributes for focused analysis.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    description: "Full responsiveness across all devices — explore relationships anywhere, anytime.",
  },
  {
    icon: Eye,
    title: "Real-Time Hover Previews",
    description: "Quickly preview record details on hover without navigating away from your visualization.",
  },
  {
    icon: Navigation,
    title: "Smart Record Navigation",
    description: "Click any node to drill into related records or navigate through hierarchy seamlessly.",
  },
  {
    icon: LayoutTemplate,
    title: "Pre-Built & Custom Visualizations",
    description: "Use pre-configured views or empower users to build their own custom R-Views.",
  },
];

const CoreCapabilities = () => {
  const { ref: listRef, visibleItems } = useStaggerReveal(capabilities.length);

  return (
    <section id="features" className="section-padding section-alt relative overflow-hidden">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container-narrow relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Features
            </p>
            <h2 className="text-3xl md:text-[38px] font-extrabold font-heading leading-tight mb-3">
              From Scattered Data to Unified Insights
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Browser-frame mockup */}
          <RevealOnScroll direction="left" className="h-full relative">
            <div className="premium-card overflow-hidden sticky top-28 !border-border/40 shadow-xl">
              {/* Browser chrome */}
              <div className="px-5 py-3.5 border-b border-border/60 flex items-center gap-3 bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full" style={{ background: "hsl(45, 80%, 60%)" }} />
                  <span className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/60 rounded-md px-3 py-1 text-xs text-text-muted font-mono text-center">
                    salesforce.com/relationshipvista/features
                  </div>
                </div>
              </div>
              <img
                src={featuresImage}
                alt="RelationshipVista features overview"
                loading="lazy"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealOnScroll>

          {/* Right: feature list with staggered animation */}
          <div ref={listRef} className="space-y-3 py-4 lg:py-12">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-primary/15 hover:bg-card transition-all duration-300 cursor-default group"
                style={{
                  opacity: visibleItems[i] ? 1 : 0,
                  transform: visibleItems[i] ? "none" : "translateX(30px)",
                  transition: `opacity 0.5s ease-out, transform 0.5s ease-out, background 0.3s, border-color 0.3s`,
                }}
              >
                <div className="icon-box">
                  <cap.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[15px] font-bold font-heading text-text-heading mb-1 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
