"use client";

import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className=" py-10 text-center">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-xl md:text-3xl font-bold mb-2">
          Start Your Free Trial Today!
        </h2>
        <p className="text-base mb-6 text-[#4b5563]">
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
