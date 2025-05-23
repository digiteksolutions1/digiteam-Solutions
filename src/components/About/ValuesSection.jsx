const CoreValues = () => (
  <section className="py-20 bg-primary text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-xl text-secondary-light max-w-2xl mx-auto">
          What makes us a great place to build your career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-3">Growth Mindset</h3>
          <p className="text-secondary-light">
            We invest in continuous learning with annual training budgets, mentorship programs, and clear promotion paths.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-3">Collaborative Excellence</h3>
          <p className="text-secondary-light">
            Teamwork is at our core - we celebrate shared successes and learn together from challenges.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-3">Respect for Balance</h3>
          <p className="text-secondary-light">
            While we operate primarily on-site, we support a healthy work environment with structured hours, mental health awareness, and encouragement to disconnect after work.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CoreValues;