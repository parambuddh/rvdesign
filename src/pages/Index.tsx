import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import WorkflowSection from "@/components/WorkflowSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <CoreCapabilities />
      <WorkflowSection />
      <BenefitsSection />
      <UseCasesSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
