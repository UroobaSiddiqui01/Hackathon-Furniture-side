"use client";
import React from "react";
import Image from "next/image";

const LatestBlog: React.FC = () => {
  const blogs = [
    {
      image: "/Frame 1.png",
      title: "Top essential Trends in 2021",
      description: "More off this less hello samlande lied much over tightly...",
    },
    {
      image: "/Frame 2.png",
      title: "Discover the Future of Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: "/Frame 3.png",
      title: "Innovative Ideas for 2021",
      description: "Vivamus luctus urna sed urna ultricies ac tempor dui...",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-10">
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-blue-900 mb-8">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6  hover:shadow-xl transition">
              <Image
                src={blog.image}
                alt={`Blog ${index + 1}`}
                width={300}
                height={200}
                className="w-full object-cover rounded-lg"
              />
              <h3 className="text-gray-800 font-semibold mt-4">{blog.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{blog.description}</p>
              <button className="text-pink-500 mt-4 font-medium hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;

