import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  const handlePerformancesClick = () => {
    setActiveSection('about');
    // Small delay to ensure the section loads before scrolling
    setTimeout(() => {
      const performancesElement = document.getElementById('performances');
      if (performancesElement) {
        performancesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="text-center py-16 bg-gradient-to-r from-amber-800 to-amber-900 text-white rounded-xl shadow-2xl">
      <h2 className="text-5xl font-bold mb-6">The Dead Quilter's Society</h2>
      <p className="text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
        Weaving together the forgotten threads of five extraordinary women who shaped Sedona's legacy. 
        Their stories of vision, courage, and community building come alive through music, storytelling, 
        and theatrical magic.
      </p>
      <div className="space-x-4">
        <Button 
          onClick={handlePerformancesClick}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
        >
          View Performances
        </Button>
        <Button 
          onClick={() => setActiveSection('quilt')}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 text-lg"
        >
          Honor a Loved One
        </Button>
        <Button 
          onClick={() => window.location.href = '/bring-the-show'}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
        >
          Our Show In Your Town
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
