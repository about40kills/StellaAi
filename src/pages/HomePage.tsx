import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import PipelineSection from '../components/home/PipelineSection';
import PharmaAiSection from '../components/home/StellaAiSection';
import CourseSection from '../components/home/CourseSection';
import NewsSection from '../components/home/NewsSection';
import AwardsSection from '../components/home/AwardsSection';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Platform/Pipeline Tabs Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-bold text-gray-900">SOFTWARE FOR SCIENCE</h2>
              <p className="mb-4 text-gray-700">Generative AI Software for Drug Discovery, Scientific Research & Sustainability</p>
              <Link
                to="/platform"
                className="inline-block rounded bg-primary px-4 py-2 font-medium text-white hover:bg-accent-green"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-bold text-gray-900">THERAPEUTIC PIPELINE</h2>
              <p className="mb-4 text-gray-700">High Quality Therapeutic Programs Discovered Using Generative AI and Robotics</p>
              <Link
                to="/pipeline"
                className="inline-block rounded bg-primary px-4 py-2 font-medium text-white hover:bg-accent-green"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pharma.AI Suite Section */}
      <PharmaAiSection />

      {/* Pipeline Visualization Section */}
      <PipelineSection />

      {/* Course Section */}
      <CourseSection />

      {/* News & Press Releases Section */}
      <NewsSection />

      {/* Awards Section */}
      <AwardsSection />
    </div>
  );
};

export default HomePage;
