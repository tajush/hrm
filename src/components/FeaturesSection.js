import React from 'react';
import { FaUsers, FaRocket, FaChartBar } from 'react-icons/fa'; // Import specific icons

const features = [
  {
    id: 1,
    icon: <FaUsers className="w-12 h-12 text-blue-500" />, // Use React Icons here
    title: 'Unlimited jobs & users.',
    description:
      'Say goodbye to pay-per-user and limited channels. Enjoy unlimited access without extra fees or costs.',
    link: '#',
  },
  {
    id: 2,
    icon: <FaRocket className="w-12 h-12 text-blue-500" />, // Use React Icons here
    title: 'Recruit better and Faster.',
    description:
      'Our platform simplifies the hiring process, saving you time and letting you focus on the human side of recruiting.',
    link: '#',
  },
  {
    id: 3,
    icon: <FaChartBar className="w-12 h-12 text-blue-500" />, // Use React Icons here
    title: 'People Data & Analytics.',
    description:
      'Our software empowers you to create customized solutions tailored to your hiring needs with powerful analytics.',
    link: '#',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl text-center mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How can we <span className="text-blue-500">help</span> you get started?
        </h2>
        <p className="text-gray-600 mb-12">
          Our customers love us, and we know you will too.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="text-blue-500 font-medium hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
