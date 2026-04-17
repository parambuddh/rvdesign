import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections for better performance
const WhatIsSection = lazy(() =>
  import("@/components/WhatIsSection").catch(err => {
    console.error("Failed to load WhatIsSection:", err);
    throw err;
  })
);
const FeaturesSection = lazy(() =>
  import("@/components/FeaturesSection").catch(err => {
    console.error("Failed to load FeaturesSection:", err);
    throw err;
  })
);
const BenefitsSection = lazy(() =>
  import("@/components/BenefitsSection").catch(err => {
    console.error("Failed to load BenefitsSection:", err);
    throw err;
  })
);
const UseCasesSection = lazy(() =>
  import("@/components/UseCasesSection").catch(err => {
    console.error("Failed to load UseCasesSection:", err);
    throw err;
  })
);
const FAQSection = lazy(() =>
  import("@/components/FAQSection").catch(err => {
    console.error("Failed to load FAQSection:", err);
    throw err;
  })
);
const ContactSection = lazy(() =>
  import("@/components/ContactSection").catch(err => {
    console.error("Failed to load ContactSection:", err);
    throw err;
  })
);
const CTASection = lazy(() =>
  import("@/components/CTASection").catch(err => {
    console.error("Failed to load CTASection:", err);
    throw err;
  })
);

// Loading fallback component
const SectionSkeleton = () => (
  <div className="min-h-[400px] bg-gradient-to-b from-background to-background/50 animate-pulse" />
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionSkeleton />}>
          <WhatIsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <BenefitsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <UseCasesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
