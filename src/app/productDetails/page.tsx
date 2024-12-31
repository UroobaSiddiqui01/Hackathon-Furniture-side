"use client";
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import LogoSection from "../components/logos";


const ProductDetails: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-8">
      {/* Header */}
      <header className="bg-gray-100">
        <div className="container mx-auto px-40 py-10">
          <h1 className="text-3xl font-bold text-gray-800">Product Details</h1>
          <p className="text-gray-600">
            Home / Page / <samp className="text-pink-600">Product Details</samp>
          </p>
        </div>
      </header>

      {/* Main Container */}
      <div className="container mx-auto py-14 lg:px-8 px-36">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-36 bg-white p-6 rounded-lg shadow">
          {/* Left - Product Images */}
          <div className="flex gap-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-4 ">
              <Image
                src="/Pd1.png"
                alt="Thumbnail 1"
                width={100}
                height={100}
                className="rounded-lg border-2 border-gray-300"
              />
              <Image
                src="/Pd2.png"
                alt="Thumbnail 2"
                width={100}
                height={100}
                className="rounded-lg border-2 border-gray-300"
              />
              <Image
                src="/Pd3.png"
                alt="Thumbnail 3"
                width={100}
                height={100}
                className="rounded-lg border-2 border-gray-300"
              />
            </div>

            {/* Main Product Image */}
            <div className="flex-1">
              <Image
                src="/Pd4.png" // Main product image
                alt="Product"
                width={260}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right - Product Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Playwood Arm Chair
            </h2>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-gray-600 text-sm ml-2">(22 Reviews)</span>
            </div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-semibold text-blue-800 mr-2">
                $32.00
              </span>
              <span className="text-pink-600 line-through">$49.00</span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="mb-6">
              <label className="block text-gray-800 mb-2 font-medium">
                Color
              </label>
              {/* Add color selection options */}
            </div>
            <button className="text-blue-900 px-6 py-3 rounded-lg font-normal flex items-center gap-2">
              Add to Cart
              <FaHeart className="line-through" />
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 bg-white px-44 p-6 flex justify-items-center gap-8 rounded-lg">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Description</h2>
        <h2 className="text-xl font-bold text-blue-800 mb-4">Aditional Info</h2>
        <h2 className="text-xl font-bold text-blue-800 mb-4">Reviews</h2>
        <h2 className="text-xl font-bold text-blue-800 mb-4">Video</h2>
        </div>
        <div>
        <h3 className="text-xl font-bold text-blue-800 px-44 mb-4">Varius tempor</h3>

        <p className="text-gray-400 px-44 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          posuere tincidunt est ut varius. Nulla facilisi. Phasellus ut felis
          vitae velit feugiat tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          posuere tincidunt est ut varius. Nulla facilisi. Phasellus ut felis
          vitae velit feugiat tristique.
        </p>
        <ul className="list-disc list-inside px-44 text-gray-400">
        <h3 className="text-xl font-bold text-blue-800 mb-4">More Detaals</h3>

          <li>Feature 1: High-quality materials</li>
          <li>Feature 2: Elegant and durable design</li>
          <li>Feature 3: Perfect for any modern home</li>
          <li>Feature 3: Perfect for any modern home</li>

        </ul>
      </div>

     {/* Related Products */}
<div className="mt-12 py-20 px-44">
  <h2 className="text-xl font-bold text-gray-800 mb-6">Related Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Simplified Related Product Cards */}
    {["pRd1.png", "pRd.png", "pRd3.png", "pRd4.png"].map((image, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        style={{ height: "300px" }} // Fixed height for the cards
      >
        <div className="relative  h-2/3 flex flex-col gap-4">
          {/* Adjusted image to fill container with proper aspect ratio */}
          <Image
            src={`/${image}`} // Replace with actual images
            alt={`Related Product ${index + 1}`}
            fill
            className="rounded-lg"
          />
        </div>
        <div className="p-4 text-center h-1/3 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            Product {index + 1}
          </h3>
          <p className="text-purple-600 font-bold">$129.00</p>
        </div>
      </div>
    

            )
          )}
        </div>
      </div>
      <LogoSection/>
    </div>
  );
};

export default ProductDetails;

