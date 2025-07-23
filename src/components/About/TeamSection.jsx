import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Janis Krekovskis",
    role: "Founder & CEO",
    bio: "Hi, I’m Janis but most people know me as a Productivity Guy. I guess it’s because I run a YouTube Channel called Productivity Guy with over 100 000 Subscribers and I have been privileged to touch more than 13 million people’s lives to become more productive and achieve their goals. Of course, that did not happen overnight. I started creating content about productivity back in 2016 and slowly but steadily I was growing my reach and audience.\n\nDuring my years of research, I discovered and established a new way of setting goals. I call this new goal-setting principle – Effort Goals. In today’s busy world everyone seems to be only focused on results. And don’t get me wrong, I think it’s good to focus on results, but I have found that this statement always holds true – Results will always follow the effort and not the other way around. The truth is that without effort there will be no results and this philosophy is at the very foundation of setting Effort Goals.\n\nI highly value location independence and that’s why I keep my business online as it allows me to work, travel and explore at the same time.",
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
              <p className="text-gray-600 mb-6">
                {teamMembers[0].bio.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;