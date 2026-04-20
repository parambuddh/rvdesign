import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Settings, Layout, Layers, Box, CheckCircle2, HelpCircle, Laptop, Image as ImageIcon, ChevronDown } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

/** 
 * ROBUST GUIDE ACCORDION 
 * This version uses native React state to guarantee clickability.
 */
const GuideAccordionItem = ({ 
  title, 
  icon: Icon, 
  children, 
  isOpen, 
  onClick 
}: { 
  title: string; 
  icon: any; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className={cn(
      "premium-card bg-white border-sky-100 shadow-sm overflow-hidden transition-all duration-300",
      isOpen && "shadow-md border-primary/20"
    )}>
      <button 
        type="button"
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-sky-50/20 transition-colors group cursor-pointer touch-manipulation relative z-10 pointer-events-auto"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-text-heading group-hover:text-primary transition-colors">{title}</span>
        </div>
        <ChevronDown className={cn(
          "h-5 w-5 text-text-muted transition-transform duration-300",
          isOpen && "rotate-180 text-primary"
        )} />
      </button>
      
      <div className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-text-body leading-relaxed border-t border-sky-50 pt-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Guide = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  // SEO: Set per-page canonical URL, title, and meta description
  useEffect(() => {
    document.title = "User Guide — RelationshipVista | Salesforce Relationship Mapping";
    
    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.relationshipvista.com/user-guide');

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Complete user guide for RelationshipVista — learn how to configure, visualize, and analyze Salesforce relationship hierarchies with interactive data maps.');
    }

    return () => {
      document.title = "RelationshipVista — Intelligent Relationship Mapping & Visualization | Salesforce";
      if (canonical) canonical.setAttribute('href', 'https://www.relationshipvista.com/');
    };
  }, []);

  return (
    <div className="min-h-screen bg-sky-50/30 font-body">
      <Navbar />

      <main className="pt-24 pb-20">
        <section className="px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={0}>
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-primary hover:text-primary-dark transition-colors">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold text-text-heading">RelationshipVista User Guide</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6 tracking-tight">
                RelationshipVista <span className="gradient-text">User Guide</span>
              </h1>
              <p className="text-xl text-text-body font-medium leading-relaxed max-w-2xl">
                Master the art of relationship mapping in Salesforce. Learn how to configure, visualize, and analyze your data hierarchies with ease.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-4 md:px-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={0.2}>
              <div className="premium-card p-8 bg-white border-sky-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="icon-box-lg bg-primary/10">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-heading mb-4">Introduction</h2>
                    <div className="space-y-4 text-text-body leading-relaxed">
                      <p>
                        <strong>Ardira RelationshipVista (“RVC”)</strong> is a Lightning Web Component (LWC) that enables users to easily navigate and visualize all records related to a specific record. By adding the component to a record detail page, users can instantly explore its related data in a structured view.
                      </p>
                      <p>
                        Once the RVC component is placed on a record page, it automatically provides the ability to browse and visualize all associated records. Relationship Views (R-Views) allow you to create customized visual representations of related data based on your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <GuideAccordionItem 
              title="Get Started" 
              icon={Laptop} 
              isOpen={openSection === 'get-started'} 
              onClick={() => toggleSection('get-started')}
            >
              <p>Installing RelationshipVista is the first step toward gaining deep visibility into your Salesforce data mapping.</p>
              <ul className="space-y-4 list-none pl-0 mt-6">
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">1</div>
                  <span>Click <strong>Get It Now</strong> on AppExchange or use the package link provided by Ardira.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">2</div>
                  <span>When installing, select <strong>Install for All Users</strong> to ensure your entire team can benefit.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">3</div>
                  <span>Once installed, follow the "Ardira RelationshipVista Component" setup steps below.</span>
                </li>
              </ul>
            </GuideAccordionItem>

            <GuideAccordionItem 
              title="Key Features" 
              icon={Layout} 
              isOpen={openSection === 'features'} 
              onClick={() => toggleSection('features')}
            >
              <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                {[
                  "Rich, interactive and engaging visualization.",
                  "Embed data maps directly into standard and custom object record details.",
                  "Map relationships of multiple records across your org onto a single canvas!",
                  "Visualize One-to-one, One-to-many, and Junction relationships.",
                  "Explorer (indented tree) and Graphical Tree layouts.",
                  "Filter out unimportant related records dynamically.",
                  "Group related records using any field (e.g., Opportunities by Stage).",
                  "Configure record-level limits for parent-child displays.",
                  "Navigate hierarchy by clicking record and group nodes.",
                  "Full Right-to-Left (RTL) and Translation support."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </GuideAccordionItem>

            <GuideAccordionItem 
              title="Why RelationshipVista?" 
              icon={ArrowRight} 
              isOpen={openSection === 'why-rvc'} 
              onClick={() => toggleSection('why-rvc')}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <p className="font-bold text-text-heading mb-1 text-base">Optimized Data Navigation</p>
                  <p className="text-xs">Eliminates tab fatigue by consolidating multiple Related Lists into a single view.</p>
                </div>
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <p className="font-bold text-text-heading mb-1 text-base">Increased Productivity</p>
                  <p className="text-xs">Inline record actions and dynamic segmentation allow users to focus on actionable data.</p>
                </div>
              </div>
            </GuideAccordionItem>

            <GuideAccordionItem 
              title="Component Setup" 
              icon={Box} 
              isOpen={openSection === 'setup'} 
              onClick={() => toggleSection('setup')}
            >
              <p>To begin using RelationshipVista, open the record detail page in <strong>Edit Page</strong> mode. You can then add the <strong>Ardira RelationshipVista</strong> component to any tab or section.</p>
              <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex gap-4 mt-6">
                <div className="shrink-0 h-10 w-10 bg-white rounded-lg flex items-center justify-center border border-sky-200">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">Pro Tip</p>
                  <p className="text-xs">Create a dedicated "RelationshipVista" tab for hierarchy exploration.</p>
                </div>
              </div>
            </GuideAccordionItem>

            <GuideAccordionItem 
              title="Detailed Use Cases" 
              icon={Layers} 
              isOpen={openSection === 'use-cases'} 
              onClick={() => toggleSection('use-cases')}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="pill-badge bg-primary/5 text-primary border-primary/10">Scenario 1: Sales ROI Audit</div>
                  <p className="text-sm">Identify lead sources driving revenue for a specific account, sorted by deal size.</p>
                </div>
                <div className="h-px bg-sky-100" />
                <div className="space-y-3">
                  <div className="pill-badge bg-primary/5 text-primary border-primary/10">Scenario 2: CSM Risk Analysis</div>
                  <p className="text-sm">Identify critical Support Cases open for an account before a renewal pitch.</p>
                </div>
              </div>
            </GuideAccordionItem>

            <GuideAccordionItem 
              title="Icons & Branding" 
              icon={ImageIcon} 
              isOpen={openSection === 'styling'} 
              onClick={() => toggleSection('styling')}
            >
              <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                <h4 className="font-bold text-text-heading mb-2">SLDS Custom Icon Format</h4>
                <div className="bg-white p-3 rounded border border-sky-200 font-mono text-xs overflow-x-auto text-primary">
                  /_slds/icons/category-sprite/svg/symbols.svg#icon_name
                </div>
              </div>
            </GuideAccordionItem>

            <GuideAccordionItem 
              title="Questions & Support" 
              icon={HelpCircle} 
              isOpen={openSection === 'faq'} 
              onClick={() => toggleSection('faq')}
            >
              <p className="mb-6">Our team is dedicated to ensuring you get the most out of RelationshipVista.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:support@ardira.com" className="btn-cta text-sm py-2 px-6">
                  Email Support <ArrowRight className="h-4 w-4 ml-2 inline" />
                </a>
              </div>
            </GuideAccordionItem>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
