import { useState } from 'react';
import { ArrowRightIcon, BriefcaseIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Accountant",
    department: "Accounting",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "We are hiring a full-time Senior Accountant...",
    fullDescription: "We are hiring a full-time Senior Accountant for our Lahore office with 2+ years of experience working with UK clients in an accounting practice. This role involves preparing financial statements, VAT returns, reconciliations, tax filings, and managing a team of 4–5 junior accountants while providing training and mentorship to support their growth. We’re a fast-growing, process-driven firm that values efficiency, structure, and continuous learning—ideal for someone looking to advance quickly in their career.",
    responsibilities: [
      "Tracking your teams & client KPIs",
      "Ensuring client satisfaction through delivery of high quality Accounting services",
      "Training your team and ensuring their growth",
      "Improving processes to increase efficiency",
      "Growing your knowledge through continuous learning"
    ],
    requirements: [
      "ACCA (UK) Part/Fully Qualified",
      "2+ Years’ UK Accounting Experience",
      "Expertise in VAT, CIS, Payroll & Statutory Accounts",
      "Proficient in Google Sheets/Docs",
      "Experience using diverse Accounting Softwares",
      "We use - QB, Xero, FreeAgent, Pandle and Zoho"
    ],
    benefits: [
      "Rewarding salary based on experience 150,000 - 200,000+ PKR",
      "Work in organized & efficient business",
      "Performance-based pay increases",
      "Fast career growth opportunities",
      "Supportive team spirit"
    ],
    formLink: "https://forms.gle/xA9P12nWRUqXHi389"
  },
  {
    id: 2,
    title: "Accountant",
    department: "Accounting",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "We are hiring a full-time...",
    fullDescription: "We are hiring a full-time, on-site Accountant for our Lahore office with more than 6 months of experience working with UK clients in an accounting practice. This role involves handling core accountancy functions including financial statements, VAT returns, reconciliations, tax filings, and supporting a variety of services for small UK businesses across multiple industries. If you value structure, efficiency, and continuous learning, and are looking to grow your knowledge, experience, and salary in a fast-growing firm.",
    responsibilities: [
      "Monthly bookkeeping",
      "Running Weekly & Monthly Payroll",
      "Preparation of VAT returns",
      "Preparing Self Assessments",
      "Preparing company's Statutory accounts"
    ],
    requirements: [
      "ACCA (UK) Part/Fully Qualified",
      "6+ Months’ UK Practice Experience",
      "Knowledge of Accounting principles & procedures",
      "VAT, CIS, Payroll, Statutory Accounts, Reconciliations,",
      "Proficient in Google Sheets/Docs"
    ],
    benefits: [
      "Salary based on previous experience Rs 80,000 - 100,000+ PKR",
      "Work in organized & efficient business",
      "Performance-based pay increases",
      "Fast career growth opportunities",
      "Supportive team spirit"
    ],
    formLink: "" // https://forms.gle/5ZRxgEyNUenoxd9r8
  },
  {
    id: 3,
    title: "Junior Accountant",
    department: "Accounting",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "We are hiring a full-time...",
    fullDescription: "We are hiring a full-time, on-site Junior Accountant for our Lahore office—no experience needed, as full training will be provided. This role includes accounting tasks (bookkeeping, VAT, payroll), client onboarding, compliance (AML, KYC), and CRM-based operations, all focused on UK clients. If you're eager to learn and grow in a structured, fast-paced environment, apply now.",
    responsibilities: [
      "Operations - You will be involved with process automations and all data needs to be recorded in our CRM",
      "Onboarding - Once the client has agreed to quote you will have to process client onboarding following our internal process",
      "Compliance - As part of your role you will ensure that our clients and their businesses are checked to ensure ongoing compliance (AML, KYC, etc.)",
      "Communication - Information gathering from clients will be another thing that this role will involve and is essential for efficient operations.",
      "Accounting - You will be working on accounting tasks such as - bookkeeping, accounting, VAT returns, etc. Please note that all our clients are UK based businesses."
    ],
    requirements: [
      "Part-Qualified ACCA (UK)",
      "No experience needed - we train self-driven learners",
      "Basic knowledge of accounting principles and procedures",
      "Proficient in Google Sheets/Docs",
      "Experience or willingness to use diverse accounting software"
    ],
    benefits: [
      "Starting Salary of Rs 40,000 PKR",
      "Work in an organized & efficient business",
      "Performance-based pay increases",
      "Fast career growth opportunities",
      "Supportive team spirit"
    ],
    formLink: ""
  },
  {
    id: 4,
    title: "Junior Sales Executive",
    department: "Marketing and Sales",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "We are looking for a dynamic Junior Sales...",
    fullDescription: "We are looking for a dynamic Junior Sales Executive to join our growing team. This is a full-time, on-site role at our Lahore office. As a key member of our sales team, you will be responsible for managing client communications, nurturing relationships, and driving business growth for our UK-based accounting firm. You will serve as the primary point of contact for new clients, ensuring exceptional service while identifying new business opportunities. We value structure, efficiency, and client satisfaction. If you thrive in a process-driven environment and enjoy building long-term relationships, this is the perfect role for you.",
    responsibilities: [
      "Keeping up to date CRM tools (e.g., ClickUp, Systeme, Google Sheets, etc.)",
      "Serve as the main point of contact for UK/international clients, addressing inquiries and building trust.",
      "Identify and reach out to potential clients via email, calls etc.",
      "Follow up on leads and book meetings.",
      "Stay updated on industry trends and competitor offerings to refine sales strategies.",
      "Work closely with the accounting team to ensure smooth on-boarding and service delivery."
    ],
    requirements: [
      "Bachelor’s degree in Business, Marketing, Communications, or a related field. ",
      "Excellent English communication skills (written & verbal) – must be fluent and professional.",
      "Strong organisational & problem-solving skills.",
      "Ability to understand client needs and position as per accounting/financial services effectively. ",
      "Self-motivated, target-driven, and comfortable working in a fast-paced environment.  ",
      "Familiarity with UK business culture is an advantage.",
      "Willingness to learn and adapt to new technologies and methodologies.",
      "Experience in sales, client relations, or business development is a bonus."
    ],
    benefits: [
      "Competitive salary based on skill set and experience - 45,000 - 55,000 PKR",
      "Work in an organized & efficient business",
      "Performance-based pay increases",
      "Fast career growth opportunities",
      "Supportive team spirit"
    ],
    formLink: ""
  },
  {
    id: 5,
    title: "Recruitment Assistant",
    department: "HR & Recruitment",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "We are looking for a Recruitment Assistant...",
    fullDescription: "We are looking for a Recruitment Assistant to join our growing team. This is a full-time on-site role for a Recruitment Assistant at our Lahore-based office. In this role you will be responsible for the recruitment process to bring in the best local and national talent. We are an accounting practice so we are recruiting Accountants at a different stages (Junior Accountants with no experience, Accountants with some experience & Senior Accountants with 2+ years of experience. We have a culture where we value structure and efficiency. So if you like a structured approach to your work, workflows, and SOP's then this is a great position for you.",
    responsibilities: [
      "Tracking performance KPIs",
      "Reviewing the recruitment process",
      "Improving processes to increase efficiency"
    ],
    requirements: [],
    benefits: [
      "Rewarding salary based on experience - 40,000 - 60,000 PKR",
      "Work in an organized & efficient business",
      "Performance-based pay increases",
      "Fast career growth opportunities",
      "Supportive team spirit"
    ],
    formLink: ""
  },
  {
    id: 6,
    title: "Compliance Assistant",
    department: "Compliance",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "",
    fullDescription: "",
    responsibilities: [],
    requirements: [],
    benefits: [],
    formLink: ""
  },
  {
    id: 7,
    title: "Jr. Full Stack Developer",
    department: "IT & Operations",
    type: "Full-time",
    location: "Lahore",
    shortDescription: "We are looking for a Junior Full Stack Developer...",
    fullDescription: "We are looking for a Junior Full Stack Developer to join our growing team. This is a full-time on-site role for a Junior Full Stack Developer at our Lahore-based office. In this role you will be responsible about Creating Google Scripts to automate internal processes, Setting up automations, looking after business website as well as developing new tools in order to increase the business efficiency. We are an accounting practice and we try to set up the processes that help as us to save time and automate things. We have a culture where we value structure and efficiency. So if you like a structured approach to your work, workflows, and SOP's then this is a great position for you.",
    responsibilities: [
      "Create new scripts to automate internal processes",
      "Develop new internal tools",
      "Improving existing processes to increase business efficiency"
    ],
    requirements: [
      "BS Information technology / Computer science",
      "Experience with web development (e.g., HTML, CSS, JavaScript, WordPress).",
      "Experience with Backend Technologies (e.g., SQL Server, Node JS). Must know Node.js automation libraries",
      "Experience in working with Google APIs (especially Sheets and Drive)",
      "Ability to write clean, efficient code.",
      "Strong problem-solving skills.",
      "Design, Develop, and manage WordPress website.",
      "Contribute to the overall improvement of the development process and team practices.",
      "Willingness to learn and adapt to new technologies and methodologies."
    ],
    benefits: [
      "Rewarding salary based on experience - 45,000 - 55,000 PKR",
      "Work in organized & efficient business",
      "Performance-based pay increases",
      "Fast career growth opportunities",
      "Supportive team spirit"
    ],
    formLink: ""
  },
];

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-primary">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <BriefcaseIcon className="w-4 h-4 mr-1" />
              {job.department}
            </span>
            <span>{job.type}</span>
            <span>{job.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {job.formLink ? (
            <a
              href={job.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Apply Now
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </a>
          ) : (
            <div className="flex items-center justify-center px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium whitespace-nowrap cursor-not-allowed">
              Opening Soon
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        {expanded ? job.fullDescription : job.shortDescription}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-primary hover:text-primary-dark mb-6"
      >
        {expanded ? (
          <>
            <span>Read Less</span>
            <ChevronUpIcon className="ml-1 w-4 h-4" />
          </>
        ) : (
          <>
            <span>Read More</span>
            <ChevronDownIcon className="ml-1 w-4 h-4" />
          </>
        )}
      </button>

      {expanded && (
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {job.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Salary and Benefits:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {job.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
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
                Explore Career Opportunities
              </span>
              <br />
              <span>Grow With Us</span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary-light max-w-2xl mx-auto mb-10">
              Discover exciting roles and be part of our dynamic team of professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team of financial experts
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* General Application CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Perfect Role?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented professionals. Leave your details below and we will contact you when we have a role available.
              </p>
              <a
                href="https://forms.gle/RCYPY7RBfPrJqxNX8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Apply for Future Roles
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}