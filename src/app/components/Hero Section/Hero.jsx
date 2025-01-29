import React from "react";
import HeroLeft from "./Hero-Left";
import HeroRight from "./Hero-Right";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
