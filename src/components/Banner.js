import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section  className="bg-gray-50 py-16">
      <div  className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Simplifying the <span className="text-blue-500">Hiring</span> Process for <br></br>Your Business
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Find and hire the right talent, fast with the only hiring platform built for businesses like yours.
        </p>
        <button className="bg-yellow-500 cursor-pointer relative z-10 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-yellow-600 transition">
          Request A Demo
        </button>
      </div>

      <div className="  flex justify-center">
        {/* Replace the image src with your own */}
        <Image
          src="/Savoir-etre-1024x704.png"
          alt="Team"
          width={800}
          height={400}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default Banner;
