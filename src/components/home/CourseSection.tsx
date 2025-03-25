const CourseSection = () => {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg bg-gradient-to-br from-secondary to-black">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Course Banner */}
            <div className="p-8 md:w-1/2">
              <div className="mb-6 flex items-center space-x-2">
                <img
                  src="https://ext.same-assets.com/132696611/1192834554.svg"
                  alt="PandaOmics"
                  className="h-8 w-8"
                />
                <span className="text-xl font-semibold text-white">×</span>
                <img
                  src="https://ext.same-assets.com/132696611/1192834554.svg"
                  alt="Teachable"
                  className="h-8 w-auto"
                />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white">Join our</h2>
              <h3 className="mb-6 text-3xl font-bold uppercase text-white">
                Disease Modeling<br />
                and Target Discovery<br />
                Course
              </h3>
              <a
                href="https://insilico-medicine-school.teachable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-primary px-6 py-3 font-medium text-white hover:bg-accent-green"
              >
                Enroll for Free
              </a>
            </div>

            {/* Right side - Professor testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:w-1/2">
              <h3 className="mb-4 text-2xl font-bold text-white">
                How Early Protein Modeling Advanced to AI-Driven Drug Discovery with Insilico Medicine
              </h3>
              <div className="mb-6 flex items-start">
                <img
                  src="https://ext.same-assets.com/3996729342/786624495.png"
                  alt="Michael Levitt, PhD"
                  className="mr-4 h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <p className="mb-2 italic text-gray-300">
                    "Uncertainty is a good thing. By combining data with clever filtering we
                    get certainty and options from uncertainty." Dr. Levitt sees massive
                    possibilities ahead. "The protein-folding problem that was a very difficult
                    problem for 50 years, and drug design, are all being dealt with in this global,
                    all-encompassing way. And I am personally very, very optimistic."
                  </p>
                  <p className="font-medium text-white">Michael Levitt, PhD</p>
                  <p className="text-sm text-gray-400">
                    Stanford professor, a member of Insilico Medicine's Scientific Advisory Board, won the Nobel Prize in
                    Chemistry in 2013 for his groundbreaking work in protein structure and protein folding using computer modeling.
                  </p>
                </div>
              </div>
              <p className="text-gray-300">
                In this lecture, Dr. Levitt describes how the work he began over 50 years ago has been vastly improved and
                expanded through the massive increase in computer speed and incredible advances in machine learning. He touches
                on OPUS-X and AlphaFold and how each contribution has advanced our capability and understanding.
                Now, says Dr. Levitt, Insilico Medicine is using AI to create an entirely new AI-driven drug discovery pipeline
                from A to Z. Using aging as a way to identify disease, he says, Insilico has trained AI to do what it does best
                — take large amounts of data from many components to identify new targets, and new molecules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
