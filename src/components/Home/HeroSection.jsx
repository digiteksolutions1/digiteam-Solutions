import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform skew-x-12 -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-2/5 h-1/2 bg-secondary-light rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-header */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm mb-6">
            <span className="text-secondary-light font-medium">Loved by Our Small but Mighty Team</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-light">
              Join Our Team and Elevate
            </span>
            <br />
            <span>Your Career in Accounting</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-secondary-light max-w-3xl mx-auto mb-10">
            We’re looking for dedicated professionals to be part of a dynamic and rapidly growing team in our Lahore Office
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/careers">
              <button className="flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Join Our Team
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-secondary-light text-sm">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Qualified Accountants</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>HMRC Compliant</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Reliable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}