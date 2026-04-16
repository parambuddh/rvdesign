import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Settings, Layout, Layers, Box, CheckCircle2, HelpCircle, Laptop, Image, ChevronDown } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

/** 
 * NATIVE ACCORDION ITEM
 * Replacing Radix UI with robust native state to ensure 100% click reliability in production.
 */
const NativeAccordionItem = ({ 
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
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-sky-50/30 transition-colors group"
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
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-text-body leading-relaxed border-t border-sky-50 pt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserGuide = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-sky-50/30 font-body">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
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

        {/* Introduction Section */}
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
                        Once the RVC component is placed on a record page, it automatically provides the ability to browse and visualize all associated records. Relationship Views (R-Views) allow you to create customized visual representations of related data based on your requirements. These views function similarly to Salesforce List Views.
                      </p>
                      <p>
                        You can provide flexibility to users by allowing them to create and manage their own R-Views, or you can use predefined configurations to ensure consistent and streamlined data analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Guide Accordions Section */}
        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* 1. Get Started */}
            <NativeAccordionItem 
              title="Get Started" 
              icon={Laptop} 
              isOpen={openSection === 'get-started'} 
              onClick={() => toggleSection('get-started')}
            >
              <p>Installing RelationshipVista is the first step toward gaining deep visibility into your Salesforce data mapping.</p>
              <ul className="space-y-3 list-none pl-0 mt-4">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">1</div>
                  <span>Click <strong>Get It Now</strong> on AppExchange or use the package link provided by Ardira.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">2</div>
                  <span>When installing, select <strong>Install for All Users</strong> to ensure your entire team can benefit from relationship mapping.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-primary">3</div>
                  <span>Once installed, follow the "Ardira RelationshipVista Component" setup steps below to add it to your record pages.</span>
                </li>
              </ul>
            </NativeAccordionItem>

            {/* 2. Key Features */}
            <NativeAccordionItem 
              title="Key Features" 
              icon={Layout} 
              isOpen={openSection === 'features'} 
              onClick={() => toggleSection('features')}
            >
              <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                {[
                  "Rich, interactive and engaging visualization of your data map.",
                  "Embed data maps directly into standard and custom object record details.",
                  "Map relationships of multiple records across your org onto a single canvas!",
                  "Visualize One-to-one, One-to-many, and Junction relationships.",
                  "Explorer (indented tree) and Graphical Tree layouts.",
                  "Filter out unimportant related records dynamically.",
                  "Group related records using any field (e.g., Opportunities by Stage).",
                  "Configure record-level limits for parent-child displays.",
                  "Navigate hierarchy by clicking record and group nodes.",
                  "Quick-view record data in compact layout on mouse hover.",
                  "Full Right-to-Left (RTL) and Translation support.",
                  "Navigate directly to Salesforce record details via clean links."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </NativeAccordionItem>

            {/* 3. Why RelationshipVista? */}
            <NativeAccordionItem 
              title="Why RelationshipVista?" 
              icon={ArrowRight} 
              isOpen={openSection === 'why-rvc'} 
              onClick={() => toggleSection('why-rvc')}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <p className="font-bold text-text-heading mb-1 text-base">Optimized Data Navigation</p>
                  <p className="text-xs">Eliminates tab fatigue by consolidating multiple Related Lists into a single 360-degree interactive view.</p>
                </div>
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <p className="font-bold text-text-heading mb-1 text-base">Increased Productivity</p>
                  <p className="text-xs">Inline record actions and dynamic segmentation allow users to focus only on actionable data.</p>
                </div>
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <p className="font-bold text-text-heading mb-1 text-base">Salesforce Security</p>
                  <p className="text-xs">Inherits existing Security Models, including OLS, FLS, and Sharing Rules natively.</p>
                </div>
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <p className="font-bold text-text-heading mb-1 text-base">Scalability</p>
                  <p className="text-xs">Manages high record volumes efficiently using performance-stable record limits.</p>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 4. Component Setup */}
            <NativeAccordionItem 
              title="Component Setup" 
              icon={Box} 
              isOpen={openSection === 'setup'} 
              onClick={() => toggleSection('setup')}
            >
              <p>To begin using RelationshipVista, open the record detail page in <strong>Edit Page</strong> mode. You can then add the <strong>Ardira RelationshipVista</strong> component to any tab or section.</p>
              <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex gap-4 mt-4">
                <div className="shrink-0 h-10 w-10 bg-white rounded-lg flex items-center justify-center border border-sky-200 shadow-sm">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">Pro Tip</p>
                  <p className="text-xs">Create a dedicated "RelationshipVista" tab to give your team a focused area for hierarchy exploration without cluttering the main record view.</p>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 5. Component Properties */}
            <NativeAccordionItem 
              title="Component Properties" 
              icon={Settings} 
              isOpen={openSection === 'properties'} 
              onClick={() => toggleSection('properties')}
            >
              <div className="grid gap-6">
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-bold text-text-heading mb-1">Record Id</h4>
                  <p className="text-sm">Automatically populated. Represents the root record whose relationships will be displayed.</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-bold text-text-heading mb-1">Use Configuration</h4>
                  <p className="text-sm">Name of a specific view configuration to force the component to render in that mode (overrides selection unless pinned).</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-bold text-text-heading mb-1">Show Objects</h4>
                  <p className="text-sm">Comma-separated list of object API names to restrict which related objects appear in the visualization.</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-bold text-text-heading mb-1">Visible Records Limit</h4>
                  <p className="text-sm">Defines the max child records shown per parent. Users click "View n more..." to see others.</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-bold text-text-heading mb-1">View Layout</h4>
                  <p className="text-sm">Choose <strong>All</strong> (selectable), <strong>Explorer</strong> (indented tree), or <strong>Tree</strong> (graphical map).</p>
                </div>
                <div className="border-l-4 border-primary/30 pl-4">
                  <h4 className="font-bold text-text-heading mb-1">Width & Height</h4>
                  <p className="text-sm">Define exact dimensions (px, %) or set to "auto" for dynamic resizing based on container.</p>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 6. Relationship Views (R-Views) */}
            <NativeAccordionItem 
              title="Relationship Views (R-Views)" 
              icon={Layout} 
              isOpen={openSection === 'r-views'} 
              onClick={() => toggleSection('r-views')}
            >
              <p>Relationship Views (R-Views) allow you to tailor how related records are displayed. Managing R-Views is similar to working with Salesforce List Views.</p>
              <p className="mt-4">Within any R-View Configuration, you can customize:</p>
              <ul className="grid gap-2 text-sm italic list-inside list-disc opacity-80 pl-4 mt-2">
                <li>Restriction of record types shown</li>
                <li>Advanced filter logic (e.g., Status = 'Active')</li>
                <li>Grouping logic based on any field</li>
                <li>Custom sorting directions</li>
              </ul>

              <div className="mt-6 p-5 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-text-heading mb-3 text-base">How to Create a New R-View</h4>
                <ol className="space-y-3 list-decimal list-inside text-sm">
                  <li>Click the <strong>Settings (⚙️)</strong> icon in the toolbar.</li>
                  <li>Select <strong>New</strong> to open the Configuration Properties modal.</li>
                  <li>Give your view a <strong>Name</strong> and set the <strong>Sharing Setting</strong> (Only Me or All Users).</li>
                  <li>Optionally check <strong>Pinned</strong> to make it your default view.</li>
                  <li>Once created, click <strong>Edit</strong> from the settings menu to configure specific object nodes, filters, and sorting.</li>
                </ol>
              </div>
            </NativeAccordionItem>

            {/* 7. Sample Data */}
            <NativeAccordionItem 
              title="Sample Data" 
              icon={Box} 
              isOpen={openSection === 'sample-data'} 
              onClick={() => toggleSection('sample-data')}
            >
              <p>When testing RVC in a sandbox or test environment, you can quickly load sample data to explore functionality.</p>
              <ol className="space-y-3 list-decimal list-inside text-sm mt-4">
                <li>Navigate to the <strong>RelationshipVista Getting Started</strong> tab from the App Launcher.</li>
                <li>Click the <strong>Load Sample Data</strong> button.</li>
                <li>This adds sample records across various objects, allowing you to see complex hierarchies in action without manual entry.</li>
              </ol>
            </NativeAccordionItem>

            {/* 8. Toolbar Actions */}
            <NativeAccordionItem 
              title="Toolbar Actions" 
              icon={Laptop} 
              isOpen={openSection === 'toolbar'} 
              onClick={() => toggleSection('toolbar')}
            >
              <div className="grid gap-4">
                <div className="p-4 bg-sky-50/30 rounded-lg">
                  <span className="font-bold text-text-heading block mb-1">1. Expand/Collapse All</span>
                  <p className="text-xs">Instantly open or close every level of the hierarchy while respecting the Visible Records Limit.</p>
                </div>
                <div className="p-4 bg-sky-50/30 rounded-lg">
                  <span className="font-bold text-text-heading block mb-1">2. Two-Panel Layout</span>
                  <p className="text-xs">Divide the screen: Left panel for hierarchy, Right panel for record details. Edit records directly in the right panel.</p>
                </div>
                <div className="p-4 bg-sky-50/30 rounded-lg">
                  <span className="font-bold text-text-heading block mb-1">3. Full Screen</span>
                  <p className="text-xs">Immersive mode for complex map analysis without distraction from standard Salesforce headers.</p>
                </div>
                <div className="p-4 bg-sky-50/30 rounded-lg">
                  <span className="font-bold text-text-heading block mb-1">4. Explorer vs Tree View</span>
                  <p className="text-xs">Quick-toggle between an indented list view and a graphical connected interactive map.</p>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 9. Advanced Configuration */}
            <NativeAccordionItem 
              title="Advanced Configuration" 
              icon={Settings} 
              isOpen={openSection === 'advanced'} 
              onClick={() => toggleSection('advanced')}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-text-heading mb-2 italic">Root Node Settings</h4>
                  <ul className="text-xs space-y-1 list-inside list-disc opacity-80 pl-4">
                    <li><strong>Record Node Label:</strong> Select field used for display name.</li>
                    <li><strong>Auto Expand:</strong> Automatically show child records on load.</li>
                    <li><strong>Show Objects:</strong> Define which child object types should appear.</li>
                  </ul>
                </div>
                <div className="h-px bg-sky-100" />
                <div>
                  <h4 className="font-bold text-text-heading mb-2 italic">Junction Objects</h4>
                  <p className="text-sm mb-2 text-text-heading font-medium">Native Many-to-Many Support</p>
                  <ul className="text-xs space-y-2 list-inside list-disc opacity-80 pl-4">
                    <li><strong>Display Record Node:</strong> Hide technical junction IDs to show the direct relationship between entities (e.g., Account to Contact via Relationship record).</li>
                    <li><strong>Cascade Auto Expand:</strong> Especially useful for junction objects to skip empty layers and show direct connections immediately.</li>
                  </ul>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 10. Creating Records */}
            <NativeAccordionItem 
              title="Creating Records from Nodes" 
              icon={Layers} 
              isOpen={openSection === 'create'} 
              onClick={() => toggleSection('create')}
            >
              <p>Accelerate your workflow by creating new records directly within the relationship map hierarchy.</p>
              <ul className="text-sm space-y-2 list-inside list-disc opacity-80 pl-4 mt-4">
                <li>Click the <strong>"+"</strong> icon next to any Object Node.</li>
                <li>In <strong>Two-Panel mode</strong>, the creation form appears in the right sidebar.</li>
                <li>In <strong>Normal mode</strong>, the form opens in a standard Salesforce modal window.</li>
                <li>Requires standard Salesforce "Create" permissions for that object.</li>
              </ul>
            </NativeAccordionItem>

            {/* 11. Use Cases */}
            <NativeAccordionItem 
              title="Detailed Use Cases" 
              icon={Layers} 
              isOpen={openSection === 'use-cases'} 
              onClick={() => toggleSection('use-cases')}
            >
              <div className="space-y-8">
                {/* Use Case 1 */}
                <div className="space-y-4">
                  <div className="pill-badge bg-primary/5 text-primary border-primary/10">Scenario 1: Sales ROI Audit</div>
                  <p className="font-bold text-text-heading">VP Analysis of Pipeline Drivers</p>
                  <p className="text-sm">Identify which lead sources (Web, Referral, etc.) are driving the most revenue for a specific account, sorted by deal size.</p>
                  <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 text-xs text-text-body leading-relaxed">
                    <strong>Outcome:</strong> VP visualizes all "Closed Won" Opportunities grouped by Lead Source and sorted by Amount directly from the Account page, eliminating the need for manual reports.
                  </div>
                </div>

                <div className="h-px bg-sky-100" />

                {/* Use Case 2 */}
                <div className="space-y-4">
                  <div className="pill-badge bg-primary/5 text-primary border-primary/10">Scenario 2: CSM Risk Analysis</div>
                  <p className="font-bold text-text-heading">Customer Success Impact Mapping</p>
                  <p className="text-sm">Before a renewal (Opportunity), identify if there are any critical Support Cases open for the same account to fix issues before the pitch.</p>
                  <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 text-xs text-text-body leading-relaxed">
                    <strong>Outcome:</strong> CSM sees a connected view of Cases, Contacts, and Opportunities in one map. Spot risks immediately and take action before asking for a renewal.
                  </div>
                </div>

                <div className="h-px bg-sky-100" />

                <div>
                  <h4 className="font-bold text-text-heading mb-2 text-base">Other Common Scenarios</h4>
                  <ul className="text-sm space-y-2 list-inside list-disc opacity-80">
                    <li><strong>Global Hierarchy:</strong> User, Account, and Asset hierarchy exploration.</li>
                    <li><strong>Data Segmentation:</strong> Opportunities grouped by Stage or Lead Source.</li>
                    <li><strong>Quick Navigation:</strong> Instant access to Contracts, Orders, and Cases from an Account view.</li>
                  </ul>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 12. Icons & Branding */}
            <NativeAccordionItem 
              title="Icons & Branding" 
              icon={Image} 
              isOpen={openSection === 'styling'} 
              onClick={() => toggleSection('styling')}
            >
              <div className="space-y-6">
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <h4 className="font-bold text-text-heading mb-2">SLDS Custom Icon Format</h4>
                  <p className="text-xs mb-3 text-text-body">To use standard Salesforce icons, copy the icon name from the SLDS site and use this format:</p>
                  <div className="bg-white p-3 rounded border border-sky-200 font-mono text-xs overflow-x-auto whitespace-nowrap text-primary">
                    /_slds/icons/category-sprite/svg/symbols.svg#icon_name
                  </div>
                </div>
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                  <h4 className="font-bold text-text-heading mb-2">Custom Background Colors</h4>
                  <p className="text-xs text-text-body">Match your branding by using any HEX color code (e.g., #4D9A3F) in the "Record Icon Background Color" field within a Node Configuration.</p>
                </div>
              </div>
            </NativeAccordionItem>

            {/* 13. FAQ & Support */}
            <NativeAccordionItem 
              title="Questions & Support" 
              icon={HelpCircle} 
              isOpen={openSection === 'faq'} 
              onClick={() => toggleSection('faq')}
            >
              <p>Our team is dedicated to ensuring you get the most out of your Salesforce data visualization.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="mailto:support@ardira.com" className="btn-cta text-sm py-2 px-6">
                  Email Support <ArrowRight className="h-4 w-4 ml-2 inline" />
                </a>
                <a href="https://www.ardira.com/contact" target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-6">
                  Contact Sales
                </a>
              </div>
            </NativeAccordionItem>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserGuide;
