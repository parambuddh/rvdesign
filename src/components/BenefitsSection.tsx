import { Zap, Users, Lightbulb, CheckCircle, Blocks, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Accelerate data exploration",
    description: "Navigate complex relationships in seconds instead of hours. Eliminate manual record-by-record exploration.",
  },
  {
    icon: Users,
    title: "Empower every team",
    description: "Enable non-technical users to build custom relationship views and explore data independently using natural language.",
  },
  {
    icon: Lightbulb,
    title: "Drive deeper insights",
    description: "Uncover hidden connections and relationship patterns with visual data mapping across responses, cases, and conversations.",
  },
  {
    icon: CheckCircle,
    title: "Reduce manual work",
    description: "Stop chasing related records across tabs and list views — see everything in one place with automated visualization.",
  },
  {
    icon: Blocks,
    title: "Support complex structures",
    description: "Handle one-to-many, many-to-many, and custom junction object relationships seamlessly without any configuration.",
  },
  {
    icon: Shield,
    title: "Stay secure and compliant",
    description: "100% native to Salesforce — real-time access, complete security compliance, and zero maintenance overhead.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding section-alt">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[40px] font-extrabold font-heading leading-tight mb-4">
            Built for Enterprise. Designed for Everyone.
          </h2>
          <p className="text-text-body text-lg leading-relaxed">
            Not just a visualization tool. A relationship intelligence layer that powers
            how your org understands data connections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="icon-box mb-5 group-hover:bg-primary/10 transition-colors">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">{b.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
