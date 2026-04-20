import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Download, CheckCircle2, ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const InstallationGuide = () => {
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
                    <BreadcrumbPage className="font-semibold text-text-heading">Installation Guide</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-text-heading mb-6 tracking-tight">
                RelationshipVista <span className="gradient-text">Installation Guide</span>
              </h1>
              <p className="text-xl text-text-body font-medium leading-relaxed max-w-2xl">
                Quickly set up RelationshipVista in your Salesforce environment and start mapping connections in minutes.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={0.2}>
              <div className="premium-card p-8 bg-white border-sky-100 shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="icon-box-lg bg-primary/10">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-heading mb-4">Installation Overview</h2>
                    <p className="text-text-body leading-relaxed mb-6">
                      RelationshipVista is a 100% native Salesforce application. This guide will walk you through the package installation process and initial permissions setup.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-bold text-text-heading">Step 1: Get the Package</p>
                          <p className="text-sm text-text-muted">Obtain the installation link from the AppExchange or your account representative.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-bold text-text-heading">Step 2: Install for Admin / All Users</p>
                          <p className="text-sm text-text-muted">Choose the appropriate installation audience based on your data security policy.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-bold text-text-heading">Step 3: Assign Licenses</p>
                          <p className="text-sm text-text-muted">Manage your RelationshipVista licenses through the Salesforce Installed Packages settings.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/user-guide" className="btn-cta">
                  Next: View User Guide <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InstallationGuide;
