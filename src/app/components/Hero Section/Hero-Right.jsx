import React from "react";
import { Button } from "@/components/ui/button";

const HeroRight = () => {
  return (
    <div className="space-y-4 text-gray-900">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        <span className="text-white">HireHub, </span>A recruiting platform
        that brings {" "}
        <span className="text-white">top talents</span>
      </h1>
      <p className="text-gray-100 text-lg">
        Simplify your recruitment process with our intuitive and powerful ATS.
      </p>
      <p className="text-gray-100 text-[15px]">
        HireHub is the all-in-one hiring platform that helps you find, screen,
        and hire the best candidates faster and more efficiently. Post jobs,
        review applications, schedule interviews, and track your entire hiring
        process in one place.{" "}
      </p>
      <div className="flex items-center space-x-6">
        <Button className="bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
          Get Started
        </Button>
      </div>
      <p className="text-gray-100 text-sm">
        <span className="font-semibold">3,500+</span> candidates got their jobs
        from hirehub.com
      </p>
    </div>
  );
};

export default HeroRight;
