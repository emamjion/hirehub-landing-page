"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import HeroLeft from "./Hero-Left";
import HeroRight from "./Hero-Right";

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full h-screen overflow-hidden border ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full "
        opts={{ loop: true }}
      > 
        <CarouselContent className="flex h-full ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 bg-gradient-to-t from-[#000080ea] via-[#0000808f] to-[#00008014]  justify-center">
              <HeroLeft/>

              <HeroRight/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
