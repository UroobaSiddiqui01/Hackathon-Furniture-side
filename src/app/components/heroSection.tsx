"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl bg-purple-100 py-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 space-y-10 lg:space-y-0 relative">
        {/* Left Lamp Image */}
        <div className="absolute top-0 left-0 transform -translate-x-10 -translate-y-10 hidden sm:block">
          <Image
            src="/lamp1.png"
            alt="Lamp"
            width={150}
            height={150}
            className="drop-shadow-lg sm:w-[180px] sm:h-[180px] lg:w-[250px] lg:h-[250px]"
          />
        </div>

        {/* Center Text */}
        <div className="lg:w-1/3 text-center lg:text-left flex flex-col mx-5 sm:mx-20 items-center lg:items-start">
          <p className="text-pink-600 font-semibold uppercase tracking-wide text-sm sm:text-base">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-josefinSans text-gray-800 mt-3 leading-snug">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <Button className="bg-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg mt-6 hover:bg-pink-700 shadow-md">
            Shop Now
          </Button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 flex justify-center">
          <Image
            src="/sofa promotional header.png"
            alt="Sofa"
            width={300}
            height={300}
            className="sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]"
          />
        </div>
      </div>

      {/* Left Lamp Image for Mobile */}
      <div className="block sm:hidden absolute top-6 left-0 transform -translate-x-6 -translate-y-6">
        <Image
          src="/lamp1.png"
          alt="Lamp"
          width={100}
          height={100}
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;






