import { Link } from "react-router-dom"

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary-light mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-light">
              Ready to Advance
            </span>
            <br />
            <span>Your Accounting Career?</span>
          </h2>

          <p className="text-xl md:text-2xl text-secondary-light mb-10 leading-relaxed">
            Join our team of talented professionals and grow your skills in a dynamic, supportive environment with exciting career opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to='/careers'>
              <button className="flex items-center justify-center px-10 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <span>Explore Open Positions</span>
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
            <Link to='/about'>
              <button className="flex items-center justify-center px-10 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <span>Learn About Our Culture</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}