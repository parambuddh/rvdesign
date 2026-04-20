import { Zap, Users, Lightbulb, CheckCircle, Blocks, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "Accelerate data exploration",
    description: "Go from record to complete relationship map in seconds using interactive visual exploration.",
  },
  {
    icon: Users,
    title: "Empower every team",
    description: "Enable non-technical users to build, assign, and analyze relationships using a natural, visual interface.",
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
    <section id="benefits" className="section-padding section-alt relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold tracking-widest uppercase gradient-text mb-3 inline-block">
              Benefits
            </p>
            <h2 className="text-3xl md:text-[40px] font-extrabold font-heading leading-tight mb-4">
              Built for Enterprise. Designed for
              <br />
              <span className="gradient-text">Everyone.</span>
            </h2>
            <p className="text-text-body text-lg leading-relaxed">
              Not just a visualization tool. A relationship intelligence layer that turns every
              connection into action inside Salesforce.
            </p>
            <div className="section-divider mt-6" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="premium-card p-7 group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#49983E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left will-change-transform" />
              <div className="icon-box mb-5">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2.5 group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
