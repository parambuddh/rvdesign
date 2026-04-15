import { Zap, Users, Lightbulb, CheckCircle, Blocks, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Accelerate data exploration",
    description: "Go from record to complete relationship map in seconds using interactive visual exploration.",
  },
  {
    icon: Users,
    title: "Empower every team",
    description: "Enable non-technical users to build, assign, and analyze relationships using natural language.",
  },
  {
    icon: Lightbulb,
    title: "Drive deeper insights",
    description: "Uncover trends and connection patterns across responses, cases, and conversations with built-in visualization.",
  },
  {
    icon: CheckCircle,
    title: "Close feedback loops faster",
    description: "Let RelationshipVista detect urgency and trigger follow-ups or CRM actions in real time.",
  },
  {
    icon: Blocks,
    title: "Boost data quality and relevance",
    description: "Dynamically explore relationships with AI-generated clarifying connections and recommendations.",
  },
  {
    icon: Shield,
    title: "Stay secure and compliant",
    description: "100% native to Salesforce and designed to meet HIPAA, ISO, SOC, and GDPR standards.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[40px] font-extrabold font-heading leading-tight mb-4">
            Built for Enterprise. Designed for
            <br />
            Everyone.
          </h2>
          <p className="text-text-body text-lg leading-relaxed">
            Not just a visualization tool. A relationship intelligence layer that turns every
            connection into action inside Salesforce.
          </p>
        </div>

        {/* AgentVista-style 3×2 grid with clean cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="icon-box mb-5 group-hover:bg-primary/10 transition-colors">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2.5">{b.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
