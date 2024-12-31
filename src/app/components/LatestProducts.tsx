"use client";
import React from "react";
import Image from "next/image";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import Link from "next/link";

const LatestProducts: React.FC = () => {
  const tabs = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const products = [
    {
      id: 1,
      name: "Sofa Model 1",
      price: "$400.00",
      discountPrice: "$350.00",
      image: "/sofa1.png",
      link: "/products/sofa1",
    },
    {
      id: 2,
      name: "Sofa Model 2",
      price: "$450.00",
      discountPrice: "$400.00",
      image: "/image 15.png",
      link: "/products/sofa2",
    },
    {
      id: 3,
      name: "Sofa Model 3",
      price: "$500.00",
      discountPrice: "$450.00",
      image: "/sofa33.png",
      link: "/products/sofa3",
    },
    {
      id: 4,
      name: "Sofa Model 4",
      price: "$550.00",
      discountPrice: "$500.00",
      image: "/sofa4.png",
      link: "/products/sofa4",
    },
    {
      id: 5,
      name: "Sofa Model 5",
      price: "$600.00",
      discountPrice: "$550.00",
      image: "/sofa5.png",
      link: "/products/sofa5",
    },
    {
      id: 6,
      name: "Sofa Model 6",
      price: "$650.00",
      discountPrice: "$600.00",
      image: "/sofa6.png",
      link: "/products/sofa6",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-blue-900 mb-6">
          Latest Products
        </h2>
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md font-semibold ${
                index === 0 ? " text-pink-600" : " text-blue-900"
              } hover:bg-purple-500 hover:text-white`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id}>
              <div
                className=" bg-gray-100 rounded-lg p-4  hover:bg-white transition-shadow duration-300 group"
              >
                <div className="relative w-full h-48 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain rounded-lg"
                  />
                  <div className="absolute left-0 top-1/4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="/cart" legacyBehavior>
                      <a className="bg-white p-2 rounded-full text-blue-900 hover:bg-blue-900 hover:text-white transition">
                        <FaShoppingCart />
                      </a>
                    </Link>
                    <Link href="/wishlist" legacyBehavior>
                      <a className="bg-white p-2 rounded-full text-blue-900 hover:bg-blue-900 hover:text-white transition">
                        <FaHeart />
                      </a>
                    </Link>
                    <Link href={product.link} legacyBehavior>
                      <a className="bg-white p-2 rounded-full text-blue-900 hover:bg-blue-900 hover:text-white transition">
                        <FaSearch />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-blue-900 font-semibold mt-4">
                  {product.name}
                </h3>
                <div className="mt-4 flex ">
                  <p className="text-blue-900 line-through px-4">{product.price}</p>
                  <p className="text-red-600">{product.discountPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;






