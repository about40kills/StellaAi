import { Link } from 'react-router-dom';

const PharmaAiSection = () => {
  const products = [
    {
      name: 'Chemistry42',
      icon: 'https://ext.same-assets.com/302764490/190702505.svg',
      url: 'https://pharma.ai/chemistry42'
    },
    {
      name: 'Biology42',
      icon: 'https://ext.same-assets.com/302764490/4122162021.svg',
      url: 'https://pharma.ai/chemistry42#alchemistry'
    },
    {
      name: 'PandaOmics',
      icon: 'https://ext.same-assets.com/302764490/2894635231.svg',
      url: 'https://pharma.ai/chemistry42#admetprofiling'
    },
    {
      name: 'Medicine42',
      icon: 'https://ext.same-assets.com/302764490/2839439781.svg',
      url: 'https://pharma.ai/chemistry42#goldencubes'
    },
    {
      name: 'Science42',
      icon: 'https://ext.same-assets.com/302764490/4134765541.svg',
      url: 'https://pharma.ai/chemistry42#retrosynthesis'
    }
  ];

  const llms = [
    {
      name: 'PreciousGPT',
      icon: 'https://ext.same-assets.com/302764490/2712594735.svg',
      url: 'https://pharma.ai/precious'
    },
    {
      name: 'Nach01',
      icon: 'https://ext.same-assets.com/302764490/3708762418.svg',
      url: 'https://pharma.ai/nach01'
    }
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-bold text-gray-900">Pharma.AI Suite</h2>

        {/* Products */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              className="flex flex-col items-center rounded-md bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={product.icon}
                alt={product.name}
                className="mb-4 h-16 w-16"
              />
              <span className="text-center text-sm font-medium text-gray-700">{product.name}</span>
            </a>
          ))}
        </div>

        {/* LLMs */}
        <h3 className="mb-6 text-xl font-bold text-gray-900">Large Language of Life Models (LLLMs)</h3>
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {llms.map((llm, index) => (
            <a
              key={index}
              href={llm.url}
              className="flex flex-col items-center rounded-md bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={llm.icon}
                alt={llm.name}
                className="mb-4 h-16 w-16"
              />
              <span className="text-center text-sm font-medium text-gray-700">{llm.name}</span>
            </a>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-10 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-6 text-xl font-bold text-gray-900">Stella Ai 2-page overview</h3>
          <p className="mb-6 text-gray-700">Interested in learning more about Stella.ai?</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="https://www.dropbox.com/scl/fi/0jk6s5yebnszajw6kygfn/March2025_Insilico-2-page-Flyer_Web.pdf?rlkey=915kiwf9mesoqz1pdefssigch&st=lfvqdvww&dl=1"
              className="rounded bg-primary px-4 py-2 text-center font-medium text-white hover:bg-accent-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <Link
              to="/contact"
              className="rounded border border-gray-300 bg-white px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaAiSection;
