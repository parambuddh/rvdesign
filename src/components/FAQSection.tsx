import { useState } from "react";
import { ChevronDown } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    q: "Is RelationshipVista 100% native to Salesforce?",
    a: "Yes. RelationshipVista is built as a Lightning Web Component that lives entirely within Salesforce. No external tools, integrations, or data syncing required.",
  },
  {
    q: "Do I need technical skills to use RelationshipVista?",
    a: "No. RelationshipVista is designed for everyone. Users can explore relationships, apply filters, and create custom views using an intuitive, visual interface.",
  },
  {
    q: "Can I customize the visualizations for my organization's needs?",
    a: "Absolutely. You can create custom Relationship Views (R-Views) based on any fields in your objects. Filter, group, and organize relationships exactly how your team needs them.",
  },
  {
    q: "Does RelationshipVista work with custom objects?",
    a: "Yes. RelationshipVista supports all standard and custom objects in Salesforce. It visualizes lookup relationships, reverse lookups, and many-to-many relationships seamlessly.",
  },
  {
    q: "How quickly can we get started?",
    a: "Installation is fast. Install the component from AppExchange, drop it on a record page, and you're ready to explore.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            <div className="section-divider mt-6" />
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "premium-card bg-white border-sky-100 shadow-sm overflow-hidden transition-all duration-300",
                activeIndex === i && "shadow-md border-primary/20"
              )}
            >
              <button 
                type="button"
                onClick={() => toggleFAQ(i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-sky-50/20 transition-colors group cursor-pointer touch-manipulation relative z-10 pointer-events-auto"
                aria-expanded={activeIndex === i}
              >
                <span className={cn(
                  "text-base md:text-[17px] font-bold text-text-heading group-hover:text-primary transition-colors pr-4",
                  activeIndex === i && "text-primary"
                )}>
                  {faq.q}
                </span>
                <ChevronDown className={cn(
                  "h-5 w-5 text-text-muted shrink-0 transition-transform duration-300",
                  activeIndex === i && "rotate-180 text-primary"
                )} />
              </button>
              
              <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                activeIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-text-body leading-relaxed border-t border-sky-50 pt-5 text-[15px]">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
