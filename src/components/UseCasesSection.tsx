import {
  Building2, TrendingUp, Contact, Headphones,
  Package, FileText, Handshake, Puzzle,
} from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: Building2,
    tab: "Account Management",
    description: "Visualize account hierarchies, parent-child relationships, and related contacts.",
  },
  {
    icon: TrendingUp,
    tab: "Opportunity Pipeline",
    description: "Group opportunities by stage, source, or amount with visual hierarchy.",
  },
  {
    icon: Contact,
    tab: "Contact Mapping",
    description: "Explore contact hierarchies, report-to relationships, and multi-org networks.",
  },
  {
    icon: Headphones,
    tab: "Case Management",
    description: "Visualize case hierarchies, related contacts, and support chains.",
  },
  {
    icon: Package,
    tab: "Asset Tracking",
    description: "Map assets, products, and contracts to accounts and customers.",
  },
  {
    icon: FileText,
    tab: "Contract Management",
    description: "See contracts, amendments, and license relationships visually.",
  },
  {
    icon: Handshake,
    tab: "Partner Management",
    description: "Explore partner hierarchies, channel relationships, and reseller structures.",
  },
  {
    icon: Puzzle,
    tab: "Custom Objects",
    description: "Build custom visualizations for any object relationship in your org.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Core Capabilities
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              From AI-powered survey creation to real-time sentiment analysis — AgentVista covers the entire feedback lifecycle.
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            <div className="lg:w-[340px] shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="lg:sticky lg:top-28">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-heading leading-tight">
                    The Answer to the Whole <span className="text-primary">Data Cycle</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Benefits at every step from collection to action. AgentVista powers your entire feedback lifecycle natively within Salesforce.
                  </p>
                  
                  <div className="hidden lg:flex flex-col gap-3">
                    {['Creation', 'Intelligence', 'Distribution', 'Localization'].map((category) => (
                      <div key={category} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 space-y-4">
              {useCases.map((uc, i) => (
                <motion.div
                  key={uc.tab}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="group flex items-start gap-4 p-4 md:p-5 rounded-xl border border-border/60 bg-background transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_4px_20px_rgba(var(--primary),0.08)]">
                    <div className="w-10 h-10 rounded-lg flex flex-col items-center justify-center shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary">
                      <uc.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-semibold text-foreground text-base leading-tight font-heading">
                          {uc.tab}
                        </h3>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium hidden sm:inline whitespace-nowrap">
                          Use Case
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
