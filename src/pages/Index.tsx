import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import WorkflowSection from "@/components/WorkflowSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import FAQs from "@/components/FAQs";
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
      <FAQs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
