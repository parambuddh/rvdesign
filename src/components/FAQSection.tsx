import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    id: "faq-1",
    q: "Is RelationshipVista 100% native to Salesforce?",
    a: "Yes. RelationshipVista is built as a Lightning Web Component that lives entirely within Salesforce. No external tools, integrations, or data syncing required.",
  },
  {
    id: "faq-2",
    q: "Do I need technical skills to use RelationshipVista?",
    a: "No. RelationshipVista is designed for everyone. Users can explore relationships, apply filters, and create custom views using an intuitive, visual interface.",
  },
  {
    id: "faq-3",
    q: "Can I customize the visualizations for my organization's needs?",
    a: "Absolutely. You can create custom Relationship Views (R-Views) based on any fields in your objects. Filter, group, and organize relationships exactly how your team needs them.",
  },
  {
    id: "faq-4",
    q: "Does RelationshipVista work with custom objects?",
    a: "Yes. RelationshipVista supports all standard and custom objects in Salesforce. It visualizes lookup relationships, reverse lookups, and many-to-many relationships seamlessly.",
  },
  {
    id: "faq-5",
    q: "How quickly can we get started?",
    a: "Installation is fast. Install the component from AppExchange, drop it on a record page, and you're ready to explore.",
  },
];

const FAQs = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="section-padding section-alt relative overflow-hidden" id="faq">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container-narrow max-w-3xl relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[38px] font-extrabold font-heading mb-4 text-text-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-text-body text-lg">
              Everything you need to know about RelationshipVista.
            </p>
            <div className="section-divider mt-6 mx-auto" />
          </div>
        </RevealOnScroll>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            value={openItem || ""}
            onValueChange={setOpenItem}
          >
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setOpenItem(faq.id)}
              >
                <AccordionItem
                  value={faq.id}
                  className={cn(
                    "border border-sky-100 rounded-2xl transition-all duration-300 hover:border-primary/40 hover:shadow-lg bg-white",
                    openItem === faq.id && "border-primary/20 shadow-md"
                  )}
                >
                  <AccordionTrigger
                    className="px-6 py-5 hover:no-underline hover:bg-sky-50/50 transition-colors duration-200 [&[data-state=open]]:bg-primary/5 group rounded-2xl [&[data-state=open]]:rounded-b-none"
                    aria-label={`Question ${index + 1}: ${faq.q}`}
                  >
                    <div className="flex items-center text-left flex-1" aria-hidden="true">
                      <span className="text-base md:text-[17px] font-bold text-text-heading group-hover:text-primary transition-colors duration-200">
                        {faq.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-[15px] text-text-body leading-relaxed border-t border-sky-50 bg-white rounded-b-2xl">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;

