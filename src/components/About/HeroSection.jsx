const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform skew-x-12 -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-2/5 h-1/2 bg-secondary-light rounded-full filter blur-3xl"></div>
    </div>

    <div className="container mx-auto px-6 py-28 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-5 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm text-sm font-medium mb-6">
          Join Our Team
        </span>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-light">
            Building Exceptional
          </span>
          <br />
          <span>Accounting Talent</span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary-light max-w-2xl mx-auto mb-10">
          Discover a workplace where your accounting expertise grows and your career thrives.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;