"use client";
import React from "react";
import Image from "next/image";

const FeaturedProducts: React.FC = () => {
  // Product data array for simplicity
  const products = [
    { id: 1, name: "Cantilever Chair", price: "$200.00", image: "/chair1.png" },
    { id: 2, name: "Stylish Sofa", price: "$350.00", image: "/chair2.png" },
    { id: 3, name: "Wooden Table", price: "$150.00", image: "/chair3.png" },
    { id: 4, name: "Modern Lamp", price: "$120.00", image: "/chair4.png" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-blue-900 mb-10">
          Featured Products
        </h2>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-gray-800 font-semibold mt-4">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="bg-purple-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

