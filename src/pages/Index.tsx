import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import HistoricalSection from "@/components/sections/HistoricalSection";
import QuiltSection from "@/components/sections/QuiltSection";
import CommunitySection from "@/components/sections/CommunitySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');
    if (section) {
      setActiveSection(section);
      // Clean up the URL
      window.history.replaceState({}, '', '/');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'home' && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection setActiveSection={setActiveSection} />}
        {activeSection === 'historical' && <HistoricalSection />}
        {activeSection === 'quilt' && <QuiltSection />}
        {activeSection === 'community' && <CommunitySection setActiveSection={setActiveSection} />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
