import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => (
  <nav className="bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">The Dead Quilter's Society</h1>
        <div className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 items-center">
          {['home', 'about', 'historical', 'community', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-2 lg:px-3 py-2 rounded transition-colors text-sm lg:text-base whitespace-nowrap ${
                activeSection === section ? 'bg-amber-700' : 'hover:bg-amber-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <a
            href="/digital-quilt"
            className="px-2 lg:px-3 py-2 rounded transition-colors hover:bg-amber-700 text-sm lg:text-base whitespace-nowrap"
          >
            Digital Quilt
          </a>
          <a
            href="/bring-the-show"
            className="px-2 lg:px-3 py-2 rounded transition-colors bg-red-700 hover:bg-red-800 font-semibold text-sm lg:text-base whitespace-nowrap"
          >
            Our Show In Your Town
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
