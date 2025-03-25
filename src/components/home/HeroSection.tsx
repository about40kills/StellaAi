import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-secondary px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:w-2/3">
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/302764490/2897662984.svg"
                alt="Insilico Medicine"
                className="h-12 w-auto"
              />
            </div>
            <h1 className="mb-6 mt-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Generative AI and Robotics for Longevity and Sustainability
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Our mission is to extend healthy productive longevity for everyone
              by transforming drug discovery and development with generative artificial intelligence,
              significantly reducing the time and cost to bring life-saving medications to patients.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/contact"
                className="rounded border border-primary bg-primary px-6 py-3 text-center font-medium text-white hover:bg-accent-green"
              >
                Contact Us
              </Link>
              <Link
                to="/careers"
                className="rounded border border-white bg-transparent px-6 py-3 text-center font-medium text-white hover:bg-opacity-10 hover:bg-white"
              >
                Join Us
              </Link>
            </div>
          </div>
          <div className="relative lg:w-1/3">
            <img
              src="https://ext.same-assets.com/302764490/174125237.svg"
              alt="Globe Visualization"
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
