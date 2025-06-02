import { Link } from "react-router-dom";

interface PageNavigationProps {
  currentPage?: 'home' | 'digital-quilt' | 'bring-show';
}

const PageNavigation = ({ currentPage }: PageNavigationProps) => {
  return (
    <nav className="bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl lg:text-2xl font-bold whitespace-nowrap hover:text-amber-200 transition-colors">
            The Dead Quilter's Society
          </Link>
          <div className="flex space-x-4 items-center">
            <Link
              to="/"
              className={`px-3 py-2 rounded transition-colors hover:bg-amber-700 text-sm lg:text-base whitespace-nowrap ${
                currentPage === 'home' ? 'bg-amber-700' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/digital-quilt"
              className={`px-3 py-2 rounded transition-colors hover:bg-amber-700 text-sm lg:text-base whitespace-nowrap ${
                currentPage === 'digital-quilt' ? 'bg-amber-700' : ''
              }`}
            >
              Digital Quilt
            </Link>
            <Link
              to="/bring-the-show"
              className={`px-3 py-2 rounded transition-colors hover:bg-amber-700 text-sm lg:text-base whitespace-nowrap ${
                currentPage === 'bring-show' ? 'bg-red-700 hover:bg-red-800 font-semibold' : 'bg-red-700 hover:bg-red-800 font-semibold'
              }`}
            >
              Our Show In Your Town
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PageNavigation;
