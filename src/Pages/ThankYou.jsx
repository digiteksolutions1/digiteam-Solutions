import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white min-h-screen flex items-center overflow-hidden">
      {/* Background elements - matching the hero section */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform skew-x-12 -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-2/5 h-1/2 bg-secondary-light rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success icon */}
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-white bg-opacity-20 mb-8">
            <CheckCircleIcon className="h-16 w-16 text-green-400" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-light">
              Thank You!
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-secondary-light mb-10">
            Your message has been successfully received.
          </p>

          {/* Additional message */}
          <p className="text-lg text-white opacity-90 mb-12">
            We appreciate your interest in joining our team. Our HR department will review your message and get back to you soon. In the meantime, feel free to explore more about our company.
          </p>

          {/* Back button */}
          <div className="flex justify-center">
            <Link to="/">
              <button className="flex items-center justify-center px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-white border-opacity-30">
                <ArrowLeftIcon className="mr-3 h-5 w-5" />
                Back to Home
              </button>
            </Link>
          </div>

          {/* Trust indicators - matching the hero section */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-6 text-secondary-light text-sm">
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
  );
}