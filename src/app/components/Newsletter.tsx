"use client";
import React from "react";
import Image from "next/image";

const NewsletterSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-2xl relative w-full h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/Rectangle.png" 
        alt="Newsletter Illustration"
        layout="fill" 
        objectFit="cover" 
        className="z-[-1]" 
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0"></div>

      {/* Text Overlay */}
      <div className="absolute flex flex-col items-center justify-center px-4 text-center text-blue-900">
        <h2 className="text-2xl lg:text-2xl font-bold mb-4 ">
          Get the Latest Updates by Subscribing <br/>  Our Newsletter
        </h2>
        
        <button className="bg-pink-500 text-white px-8 py-3 rounded-md shadow-md hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;

