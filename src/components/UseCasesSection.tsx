import {
  Building2, TrendingUp, Contact, Headphones,
  Package, FileText, Handshake, Puzzle,
} from "lucide-react";
import { motion } from "framer-motion";
import UseCasesAnimation from "./UseCasesAnimation";

const useCases = [
  {
    icon: Building2,
    tab: "Account Management",
    description: "Visualize account hierarchies, parent-child relationships, and related contacts in a single view.",
  },
  {
    icon: TrendingUp,
    tab: "Opportunity Pipeline",
    description: "Group and explore opportunities by stage, source, or amount with clear visual hierarchy.",
  },
  {
    icon: Contact,
    tab: "Contact Mapping",
    description: "Explore who reports to whom and uncover key influencers across multi-org networks.",
  },
  {
    icon: Headphones,
    tab: "Case Management",
    description: "Accelerate resolution times by visualizing case histories, escalations, and support chains.",
  },
  {
    icon: Package,
    tab: "Asset Tracking",
    description: "Map out physical assets, software products, and active contracts assigned to your accounts.",
  },
  {
    icon: FileText,
    tab: "Contract Management",
    description: "Maintain clear visibility of master service agreements, amendments, and license relationships.",
  },
  {
    icon: Handshake,
    tab: "Partner Management",
    description: "Easily navigate partner hierarchies, channel relationships, and reseller structures.",
  },
  {
    icon: Puzzle,
    tab: "Custom Objects",
    description: "Build custom interactive visualizations for any standard or custom object relationship in your org.",
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
              From account planning to complex partner tracking — RelationshipVista handles every relational use case natively within Salesforce.
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            <div className="lg:w-[380px] shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="lg:sticky lg:top-32">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-heading leading-tight">
                    Connecting Your <span className="text-primary">Entire Org</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    Gain absolute clarity across all departments. Break down data silos and let every team fully comprehend their standard and custom records.
                  </p>
                  
                  {/* The new Infographic */}
                  <div className="w-full relative rounded-2xl overflow-hidden border border-border/60 bg-background/50 backdrop-blur-sm shadow-xl aspect-square md:aspect-auto md:h-[400px]">
                    <UseCasesAnimation />
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
                    <div className="w-12 h-12 rounded-lg flex flex-col items-center justify-center shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary">
                      <uc.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>

                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-semibold text-foreground text-lg leading-tight font-heading">
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

