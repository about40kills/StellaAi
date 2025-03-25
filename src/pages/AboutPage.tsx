const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between lg:flex-row">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <h1 className="mb-10 text-4xl font-bold text-black">MISSION</h1>
              <div className="mb-6 h-1 w-full bg-primary"></div>
              <p className="mb-6 text-lg text-gray-800">
                We are a globally leading end-to-end generative AI-driven biotech company in terms of AIDD pipeline progress,
                with a mission to accelerate drug discovery and development by leveraging our rapidly evolving,
                proprietary Pharma.AI platform across biology, chemistry and clinical development.
              </p>
              <p className="text-lg text-gray-800">
                Our generative AI platform helps us to rapidly and efficiently advance our fully self-generated AIDD pipeline
                primarily composed of novel drug candidates.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                src="https://ext.same-assets.com/302764490/2524048382.svg"
                alt="About Insilico"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 text-left text-3xl font-bold text-black lg:text-4xl">VALUES</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://ext.same-assets.com/302764490/4222312107.svg"
                alt="Patient First"
                className="mb-6 h-20 w-20"
              />
              <h3 className="mb-4 text-lg font-bold text-black">PATIENT FIRST</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://ext.same-assets.com/302764490/3360711508.svg"
                alt="Relentless Innovation"
                className="mb-6 h-20 w-20"
              />
              <h3 className="mb-4 text-lg font-bold text-black">RELENTLESS INNOVATION</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="https://ext.same-assets.com/302764490/967726683.svg"
                alt="Transparency & Integrity"
                className="mb-6 h-20 w-20"
              />
              <h3 className="mb-4 text-lg font-bold text-black">TRANSPARENCY & INTEGRITY</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <h2 className="mb-4 text-2xl font-bold text-black">GLOBAL PARTNERSHIPS<br />GLOBAL PRESENCE</h2>
              <div className="h-1 w-full bg-primary"></div>
            </div>
            <div className="md:w-2/3">
              <p className="mb-4 text-gray-800">
                The company's team is distributed globally, allowing the company to establish a local presence in key geographies,
                with office sites or R&D talents in the U.S., Greater China, Canada, and the Middle East to support recruitment
                of top scientific talent, build relationships with new and potential biopharma partners, investors and other
                stakeholders and support the company's global business development function. The company has a global presence
                in the U.S., Greater China, Canada, and the Middle East.
              </p>
              <p className="mb-4 text-gray-800">
                With strong business development abilities, the company has received strong external validation of the company's
                platform with collaborations with leading industry partners around the globe, including 10 of the top 20 global
                pharmaceutical companies in terms of 2021 reported sales, and established collaboration with top institutions,
                universities, and industry leaders on the company's core AI projects.
              </p>
              <p className="text-gray-800">
                The company has enjoyed long-term support from globally leading financial and strategic investors in technology,
                healthcare and AI industries, including Warburg Pincus, Qiming Venture Partners, Wuxi AppTec, B Capital Group,
                Prosperity 7, OrbiMed, Deerfield, Pavilion Capital, PIDC, CPE fund, Mirae Asset Capital, Lilly Asia Ventures,
                Eight Roads, Lake Bleu Capital, Baidu Ventures and Sinovation Ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* World Map */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <img
            src="https://ext.same-assets.com/302764490/78882000.svg"
            alt="Insilico Global Presence"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-black">Be the first to know our news!</h2>
          <p className="mb-8 text-gray-700">Once a month you will learn about our latest features and hottest news. And no spam of course.</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary sm:w-3/4"
            />
            <button
              type="button"
              className="rounded-md bg-primary px-6 py-2 text-white hover:bg-accent-green sm:w-1/4"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
