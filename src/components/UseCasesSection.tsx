import { useState } from "react";
import {
  Building2, TrendingUp, Contact, Headphones,
  Package, FileText, Handshake, Puzzle,
} from "lucide-react";

const useCases = [
  {
    icon: Building2,
    tab: "Account Management",
    description: "Visualize account hierarchies, parent-child relationships, and related contacts.",
    bullets: [
      "Map multi-level account structures",
      "Identify key contacts and their roles",
      "Track related opportunities and contracts",
    ],
    example: "Which divisions have the most open opportunities?",
  },
  {
    icon: TrendingUp,
    tab: "Opportunity Pipeline",
    description: "Group opportunities by stage, source, or amount with visual hierarchy.",
    bullets: [
      "Visualize sales pipeline at a glance",
      "Group opportunities by decision stage",
      "See forecasting clearly",
    ],
    example: "Show opportunities grouped by sales stage.",
  },
  {
    icon: Contact,
    tab: "Contact Mapping",
    description: "Explore contact hierarchies, report-to relationships, and multi-org networks.",
    bullets: [
      "Map organizational hierarchies",
      "See who reports to whom",
      "Track contact roles and relationships",
    ],
    example: "Show me all contacts under this account.",
  },
  {
    icon: Headphones,
    tab: "Case Management",
    description: "Visualize case hierarchies, related contacts, and support chains.",
    bullets: [
      "Filter cases by priority or status",
      "See related cases and contacts",
      "Track case resolution chains",
    ],
    example: "Which accounts have the most critical open cases?",
  },
  {
    icon: Package,
    tab: "Asset Tracking",
    description: "Map assets, products, and contracts to accounts and customers.",
    bullets: [
      "Visualize installed asset base",
      "Track product relationships",
      "Monitor contract coverage",
    ],
    example: "Filter to show only high-value assets.",
  },
  {
    icon: FileText,
    tab: "Contract Management",
    description: "See contracts, amendments, and license relationships visually.",
    bullets: [
      "Group contracts by status or type",
      "Map license allocations",
      "Identify renewal opportunities",
    ],
    example: "Which accounts have contracts expiring soon?",
  },
  {
    icon: Handshake,
    tab: "Partner Management",
    description: "Explore partner hierarchies, channel relationships, and reseller structures.",
    bullets: [
      "Map partner networks",
      "See territory assignments",
      "Track partner relationships",
    ],
    example: "Visualize reseller organization structures.",
  },
  {
    icon: Puzzle,
    tab: "Custom Objects",
    description: "Build custom visualizations for any object relationship in your org.",
    bullets: [
      "Map project hierarchies",
      "Visualize custom business structures",
      "Explore custom lookup relationships",
    ],
    example: "Show any custom object network.",
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Built for Every Team
          </h2>
          <p className="text-text-body text-lg">
            RelationshipVista adapts to every data structure and use case across industries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((uc, i) => (
            <button
              key={uc.tab}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-text-body hover:bg-accent"
              }`}
            >
              <uc.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{uc.tab}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <current.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading">{current.tab}</h3>
              </div>
              <p className="text-text-body mb-6 leading-relaxed">{current.description}</p>
              <ul className="space-y-3 mb-6">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="bg-accent/50 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-primary font-medium italic">"{current.example}"</p>
              </div>
            </div>

            {/* Placeholder visualization */}
            <div className="bg-muted rounded-xl p-8 flex items-center justify-center min-h-[250px]">
              <div className="text-center">
                <current.icon className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                <p className="text-sm text-text-muted font-medium">{current.tab} Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
