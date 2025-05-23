import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "CPA with 15+ years in corporate accounting and financial strategy.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of Tax Services",
    bio: "Tax specialist with expertise in international business taxation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Financial Advisory",
    bio: "Former Big 4 consultant focused on financial transformation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop"
  }
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {teamMembers.map((member) => (
          <div key={member.id} className="w-full max-w-xs bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-indigo-600 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;