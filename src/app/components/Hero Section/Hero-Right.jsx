import React from "react";
import { Button } from "@/components/ui/button";

const HeroRight = () => {
  return (
    <div className="space-y-6 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      <span className="text-gray-600">HireHub{" "}</span>
        A recruiting platform that brings big ideas & {" "}
        <span className="text-gray-600">top talents</span>
      </h1>
      <p className="text-gray-600 text-lg">
      Simplify your recruitment process with our intuitive and powerful Applicant Tracking System (ATS). 
      </p>
      <div className="flex items-center space-x-6">
        <Button className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
          Get Started
        </Button>
        {/* <button className="flex items-center space-x-2 text-red-500 font-semibold">
          <PlayCircle size={24} />
          <span>See logoname in Action</span>
        </button> */}
      </div>
      <p className="text-gray-500 text-sm">
        <span className="font-semibold">3,500+</span> candidates got their jobs from hirehub.co
      </p>
    </div>
  );
};

export default HeroRight;
