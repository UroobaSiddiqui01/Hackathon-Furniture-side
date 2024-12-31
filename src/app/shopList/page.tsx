"use client";
import React from "react";
import Image from "next/image";

const ShopList: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Shop List
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(9)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <Image
                  src={`/images/product${index + 1}.png`} // Add images named product1.png, product2.png, etc., in the `/public/images` folder.
                  alt={`Product ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Product Name {index + 1}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    A short description of the product goes here.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-purple-500 font-bold text-xl">
                      $99.00
                    </span>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ShopList;
