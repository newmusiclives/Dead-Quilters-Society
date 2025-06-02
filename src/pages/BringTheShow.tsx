import PageNavigation from "@/components/shared/PageNavigation";
import HeroSection from "@/components/sections/bring-show/HeroSection";
import QuickStatsSection from "@/components/sections/bring-show/QuickStatsSection";
import PartnershipOfferSection from "@/components/sections/bring-show/PartnershipOfferSection";
import FinancialBenefitsSection from "@/components/sections/bring-show/FinancialBenefitsSection";
import PerformanceDetailsSection from "@/components/sections/bring-show/PerformanceDetailsSection";
import RequirementsSection from "@/components/sections/bring-show/RequirementsSection";
import CallToActionSection from "@/components/sections/bring-show/CallToActionSection";

const BringTheShow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <PageNavigation currentPage="bring-show" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-12">
          <HeroSection />
          <QuickStatsSection />
          <PartnershipOfferSection />
          <FinancialBenefitsSection />
          <PerformanceDetailsSection />
          <RequirementsSection />
          <CallToActionSection />
        </div>
      </div>
    </div>
  );
};

export default BringTheShow;
