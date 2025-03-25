const AwardsSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-gray-200 pt-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase text-gray-900">
            Most innovative biotechnology company in the world 2024
          </h2>
          <div className="mb-6 flex flex-wrap items-center justify-center space-x-6">
            <div className="mb-4 max-w-[260px]">
              <div className="rounded-lg bg-[#0A924D] p-4 text-center">
                <div className="text-4xl font-bold text-white">#1</div>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-500">Fast Company's Most Innovative Companies in Biotech</p>
            </div>
            <img
              src="https://ext.same-assets.com/3996729342/561377375.png"
              alt="Fast Company Award"
              className="h-16 w-auto"
            />
          </div>
          <div className="flex flex-wrap justify-center space-x-4">
            <a
              href="https://www.fastcompany.com/91034883/biotech-most-innovative-companies-2024"
              className="mb-2 rounded bg-primary px-4 py-2 font-medium text-white hover:bg-accent-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full
            </a>
            <a
              href="https://www.fastcompany.com/91035219/insilico-medicine-most-innovative-companies-2024"
              className="mb-2 rounded border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              About Insilico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
