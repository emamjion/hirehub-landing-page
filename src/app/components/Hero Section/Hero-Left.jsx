"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick").then((mod) => mod.default), {
  ssr: false,
});


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroLeft = () => {
  const images = [
    "/hero2.png",
    "/hero2.png",
    "/hero2.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
  };

  return (
    <div className="relative">
      <div className="absolute -bottom-5 left-20 w-4 h-4 bg-red-500 rounded-full"></div>
      <div className="absolute bottom-6 right-20 w-6 h-6 bg-green-500 rounded-full"></div>
      <div className="absolute top-20 left-8 w-5 h-5 bg-yellow-500 rounded-full"></div>

      <div className="relative items-center">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`Recruitment software ${index + 1}`}
                width={500}
                height={350}
                className=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroLeft;