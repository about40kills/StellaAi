import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="mb-8">
            <Link to="/" className="flex items-center">
              <img
                src="https://ext.same-assets.com/302764490/2471424505.svg"
                alt="Insilico Medicine"
                className="h-14"
              />
            </Link>
          </div>

          {/* Main Links */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-bold text-gray-900">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">Main</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary">Mission</Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-600 hover:text-primary">Team</Link>
              </li>
              <li>
                <Link to="/pipeline" className="text-sm text-gray-600 hover:text-primary">Pipeline</Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-gray-600 hover:text-primary">Sustainability</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-primary">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary">Contacts</Link>
              </li>
            </ul>
          </div>

          {/* Pharma.ai Links */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-bold text-gray-900">Stella.ai</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://pharma.ai" className="text-sm text-gray-600 hover:text-primary">Stella.ai</a>
              </li>
              <li>
                <a href="https://pharma.ai/pandaomics" className="text-sm text-gray-600 hover:text-primary">PandaOmics</a>
              </li>
              <li>
                <a href="https://pharma.ai/pandaomics-box" className="text-sm text-gray-600 hover:text-primary">PandaOmics Box</a>
              </li>
              <li>
                <a href="https://pharma.ai/generativebiologics" className="text-sm text-gray-600 hover:text-primary">Generative Biologics</a>
              </li>
              <li>
                <a href="https://pharma.ai/chemistry42" className="text-sm text-gray-600 hover:text-primary">Chemistry42</a>
              </li>
              <li>
                <a href="https://pharma.ai/inclinico" className="text-sm text-gray-600 hover:text-primary">inClinico</a>
              </li>
              <li>
                <a href="https://pharma.ai/dora" className="text-sm text-gray-600 hover:text-primary">Science42:DORA</a>
              </li>
              <li>
                <a href="https://pharma.ai/precious" className="text-sm text-gray-600 hover:text-primary">PreciousGPT</a>
              </li>
              <li>
                <a href="https://pharma.ai/nach01" className="text-sm text-gray-600 hover:text-primary">Nach01</a>
              </li>
            </ul>
          </div>

          {/* News Links */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-bold text-gray-900">News & Media</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/news" className="text-sm text-gray-600 hover:text-primary">Press Releases</Link>
              </li>
              <li>
                <Link to="/mediacoverage" className="text-sm text-gray-600 hover:text-primary">Media Coverage</Link>
              </li>
              <li>
                <Link to="/publications" className="text-sm text-gray-600 hover:text-primary">Publications</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link to="/mediakit" className="text-sm text-gray-600 hover:text-primary">Media Kit</Link>
              </li>
              <li>
                <Link to="/design-resources" className="text-sm text-gray-600 hover:text-primary">Design Kit</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mb-8">
              <h4 className="mb-3 text-base font-bold text-gray-900">BOSTON</h4>
              <p className="text-sm text-gray-600">1000 Massachusetts Avenue, Suite 126</p>
              <p className="text-sm text-gray-600">Cambridge, MA 02138</p>
            </div>
            <div className="mb-8">
              <h4 className="mb-3 text-base font-bold text-gray-900">NEW YORK</h4>
              <p className="text-sm text-gray-600">Insilico Medicine</p>
              <p className="text-sm text-gray-600">Park Avenue South</p>
              <p className="text-sm text-gray-600">NY, NY, Suite 010, 10010</p>
            </div>
            <div className="mb-8">
              <h4 className="mb-3 text-base font-bold text-gray-900">MONTREAL</h4>
              <p className="text-sm text-gray-600">1250 René-Lévesque Ouest,</p>
              <p className="text-sm text-gray-600">Suite 3710, Montréal, Québec,</p>
              <p className="text-sm text-gray-600">Canada H3B 4W8</p>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 border-t border-gray-200 pb-8 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex space-x-4 md:mb-0">
              <a href="https://x.com/InSilicoMeds" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ext.same-assets.com/132696611/1192834554.svg"
                  alt="Twitter/X"
                  className="h-5 w-5"
                />
              </a>
              <a href="https://www.instagram.com/insilicomedicine/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://ext.same-assets.com/132696611/1192834554.svg"
                  alt="Instagram"
                  className="h-5 w-5"
                />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">© 2024 Stella Ai</p>
              <div className="mt-2 flex space-x-4">
                <Link to="/cookies" className="text-sm text-gray-500 hover:text-primary">Cookies Policy</Link>
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</Link>
                <button className="text-sm text-gray-500 hover:text-primary">Back to top</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
