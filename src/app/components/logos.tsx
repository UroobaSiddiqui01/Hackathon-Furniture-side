"use client";
import React from "react";
import Image from "next/image";

const LogoSection: React.FC = () => {
  return (
    <div className="bg-white py-8 flex justify-center">
      <Image
        src="/logoss.png"
        alt="Site Logo"
        width={500}
        height={200}
        className="object-contain"
      />
    </div>
  );
};

export default LogoSection;
