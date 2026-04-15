import {
  Network, SlidersHorizontal, GitBranch, LayoutList,
  Filter, Smartphone, Eye, Navigation, LayoutTemplate,
} from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            From Scattered Data to Unified Insights
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <cap.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">{cap.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
