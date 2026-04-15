import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Settings, Layout, Layers, Box, CheckCircle2, HelpCircle, Laptop, Image } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const UserGuide = () => {
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
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={0.3}>
              <Accordion type="single" collapsible className="space-y-4">
                
                {/* 1. Key Features */}
                <AccordionItem value="key-features" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm pointer-events-auto">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Layout className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Key Features</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed">
                    <ul className="grid gap-4 list-none pl-0">
                      {[
                        "Rich, interactive and engaging visualization of your data map.",
                        "Embed data maps directly into standard and custom object record details.",
                        "Map relationships of multiple records across your org onto a single canvas!",
                        "Visualize related records One-to-one, One-to-many, and Many-to-many relationships built using lookup and reverse lookup relationships including junction objects.",
                        "Visualize relationship with explorer (indented tree) layout and graphical tree layout.",
                        "Visualize records of specific objects; filter out unimportant related records.",
                        "Group your related records using any field e.g. group opportunities by stage.",
                        "Configure filters to limit what children records are visible under a parent record.",
                        "Navigate across the hierarchy by clicking record and group nodes.",
                        "Quickly view record data in a compact layout on mouse hover.",
                        "Navigate to a record detail by clicking the record link.",
                        "Right-to-Left Language Compatible",
                        "Language Translation Support"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Use Cases */}
                <AccordionItem value="use-cases" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Layers className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Use Cases</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-6">
                    <div className="grid gap-4">
                      <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                        <p className="font-semibold text-text-heading mb-2">Hierarchical Visualization</p>
                        <p className="text-sm">Visualize various hierarchical records such as User Hierarchy, Account Hierarchy, Contact Hierarchy, Asset Hierarchy, and Case Hierarchy.</p>
                      </div>
                      <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                        <p className="font-semibold text-text-heading mb-2">Data Segmentation</p>
                        <p className="text-sm">Visualize an account’s opportunities grouped by stage, lead source and $ value. Quickly navigate to opportunity contacts.</p>
                      </div>
                      <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                        <p className="font-semibold text-text-heading mb-2">Advanced Filtering</p>
                        <p className="text-sm">Filter the records with the object's fields. For example, filter to show the opportunity whose amount is greater than $10000.</p>
                      </div>
                      <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                        <p className="font-semibold text-text-heading mb-2">Quick Navigation</p>
                        <p className="text-sm">Quickly locate an Account’s Contracts, Products, Orders, Cases and more right in an account record page.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. Ardira RelationshipVista Component */}
                <AccordionItem value="component-setup" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Box className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Ardira RelationshipVista Component</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-4">
                    <p>To begin using RelationshipVista, open the record detail page in edit mode, create a custom tab, and add the <strong>Ardira RelationshipVista</strong> component to the page. You can name the tab as needed (for example, RelationshipVista).</p>
                    <p>The component is not restricted to a custom tab, you can place it anywhere on the record page based on your layout preference.</p>
                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                      <p className="text-sm font-medium">After adding the component, ensure that you <strong>save and activate</strong> the page. For example, if added to an Account record page, it will enable you to explore all records related to that account.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. RVC Component Properties */}
                <AccordionItem value="properties" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">RVC Component Properties</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-6">
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Record Id</h4>
                      <p className="text-sm">This represents the record whose relationships will be displayed. When the component is added to a record page, the Record Id is automatically populated, so no manual input is required.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Use Configuration</h4>
                      <p className="text-sm">When a specific view configuration name is provided, the component renders exclusively using that configuration. (Note: If any view is pinned, it overrides this setting and displays the pinned view in read-only mode.)</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Allow Users to Update View Configuration</h4>
                      <p className="text-sm">When enabled, users can create and modify their own view configurations. If disabled, users will not have permission to create or edit any configurations.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Show</h4>
                      <p className="text-sm">Determines which records are displayed: "My Records" (owned by the current user) or "All Records" (accessible to the user).</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Visible Records Limit</h4>
                      <p className="text-sm">Defines the maximum number of child records displayed under a parent record. Additional records can be viewed by clicking the "View n more..." option.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">View Layout</h4>
                      <p className="text-sm">Choose from: <strong>All</strong> (switch between layouts), <strong>Explorer</strong> (indented hierarchy), or <strong>Tree</strong> (graphical structure).</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. Relationship Views ("R-Views") */}
                <AccordionItem value="r-views" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Layout className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Relationship Views ("R-Views")</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-4">
                    <p>Relationship Views (R-Views) allow you to tailor how related records are displayed, helping you focus on the most relevant data. Managing R-Views is similar to working with Salesforce List Views.</p>
                    <p>With R-View configurations, you can define each node in the hierarchy by:</p>
                    <ul className="grid gap-2 text-sm italic list-inside list-disc">
                      <li>Restricting which types of records are shown</li>
                      <li>Applying filters to refine results</li>
                      <li>Grouping records based on object fields</li>
                      <li>Sorting records based on object fields</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* 6. Toolbar Actions */}
                <AccordionItem value="toolbar" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Laptop className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Toolbar Actions</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-6">
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">1. Expand All</h4>
                      <p className="text-sm text-text-muted">Quickly expand the entire relationship hierarchy starting from the root node. Expansion respects the Visible Records Limit.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">2. Collapse All</h4>
                      <p className="text-sm text-text-muted">Resets the relationship view by collapsing all expanded nodes. Only the root node remains visible.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">3. Two-Panel Layout</h4>
                      <p className="text-sm text-text-muted">Divide the interface into two sections: Left panel for hierarchy and Right panel for record details or list views. Users can edit records directly in the right panel.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">4. Full Screen</h4>
                      <p className="text-sm text-text-muted">Displays the RelationshipVista component in immersive full-screen mode.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">5. Explorer vs Tree View</h4>
                      <p className="text-sm text-text-muted">Switch between an indented, hierarchical list (Explorer) and a graphical connected nodes map (Tree).</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 7. Setup & Advanced Configuration */}
                <AccordionItem value="configuration" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Setup & Configuration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-6">
                    <div>
                      <h4 className="font-bold text-text-heading mb-2 italic underline underline-offset-4">Root Node Configuration</h4>
                      <p className="text-sm mb-2">Control how the primary record is displayed:</p>
                      <ul className="text-xs space-y-1 list-inside list-disc opacity-80">
                        <li>Object API Name: Displays root type.</li>
                        <li>Label Field: Select the field used for the display label.</li>
                        <li>Auto Expand: Automatically show children on load.</li>
                        <li>Show Objects: Set which child objects appear.</li>
                      </ul>
                    </div>
                    <div className="h-px bg-sky-100" />
                    <div>
                      <h4 className="font-bold text-text-heading mb-2 italic underline underline-offset-4">Object Node Configuration</h4>
                      <p className="text-sm mb-2">Configure each node in the hierarchy:</p>
                      <ul className="text-xs space-y-1 list-inside list-disc opacity-80">
                        <li>Object Node Label: Customize the display name.</li>
                        <li>Cascade Auto Expand: Expand one additional level beyond records.</li>
                        <li>Record Icon URL: Specify SLDS icons using standard format.</li>
                        <li>Filter & Sort: Apply filters (e.g., Amount {'>'} 10k) and sort directions.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 8. Advanced Features */}
                <AccordionItem value="advanced-features" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Layers className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Advanced Features</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-6">
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Creating Records from Nodes</h4>
                      <p className="text-sm">Create records directly from the hierarchy by clicking the "+" icon next to an Object Node. In Two-Panel mode, the form appears on the right; otherwise, it opens in a modal.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">Junction Object Support</h4>
                      <p className="text-sm">RelationshipVista supports complex junction objects (like Account Contact Relationship) with automatic ID representation and intermediate node management.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading mb-2">RTL & Translation Support</h4>
                      <p className="text-sm">Full support for Right-to-Left (RTL) layouts for languages like Hebrew and Arabic. The component automatically adjusts visual orientation.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 9. Icons & Styling */}
                <AccordionItem value="styling" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <Image className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Icons & Styling</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-6">
                    <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                      <h4 className="font-bold text-text-heading mb-2">Custom record icons</h4>
                      <ol className="text-sm space-y-2 list-decimal list-inside">
                        <li>Visit the <a href="https://www.lightningdesignsystem.com/icons/" target="_blank" rel="noreferrer" className="text-primary underline">SLDS Icon Library</a>.</li>
                        <li>Copy the icon name.</li>
                        <li>Format as <code>/_slds/icons/category-sprite/svg/symbols.svg#name</code>.</li>
                      </ol>
                    </div>
                    <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100">
                      <h4 className="font-bold text-text-heading mb-2">Background Color</h4>
                      <p className="text-sm">Obtain a HEX code using browser developer tools and paste it into the "Record Icon Background Color" field to match your theme.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 10. Frequently Asked Questions */}
                <AccordionItem value="faq" className="premium-card bg-white border-sky-100 px-6 py-2 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-text-heading">Have Questions?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-text-body leading-relaxed space-y-4">
                    <p>For any questions related to RelationshipVista and how to configure visually your Salesforce records' backgrounds & hierarchies, feel free to contact us.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                      <a href="mailto:support@ardira.com" className="btn-cta text-sm py-2 px-6">
                        Email Support <ArrowRight className="h-4 w-4" />
                      </a>
                      <Link to="#contact" className="btn-outline text-sm py-2 px-6">
                        Contact Sales
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserGuide;
