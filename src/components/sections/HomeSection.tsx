import HeroSection from "./HeroSection";
import AboutIntroSection from "./home/AboutIntroSection";
import CastMembersSection from "./home/CastMembersSection";

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
}

const HomeSection = ({ setActiveSection }: HomeSectionProps) => (
  <div className="space-y-12">
    <HeroSection setActiveSection={setActiveSection} />
    <AboutIntroSection />
    <CastMembersSection setActiveSection={setActiveSection} />
  </div>
);

export default HomeSection;
