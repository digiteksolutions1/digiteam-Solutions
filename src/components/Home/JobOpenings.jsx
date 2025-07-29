import { FaUserTie, FaUserGraduate, FaUserShield } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const openings = [
  {
    icon: <FaUserTie className="text-3xl" />,
    title: "Senior Accountant",
    description: "Lead our accounting team with your expertise",
    features: [
      "ACCA (UK) Part/Fully Qualified",
      "2+ Years' UK Accounting Experience",
      "Expertise in VAT, CIS, Payroll & Statutory Accounts",
      "Proficient in Google Sheets/Docs",
      "Experience using diverse Accounting Softwares",
      "We use - QB, Xero, FreeAgent, Pandle and Zoho"
    ],
    formLink: "https://forms.gle/xA9P12nWRUqXHi389"
  },
  {
    icon: <FaUserShield className="text-3xl" />,
    title: "Accountant",
    description: "Apply accounting skills and grow with us",
    features: [
      "ACCA (UK) Part/Fully Qualified",
      "6+ Months' UK Practice Experience",
      "Knowledge of Accounting principles & procedures",
      "VAT, CIS, Payroll, Statutory Accounts, Reconciliations,",
      "Proficient in Google Sheets/Docs"
    ],
    formLink: "" // https://forms.gle/5ZRxgEyNUenoxd9r8
  },
  {
    icon: <FaUserGraduate className="text-3xl" />,
    title: "Junior Accountant",
    description: "Grow your career in UK Accounting",
    features: [
      "Part-Qualified ACCA (UK)",
      "No experience needed - we train self-driven learners",
      "Basic knowledge of accounting principles and procedures",
      "Proficient in Google Sheets/Docs",
      "Experience or willingness to use diverse accounting software"
    ],
    formLink: "" // Replace with actual form link
  }
]

const OpeningCard = ({ opening, index }) => {
  const isHiring = opening.formLink && opening.formLink.trim() !== "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-center">
          <div className="bg-primary/10 p-3 rounded-lg text-primary">
            {opening.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
          {opening.title}
        </h3>

        <p className="text-gray-600 text-center mb-4">
          {opening.description}
        </p>

        <div className="mt-auto border-t pt-4">
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Requirements</h4>
          <ul className="space-y-1">
            {opening.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-4 w-4 text-primary mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            {isHiring ? (
              <a 
                href={opening.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-4 py-2 bg-primary text-white rounded-md text-center font-medium hover:bg-primary-dark transition-colors"
              >
                Apply Now
              </a>
            ) : (
              <div className="text-center py-2 px-4 bg-gray-100 rounded-md text-gray-600">
                Check back soon!
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function JobOpenings() {
  const isCompanyHiring = openings.some(opening => opening.formLink && opening.formLink.trim() !== "");
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Join Our <span className="text-primary">Accounting Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isCompanyHiring 
              ? "We're currently hiring for these positions" 
              : "While we're not hiring right now, we frequently open new positions"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openings.map((opening, index) => (
            <OpeningCard key={index} opening={opening} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          {isCompanyHiring ? (
            <Link to="/careers">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors inline-flex items-center">
                View All Positions
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
              <h3 className="text-lg font-medium text-yellow-800">We're not currently hiring</h3>
              <p className="text-yellow-700">Check back soon for new opportunities!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}