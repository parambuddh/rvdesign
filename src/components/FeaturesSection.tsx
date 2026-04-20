import {
  Network, SlidersHorizontal, GitBranch, LayoutList,
  Filter, Smartphone, Eye, Navigation, LayoutTemplate,
} from "lucide-react";
import { motion } from "framer-motion";
import FeaturesAnimation from "./FeaturesAnimation";

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

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding section-alt relative">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold tracking-widest uppercase gradient-text mb-3 inline-block">
              Features
            </p>
            <h2 className="text-3xl md:text-[38px] font-extrabold font-heading leading-tight mb-3">
              From Scattered Data to Unified Insights
            </h2>
            <div className="section-divider mt-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          {/* Left: Browser-frame mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full relative"
          >
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
              <FeaturesAnimation />
            </div>
          </motion.div>

          {/* Right: feature list with staggered animation */}
          <div className="space-y-3 py-4 lg:py-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-primary/15 hover:bg-card transition-all duration-300 cursor-default group"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
