import { motion } from 'framer-motion'
import { FiAward, FiDollarSign, FiUsers, FiClock, FiHeart, FiGlobe } from 'react-icons/fi'

const benefits = [
  {
    icon: <FiAward className="text-3xl" />,
    title: "Career Growth",
    description: "Structured promotion paths and leadership development",
    stat: "85%",
    statLabel: "Promotion rate"
  },
  {
    icon: <FiDollarSign className="text-3xl" />,
    title: "Competitive Compensation",
    description: "Above-market salaries with performance bonuses",
    stat: "15%",
    statLabel: "Above average"
  },
  {
    icon: <FiUsers className="text-3xl" />,
    title: "Team Culture",
    description: "Collaborative environment with regular team events",
    stat: "4.9/5",
    statLabel: "Employee satisfaction"
  },
  {
    icon: <FiClock className="text-3xl" />,
    title: "Annual ACCA Fee",
    description: "We cover your ACCA annual subscription fee",
    stat: "100%",
    statLabel: "Fee Covered"
  }
]

export default function WhyJoinUs() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why <span className="text-secondary">Top Talent</span> Chooses Us
          </h2>
          <p className="text-xl text-secondary-light max-w-3xl mx-auto">
            We invest in our people because they're the foundation of our success
          </p>
        </div>

        <div className="">
          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-10 p-3 rounded-lg text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-secondary-light mb-3">{benefit.description}</p>
                    <div className="flex items-end">
                      <span className="text-2xl font-bold mr-2">{benefit.stat}</span>
                      <span className="text-sm text-secondary-light">{benefit.statLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image/content block */}
          {/* <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/janis.webp"
                alt="Happy accounting team"
                className="w-full h-auto object-cover object-[center_10%] aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}