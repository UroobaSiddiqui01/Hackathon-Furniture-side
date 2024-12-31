"use client";
import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Mini LCW Chair",
    price: "$120",
    image: "/Top catagories1.png",
  },
  {
    id: 2,
    name: "Stylish Sofa",
    price: "$200",
    image: "/Top catagories2.png",
  },
  {
    id: 3,
    name: "Modern Lamp",
    price: "$50",
    image: "/Top catagories3.png",
  },
  {
    id: 4,
    name: "Classic Chair",
    price: "$80",
    image: "/Top catagories4.png",
  },
];

const TopCategories: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="mt-4 text-gray-600 font-medium">{product.name}</p>
              <p className="text-gray-400">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;

