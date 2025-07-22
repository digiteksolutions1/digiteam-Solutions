const MissionVision = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 bg-gray-50 rounded-xl overflow-hidden">
          <img
            src="/vision.webp"
            alt="Team collaboration"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">Mission</h3>
            <p className="text-gray-600">
              To cultivate the next generation of accounting professionals through mentorship, challenging work, and a culture of continuous learning.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">Vision</h3>
            <p className="text-gray-600">
              To be recognized as the premier destination for accounting talent - where technical excellence meets professional growth and work-life harmony.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;