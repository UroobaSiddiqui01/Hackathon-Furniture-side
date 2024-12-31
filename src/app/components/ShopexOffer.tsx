"use client";
import React from "react";
import Image from "next/image";

const ShopexOffer: React.FC = () => {
  const offers = [
    { icon: "/free-delivery 1.png", title: "Free Shipping" },
    { icon: "/cashback 1.png", title: "Secure Payment" },
    { icon: "/premium-quality 1.png", title: "Money Back Guarantee" },
    { icon: "/24-hours-support 1.png", title: "24/7 Support" },

  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-blue-900 mb-10">
          What Shopex Offer
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
  );
};

export default ShopexOffer;
