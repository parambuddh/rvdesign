import { Zap, Users, Lightbulb, CheckCircle, Blocks, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Data Exploration",
    description: "Navigate complex relationships in seconds instead of hours. Eliminate manual record-by-record exploration.",
    detail: "See account trees, opportunity pipelines, and contact webs instantly",
  },
  {
    icon: Users,
    title: "Empower Every User",
    description: "Enable non-technical users to build custom relationship views and explore data independently.",
    detail: "No admin training needed — intuitive, visual interface",
  },
  {
    icon: Lightbulb,
    title: "Drive Deeper Insights",
    description: "Uncover hidden connections and relationship patterns with visual data mapping.",
    detail: "Spot opportunities, risks, and relationships at a glance",
  },
  {
    icon: CheckCircle,
    title: "Reduce Manual Work",
    description: "Stop chasing related records across tabs and list views — see everything in one place.",
    detail: "Free your team to focus on strategy, not data hunting",
  },
  {
    icon: Blocks,
    title: "Support Complex Structures",
    description: "Handle one-to-many, many-to-many, and custom junction object relationships seamlessly.",
    detail: "Even the most complex data structures become navigable",
  },
  {
    icon: Shield,
    title: "100% Native to Salesforce",
    description: "Built as a native Lightning Component — no integrations, no external tools, no data sync delays.",
    detail: "Real-time access, complete security compliance, zero maintenance",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Built for Enterprise. Designed for Everyone.
          </h2>
          <p className="text-text-body text-lg">
            Not just a visualization tool. A relationship intelligence layer that powers
            how your org understands data connections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">{b.title}</h3>
              <p className="text-sm text-text-body leading-relaxed mb-3">{b.description}</p>
              <p className="text-xs text-primary font-medium">{b.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
