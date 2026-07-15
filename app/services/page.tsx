import HeroSection from "@/features/services/components/hero";
import OutcomesSection from "@/features/services/components/outcomes";
import CaseStudiesSection from "@/features/services/components/case-studies";
import ProcessSection from "@/features/services/components/process";
import ComparisonSection from "@/features/services/components/comparison";
import ArchitectureSection from "@/features/services/components/architecture";
import PricingSection from "@/features/services/components/pricing";
import TechSection from "@/features/services/components/tech";
import FAQSection from "@/features/services/components/faq";
import CTASection from "@/features/services/components/cta";

export default function ServicesRoute() {
  return (
    <main className="bg-w-bg font-inter">
      <HeroSection />
      <OutcomesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ComparisonSection />
      <ArchitectureSection />
      <PricingSection />
      <TechSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
