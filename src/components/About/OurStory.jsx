const OurJourney = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Talent Journey</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-bold text-primary">2015</h3>
              <p className="text-gray-600">
                Launched our first mentorship program with 5 junior accountants
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-bold text-primary">2018</h3>
              <p className="text-gray-600">
                Implemented our structured career path framework with clear milestones
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-bold text-primary">2021</h3>
              <p className="text-gray-600">
                Recognized as "Best Workplace for Accountants" by Industry Association
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-bold text-primary">Today</h3>
              <p className="text-gray-600">
                85% of our leadership team promoted from within, with average tenure of 5+ years
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Team celebrating success"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurJourney;