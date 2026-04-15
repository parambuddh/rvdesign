import {
  Network, SlidersHorizontal, GitBranch, LayoutList,
  Filter, Smartphone, Eye, Navigation, LayoutTemplate,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

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
  return (
    <section id="features" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-[38px] font-extrabold font-heading leading-tight">
            From Scattered Data to Unified Insights
          </h2>
        </div>

        {/* AgentVista pattern: Left mockup + Right feature list with numbered steps */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: product mockup card - like AgentVista's command prompt card */}
          <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden sticky top-24">
            <div className="p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-destructive/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs text-text-muted font-medium">RelationshipVista Dashboard</span>
              </div>
            </div>
            <img
              src={heroDashboard}
              alt="RelationshipVista features overview"
              loading="lazy"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>

          {/* Right: feature list - AgentVista pattern with icon + title + desc */}
          <div className="space-y-2">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-primary/15 hover:bg-primary-light/50 transition-all duration-200 cursor-default group"
              >
                <div className="icon-box group-hover:bg-primary/10 transition-colors">
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
