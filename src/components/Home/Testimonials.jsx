import { FaQuoteLeft } from 'react-icons/fa'

const employeeTestimonials = [
  {
    quote: "Working here has provided me with incredible growth opportunities and a supportive team environment that truly values work-life balance.",
    author: "Ayesha Saddique",
    position: "HR Coordinator",
    avatar: "/aishaa.jpg",
    department: "Human Resources"
  },
  {
    quote: "The collaborative culture and continuous learning opportunities make this an exceptional place to build an accounting career.",
    author: "Saad Shafiq",
    position: "Senior Accountant",
    avatar: "/Saad.png",
    department: "Accounting"
  },
  {
    quote: "I've grown both professionally and personally thanks to the mentorship and challenging projects I've been entrusted with.",
    author: "Faraz Ali Virk",
    position: "Accountant",
    avatar: "/Faraz-Ali.png",
    department: "Accounting"
  }
]

export default function EmployeeTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear From <span className="text-primary">Our Employees</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our workplace special through the eyes of our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {employeeTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-6 left-6 bg-primary p-3 rounded-full text-white">
                <FaQuoteLeft className="text-xl" />
              </div>
              
              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.department}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}