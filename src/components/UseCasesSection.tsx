import { useState } from "react";
import {
  Building2, TrendingUp, Contact, Headphones,
  Package, FileText, Handshake, Puzzle,
  Zap, CheckCircle, BarChart3, Search,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const useCases = [
  {
    icon: Building2,
    tab: "Account Management",
    description: "Visualize account hierarchies, parent-child relationships, and related contacts.",
    bullets: [
      { icon: Zap, text: "Map multi-level account structures" },
      { icon: CheckCircle, text: "Identify key contacts and their roles" },
      { icon: BarChart3, text: "Track related opportunities and contracts" },
      { icon: Search, text: "Query: 'Which divisions have the most open opportunities?'" },
    ],
  },
  {
    icon: TrendingUp,
    tab: "Opportunity Pipeline",
    description: "Group opportunities by stage, source, or amount with visual hierarchy.",
    bullets: [
      { icon: Zap, text: "Visualize sales pipeline at a glance" },
      { icon: CheckCircle, text: "Group opportunities by decision stage" },
      { icon: BarChart3, text: "See forecasting clearly across all deals" },
      { icon: Search, text: "Show opportunities grouped by sales stage" },
    ],
  },
  {
    icon: Contact,
    tab: "Contact Mapping",
    description: "Explore contact hierarchies, report-to relationships, and multi-org networks.",
    bullets: [
      { icon: Zap, text: "Map organizational hierarchies" },
      { icon: CheckCircle, text: "See who reports to whom" },
      { icon: BarChart3, text: "Track contact roles and relationships" },
      { icon: Search, text: "Query: 'Show me all contacts under this account'" },
    ],
  },
  {
    icon: Headphones,
    tab: "Case Management",
    description: "Visualize case hierarchies, related contacts, and support chains.",
    bullets: [
      { icon: Zap, text: "Filter cases by priority or status" },
      { icon: CheckCircle, text: "See related cases and contacts" },
      { icon: BarChart3, text: "Track case resolution chains" },
      { icon: Search, text: "Query: 'Which accounts have the most critical open cases?'" },
    ],
  },
  {
    icon: Package,
    tab: "Asset Tracking",
    description: "Map assets, products, and contracts to accounts and customers.",
    bullets: [
      { icon: Zap, text: "Visualize installed asset base" },
      { icon: CheckCircle, text: "Track product relationships" },
      { icon: BarChart3, text: "Monitor contract coverage" },
      { icon: Search, text: "Filter to show only high-value assets" },
    ],
  },
  {
    icon: FileText,
    tab: "Contract Management",
    description: "See contracts, amendments, and license relationships visually.",
    bullets: [
      { icon: Zap, text: "Group contracts by status or type" },
      { icon: CheckCircle, text: "Map license allocations" },
      { icon: BarChart3, text: "Identify renewal opportunities" },
      { icon: Search, text: "Query: 'Which accounts have contracts expiring soon?'" },
    ],
  },
  {
    icon: Handshake,
    tab: "Partner Management",
    description: "Explore partner hierarchies, channel relationships, and reseller structures.",
    bullets: [
      { icon: Zap, text: "Map partner networks" },
      { icon: CheckCircle, text: "See territory assignments" },
      { icon: BarChart3, text: "Track partner relationships" },
      { icon: Search, text: "Visualize reseller organization structures" },
    ],
  },
  {
    icon: Puzzle,
    tab: "Custom Objects",
    description: "Build custom visualizations for any object relationship in your org.",
    bullets: [
      { icon: Zap, text: "Map project hierarchies" },
      { icon: CheckCircle, text: "Visualize custom business structures" },
      { icon: BarChart3, text: "Explore custom lookup relationships" },
      { icon: Search, text: "Show any custom object network" },
    ],
  },
];

const UseCasesSection = () => {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-[38px] font-extrabold font-heading leading-tight mb-4">
            Built for Every Team
          </h2>
          <p className="text-text-body text-lg">
            RelationshipVista adapts to every data structure and use case across industries.
          </p>
        </div>

        {/* AgentVista-style horizontal tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((uc, i) => (
            <button
              key={uc.tab}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                i === active
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-text-body border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              <uc.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{uc.tab}</span>
            </button>
          ))}
        </div>

        {/* AgentVista-style content: left text + right image */}
        <div className="bg-card rounded-2xl border border-border/60 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: text content */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="icon-box-lg">
                  <current.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading">{current.tab}</h3>
              </div>
              <p className="text-text-body mb-6 leading-relaxed">{current.description}</p>
              <div className="space-y-3">
                {current.bullets.map((b) => (
                  <div key={b.text} className="flex items-start gap-3">
                    <b.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-text-body leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="bg-section-alt flex items-center justify-center p-6 lg:p-8 min-h-[300px]">
              <img
                src={heroDashboard}
                alt={`${current.tab} visualization`}
                loading="lazy"
                className="rounded-xl shadow-lg border border-border/50 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
