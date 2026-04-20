import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation";

const WhatIsSection = () => {
  return (
    <section id="overview" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full min-h-[400px] md:aspect-square mb-8 lg:mb-0"
          >
            <HeroAnimation />
          </motion.div>

          {/* Text */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm font-bold tracking-widest uppercase gradient-text mb-3 inline-block">
                Overview
              </p>
              <h2 className="text-3xl md:text-[36px] font-bold leading-tight font-heading">
                The Intelligent Relationship Visualization Tool Built within Salesforce
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4 text-text-body text-[15px] leading-relaxed">
                <p>
                  RelationshipVista is a powerful Lightning Web Component that lives natively
                  inside Salesforce. It lets you instantly visualize and navigate all related
                  records with interactive, dynamic relationship maps.
                </p>
                <p>
                  From account hierarchies to opportunity pipelines, from complex multi-level
                  relationships to custom object connections, RelationshipVista transforms
                  scattered data into clear, actionable visual insights.
                </p>
                <p>
                  Empower your users to explore relationships faster, understand data connections
                  deeper, and make better-informed decisions — without writing a single line of code.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative pl-5 mt-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: "linear-gradient(180deg, hsl(113, 42%, 42%), hsl(202, 35%, 62%))" }} />
                <p className="text-primary font-semibold italic text-lg">
                  "Visualize any relationship. Customize any view. Explore any hierarchy."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
