import React from "react";

const CoreFeatures = () => {
  const features = [
    {
      title: "Simplifying the Hiring Process.",
      description:
        "With LuminoHR, all your employee information lives in a single, secure database, with powerful reporting tools and seamless editing capabilities at your fingertips. Managing workforce data has never been easier, faster, or more accurate, and the road to exceptional HR has never been this clear.",
      image: "/BSHRM+2024+Installation.png",
    },
    {
      title: "More Applicants. Less Wasted Time.",
      description:
        "With LuminoHR, all your employee information lives in a single, secure database, with powerful reporting tools and seamless editing capabilities at your fingertips. Managing workforce data has never been easier, faster, or more accurate, and the road to exceptional HR has never been this clear.",
      image: "/BSHRM+2024+Installation.png",
    },
    {
      title: "Hire the Best in Less Time.",
      description:
        "With LuminoHR, all your employee information lives in a single, secure database, with powerful reporting tools and seamless editing capabilities at your fingertips. Managing workforce data has never been easier, faster, or more accurate, and the road to exceptional HR has never been this clear.",
      image: "/BSHRM+2024+Installation.png",
    },
    {
        title: "Hire the Best in Less Time.",
        description:
          "With LuminoHR, all your employee information lives in a single, secure database, with powerful reporting tools and seamless editing capabilities at your fingertips. Managing workforce data has never been easier, faster, or more accurate, and the road to exceptional HR has never been this clear.",
        image: "/BSHRM+2024+Installation.png",
      },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">
            Key <span className="text-gray-900">Features</span> of LuminoHR
          </h2>
          <p className="text-gray-500 mt-2">
            Our customers love us, and we know you will too.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 items-center`}
            >
              {/* Feature Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              {/* Feature Content */}
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <button className="inline-flex items-center px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
