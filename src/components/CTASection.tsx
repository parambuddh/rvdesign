import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CalendlyModal from "./CalendlyModal";

const CTASection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 relative overflow-hidden" style={{ background: "linear-gradient(90deg, #4D9A3F 0%, #49983E 30%, #2a8b7e 70%, #1a9b8e 100%)" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[600px] h-[600px] rounded-full -top-60 -left-60 bg-white/10 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full -bottom-40 -right-40 bg-white/10 blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container-narrow text-center max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: "rgba(255, 255, 255, 0.15)", color: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
            Get Started
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-[42px] font-extrabold font-heading text-primary-foreground mb-6 leading-tight">
            Ready to Visualize Your Salesforce Relationships?
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            See RelationshipVista in action. Transform how your org explores and
            understands data connections.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-primary font-bold text-base hover:bg-background/90 transition-all shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
            >
              Book a Demo <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default CTASection;
