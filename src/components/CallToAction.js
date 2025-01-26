import React from "react";

const CallToAction = () => {
  return (
    <section className="relative  bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-center" 
             style={{ backgroundImage: "url('/BSHRM+2024+Installation.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Start making great hires today.
        </h1>
        <p className="text-lg mb-6">
          Try LuminoHR for free - no credit card required - to see how easy it is to streamline and improve your entire recruiting process.
        </p>
        <button className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-600 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
