import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Janis Krekovskis",
    role: "Founder & CEO",
    bio: "Janis Krekovskis is a seasoned CPA with over 15 years of experience in accounting, financial management, and strategic business advisory. He has worked extensively with multinational corporations, SMEs, and startups, helping them streamline financial operations, ensure regulatory compliance, and improve profitability. Before founding Digiteams, Janis held senior finance roles in both public and private sectors, where he led cross-border teams and implemented scalable financial systems. At Digiteams, he combines his technical expertise with a strong entrepreneurial vision to drive digital transformation in finance and operations.",
    image: "/CEO-digiteams.webp",
    certifications: ["CPA", "ACCA", "CFA"],
    experience: "15+ years in corporate accounting",
    specialties: ["Financial Strategy", "Corporate Governance", "Risk Management"]
  },
];

const TeamSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experienced professionals dedicated to your financial success
        </p>
      </div>

      {/* Unified container */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Image section */}
          <div className="lg:w-3/5 relative">
            <img
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              className="w-full h-full min-h-[400px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
          </div>

          {/* Content section */}
          <div className="lg:w-3/5 p-8 lg:p-12 items-center">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{teamMembers[0].name}</h3>
              <p className="text-indigo-600 text-xl font-medium mb-4">{teamMembers[0].role}</p>
              <p className="text-gray-600 mb-6">{teamMembers[0].bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;