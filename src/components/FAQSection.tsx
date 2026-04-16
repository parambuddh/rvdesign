import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealOnScroll from "./RevealOnScroll";

const faqs = [
  {
    q: "Is RelationshipVista 100% native to Salesforce?",
    a: "Yes. RelationshipVista is built as a Lightning Web Component that lives entirely within Salesforce. No external tools, integrations, or data syncing required. Everything runs natively, providing real-time access and complete security compliance.",
  },
  {
    q: "Do I need technical skills to use RelationshipVista?",
    a: "No. RelationshipVista is designed for everyone. Users can explore relationships, apply filters, and create custom views using an intuitive, visual interface. Your admins can configure the component, but end users need zero technical knowledge.",
  },
  {
    q: "Can I customize the visualizations for my organization's needs?",
    a: "Absolutely. You can create custom Relationship Views (R-Views) based on any fields in your objects. Filter, group, and organize relationships exactly how your team needs them. Or use pre-built configurations for common scenarios.",
  },
  {
    q: "Does RelationshipVista work with custom objects?",
    a: "Yes. RelationshipVista supports all standard and custom objects in Salesforce. It visualizes lookup relationships, reverse lookups, and many-to-many relationships through junction objects seamlessly.",
  },
  {
    q: "Is RelationshipVista mobile-friendly?",
    a: "Yes. The component is fully responsive and works across all devices — desktop, tablet, and mobile. Your users can explore relationships wherever they are.",
  },
  {
    q: "How quickly can we get started?",
    a: "Installation is fast. Install the component from AppExchange, drop it on a record page, and you're ready to explore. No complex configuration needed, though customization options are available if you want them.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />

      <div className="container-narrow max-w-3xl relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[38px] font-extrabold font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-body text-lg">
              Everything you need to know about RelationshipVista.
            </p>
            <div className="section-divider mt-6" />
          </div>
        </RevealOnScroll>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="premium-card !rounded-xl overflow-hidden data-[state=open]:!shadow-lg data-[state=open]:!border-primary/20 !transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-text-heading hover:text-primary px-6 py-5 text-[15px] hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-text-body leading-relaxed px-6 pb-5 text-[15px]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
