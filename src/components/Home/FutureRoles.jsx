import { FaChartLine, FaHandshake, FaGlobeAmericas, FaUserGraduate } from 'react-icons/fa'
import { motion } from 'framer-motion'

const futureRoles = [
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "HR & Recruitment",
    description: "Help Us Build a Great Team that Drives Business Growth",
    timeline: "Late 2025",
    skills: ["Talent Acquisition", "Employee Onboarding", "Inter-personal & communication skills"]
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Full Stack Developer",
    description: "Join Our Full Stack Team – Build, Deliver, Grow",
    timeline: "Mid-2026",
    skills: ["HTML", "Node.js/Python", "Git/GitHub", "CSS", "JavaScript front end frameworks"]
  },
  {
    icon: <FaGlobeAmericas className="text-3xl" />,
    title: "Marketing and Sales",
    description: "Grow Digitally, Strategize and Deploy the Right Solutions",
    timeline: "Mid-2025",
    skills: ["Digital Marketing", "Market Research & Analysis", "Excellent Communication Skills"]
  },
  {
    icon: <FaUserGraduate className="text-3xl" />,
    title: "Compliance",
    description: "Shape our talent development programs and continuous education",
    timeline: "Mid-2025",
    skills: ["Regulatory Knowledge", "Attention to Detail", "Documentation and Record Keeping"]
  }
]

const RoleCard = ({ role, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-primary"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="bg-primary/10 p-4 rounded-xl text-primary">
          {role.icon}
        </div>
        <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
          {role.timeline}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{role.title}</h3>
      <p className="text-gray-600 mb-6">{role.description}</p>
      
      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Key Skills Needed</h4>
        <div className="flex flex-wrap gap-2">
          {role.skills.map((skill, i) => (
            <span key={i} className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function FutureRoles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
          >
            Emerging Opportunities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Future <span className="text-primary">Roles</span> in Our Growing Firm
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Strategic positions we plan to create as we expand our practice and services
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureRoles.map((role, index) => (
            <RoleCard key={index} role={role} index={index} />
          ))}
        </div>
        
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors duration-300 shadow-md hover:shadow-lg inline-flex items-center">
            Get Notified About Future Openings
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div> */}
      </div>
    </section>
  )
}