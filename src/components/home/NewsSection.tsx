const NewsSection = () => {
  const pressReleases = [
    {
      date: 'March 13, 2025',
      title: 'Insilico Medicine Secures $110 Million Series E Financing to Advance AI-Driven Drug Discovery Innovation',
      link: 'https://www.prnewswire.com/news-releases/insilico-medicine-secures-110-million-series-e-financing-to-advance-ai-driven-drug-discovery-innovation-302401040.html',
      image: 'https://ext.same-assets.com/615341754/1148992095.png'
    },
    {
      date: 'March 06, 2025',
      title: 'First end-to-end generative AI-assisted drug ISM001-055 receives official generic name Rentosertib from USAN',
      link: 'https://www.eurekalert.org/news-releases/1076031',
      image: 'https://ext.same-assets.com/615341754/2597081045.png'
    },
    {
      date: 'March 05, 2025',
      title: 'Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory',
      link: 'https://www.eurekalert.org/news-releases/1075930',
      image: 'https://ext.same-assets.com/615341754/3209363018.png'
    }
  ];

  const mediaArticles = [
    {
      date: 'March 17, 2025',
      title: 'AI drug discovery startup is Boston\'s latest \'unicorn\'',
      source: 'The Business Journals',
      link: 'https://www.bizjournals.com/boston/inno/stories/news/2025/03/17/insilico-medicine-ai-drug-unicorn-funding.html',
      image: 'https://ext.same-assets.com/615341754/792232079.png'
    },
    {
      date: 'March 15, 2025',
      title: 'Your next supervisor might be an android. Could this AI-controlled research robot be the future of science?',
      source: 'Toronto Star',
      link: 'https://www.thestar.com/business/technology/your-next-supervisor-might-be-an-android-could-this-ai-controlled-research-robot-be-the/article_75dbdd1e-fdc8-11ef-9bd7-431f56c75970.html',
      image: 'https://ext.same-assets.com/615341754/3433834404.jpeg'
    },
    {
      date: 'March 13, 2025',
      title: 'Qiming-Backed AI Drug Discovery Startup Insilico Medicine Hits Unicorn Status With $110 Million Funding Round',
      source: 'Forbes',
      link: 'https://www.forbes.com/sites/zinnialee/2025/03/13/qiming-backed-ai-drug-discovery-startup-insilico-medicine-hits-unicorn-status-with-110-million-funding-round/',
      image: 'https://ext.same-assets.com/615341754/1071457483.svg'
    }
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Press Releases</h2>
            <a href="/news" className="text-primary hover:text-accent-green">
              Read More
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pressReleases.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-2 text-sm text-gray-500">{item.date}</p>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Media Coverage</h2>
            <a href="/mediacoverage" className="text-primary hover:text-accent-green">
              Read More
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {mediaArticles.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 items-center">
                  <img
                    src={item.image}
                    alt={item.source}
                    className="h-full max-h-10 w-auto object-contain"
                  />
                </div>
                <p className="mb-2 text-sm text-gray-500">{item.date}</p>
                <h3 className="mb-2 text-lg font-medium text-gray-900 group-hover:text-primary">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
