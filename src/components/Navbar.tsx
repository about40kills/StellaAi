import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (name: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <nav className="relative border-b border-gray-200 bg-white px-4 py-3 shadow-sm md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/302764490/446028260.svg"
                alt="Insilico Medicine"
                className="h-8 w-8"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary">
            Main
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary">
              About
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full z-10 mt-2 hidden w-48 rounded-md bg-white p-2 shadow-lg group-hover:block">
              <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Mission
              </Link>
              <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Leadership
              </Link>
              <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Board of Directors
              </Link>
              <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Scientific Advisory Board
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary">
              Stella.ai
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full z-10 mt-2 hidden w-48 rounded-md bg-white p-2 shadow-lg group-hover:block">
              <a href="https://pharma.ai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Pharma.ai Suite
              </a>
              <a href="https://pharma.ai/pandaomics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                PandaOmics
              </a>
              <a href="https://pharma.ai/generativebiologics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Generative Biologics
              </a>
              <a href="https://pharma.ai/chemistry42" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Chemistry42
              </a>
              <a href="https://pharma.ai/inclinico" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                inClinico
              </a>
              <a href="https://pharma.ai/science42/dora" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Science42: DORA
              </a>
              <a href="https://pharma.ai/pandaomics-box" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                PandaOmics Box
              </a>
            </div>
          </div>
          <Link to="/pipeline" className="text-sm font-medium text-gray-700 hover:text-primary">
            Pipeline
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-primary">
              News & Media
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full z-10 mt-2 hidden w-48 rounded-md bg-white p-2 shadow-lg group-hover:block">
              <Link to="/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Press Releases
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Blog
              </Link>
              <Link to="/mediacoverage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Media Coverage
              </Link>
              <Link to="/publications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Publications
              </Link>
              <Link to="/mediakit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Media Kit
              </Link>
              <Link to="/design-resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Design Kit
              </Link>
            </div>
          </div>
          <Link to="/careers" className="text-sm font-medium text-gray-700 hover:text-primary">
            Careers
          </Link>
          <Link to="/docuthon" className="text-sm font-medium text-gray-700 hover:text-primary">
            Docuthon
          </Link>
          <Link to="https://pharma.ai/precious" className="text-sm font-medium text-gray-700 hover:text-primary">
            PreciousGPT
          </Link>
          <Link to="https://pharma.ai/nach01" className="text-sm font-medium text-gray-700 hover:text-primary">
            Nach01
          </Link>
          <Link to="/sustainability" className="text-sm font-medium text-gray-700 hover:text-primary">
            Sustainability
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a href="https://x.com/InSilicoMeds" target="_blank" rel="noopener noreferrer">
            <img
              src="https://ext.same-assets.com/132696611/1248550479.svg"
              alt="Twitter/X"
              className="h-5 w-5"
            />
          </a>
          <a href="https://www.instagram.com/insilicomedicine/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://ext.same-assets.com/132696611/1248550479.svg"
              alt="Instagram"
              className="h-5 w-5"
            />
          </a>
          <div className="ml-4 flex items-center">
            <span className="text-sm font-medium text-gray-700">EN</span>
            <span className="mx-2 text-sm text-gray-300">_</span>
            <a href="/main_fr" className="text-sm font-medium text-gray-700 hover:text-primary">
              FR
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Main
            </Link>
            <button
              className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => toggleSubMenu('about')}
            >
              About
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedMenus['about'] && (
              <div className="pl-4">
                <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                  Mission
                </Link>
                <Link to="/team" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                  Leadership
                </Link>
              </div>
            )}
            {/* More mobile menu items */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
