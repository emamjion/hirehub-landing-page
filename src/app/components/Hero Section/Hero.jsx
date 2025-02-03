import React from "react";
import HeroLeft from "./Hero-Left";
import HeroRight from "./Hero-Right";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-t from-[#000080ea] via-[#0000808f] to-[#00008014] flex items-center justify-center"
      id="hero"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
