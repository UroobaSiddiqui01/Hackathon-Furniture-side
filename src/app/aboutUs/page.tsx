"use client";
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";


const AboutUsPage = () => {
  const offers = [
    { icon: "/free-delivery 1.png", title: "Free Shipping" },
    { icon: "/cashback 1.png", title: "Secure Payment" },
    { icon: "/premium-quality 1.png", title: "Money Back Guarantee" },
    { icon: "/24-hours-support 1.png", title: "24/7 Support" },
  ];

  const clients = [
    { name: "Selina Gomez", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/Mask Group.png" },
    { name: "John Doe", feedback: "Vivamus at magna ac ligula.", image: "/Mask2.png" },
    { name: "Jane Smith", feedback: "Nullam vel elit lectus. Vivamus at magna ac ligula.", image: "/Mask3.png" },
  ];

  return (
    <div className=" mx-auto max-w-screen-2xl bg-white min-h-screen pb-28">
      {/* Header */}
      <header className="bg-gray-100">
        <div className="container mx-auto px-40 py-10">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600">
            Home / Page / <span className="text-pink-600">About Us</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto py-14 px-6 lg:px-24">
  {/* Section Container */}
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 bg-white p-6 rounded-lg shadow-lg">
    {/* Left - Image */}
    <div className="flex justify-center">
      <Image
        src="/about.png" // Main product image
        alt="Product"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Right - Text */}
    <div className="text-justify">
      <h2 className="text-3xl font-bold text-blue-800 mb-4 leading-tight">
        Know About Our Ecommerce <br/> Business, History
      </h2>
      <p className="text-gray-400 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
        aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
        Accumsan fauc bibendum quam.
      </p>
      <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-10">
          {/* Heading */}
          <h2 className="text-center text-2xl lg:text-4xl font-bold text-blue-900 mb-10">
            Our Features
          </h2>
          {/* Offer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={offer.icon}
                  alt={offer.title}
                  width={80}
                  height={80}
                />
                <h3 className="text-blue-900 font-semibold mt-4">
                  {offer.title}
                </h3>
                <p className="text-gray-400 text-sm text-center mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonial Section */}
<div className="py-16 px-4  bg-gray-100">
  <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6">Our Client Say!</h2>
  <div className="container mx-auto flex flex-col items-center">
    {/* Client Images */}
    <div className="flex space-x-4 mb-6">
      {clients.slice(0, 3).map((client, index) => (
        <div key={index} className="rounded-full overflow-hidden shadow-md">
          <Image
            src={client.image}
            alt={client.name}
            width={80}
            height={80}
            className="w-20 h-20 object-cover"
          />
        </div>
      ))}
    </div>

    {/* Client Feedback */}
    <div className="text-center max-w-2xl">
      <h3 className="text-xl font-semibold">{clients[0].name}</h3>
      <p className="text-gray-500 text-sm">{clients[0].feedback}</p>
      <p className="text-gray-400 mt-2 italic">{clients[0].name} - CEO, XYZ Digital</p>
    </div>

    {/* Divider */}
    <div className="flex justify-center mt-4">
      <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUsPage;
