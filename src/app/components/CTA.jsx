"use client";

import { Button } from "@/components/ui/button";
// import ctaBg from '../../../public/cta-bg.jpg';

const CTA = () => {
  return (
    <section className="relative h-[300px] flex items-center justify-center text-center text-white">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/cta-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-2xl px-6">
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          Start Your Free Trial Today!
        </h2>
        <p className="text-base mb-6 text-gray-200">
          Join HireHub and take your hiring process to the next level.
        </p>
        <Button className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
          Try HireHub Free
        </Button>
      </div>
    </section>
  );
};

export default CTA;
