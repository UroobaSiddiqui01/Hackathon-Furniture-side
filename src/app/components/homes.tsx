import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-2xl bg-gray-50">
    {/* Unique Features Section */}
{/* Unique Features Section */}
<section className="bg-purple-100 py-16">
  <div className="bg-purple-100 py-10">
    <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-10 space-y-0 lg:space-x-6">
      {/* Left Side - Image with Light Pink Circle */}
      <div className="lg:w-1/2 relative flex justify-center items-center">
        {/* Image */}
        <Image
          src="/Group 153.png"
          alt="Lamp"
          width={500}
          height={500}
          className="rounded-md relative"
        />
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-blue-800 leading-snug">
          Unique Features Of Latest &<br /> Trending Products
        </h2>

        {/* Accent Border */}
        <div className="w-16 h-1 bg-pink-500 my-3"></div>

        <div className="text-gray-400 leading-relaxed space-y-3">
          <div className="flex items-start">
            <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 mr-3"></span>
            <p>All frames constructed with hardwood solids and laminates.</p>
          </div>
          <div className="flex items-start">
            <span className="w-3 h-3 bg-blue-800 rounded-full mt-2 mr-3"></span>
            <p>
              Reinforced with double wood dowels, glue, screw-nails corner
              blocks, and machine nails.
            </p>
          </div>
          <div className="flex items-start">
            <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-3"></span>
            <p>Arms, backs, and seats are structurally reinforced.</p>
          </div>
        </div>

        {/* Add to Cart Button with Product Name and Price */}
        <div className="mt-4 flex items-center space-x-4">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition">
            Add to Cart
          </button>
          <div>
            <h3 className="text-xl font-semibold text-blue-800">B&B Italian Sofa</h3>
            <p className="text-lg font-medium text-blue-800">$32.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Trending Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">Trending Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cantilever Chair", price: "$42.00", img: "/trending1.png" },
              { name: "Cantilever Chair", price: "$42.00", img: "/trending2.png" },
              { name: "Cantilever Chair", price: "$42.00", img: "/trending3.png" },
              { name: "Cantilever Chair", price: "$42.00", img: "/trending4.png" },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md overflow-hidden"
              >
                <Image src={product.img} alt={product.name} className="w-full"
                width={0}
                height={0} />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-pink-500 mt-2">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Section */}
<section className="py-16 ">
  <div className="container mx-auto px-6 lg:px-16">
    {/* Centered Heading */}
    <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
       Discount Item
    </h1>

    {/* Links Below Heading */}
    <div className="flex justify-center space-x-6 mb-8">
      <a
        href="#"
        className="text-blue-900 hover:text-pink-500 transition font-medium"
      >
        Wood Chair
      </a>
      <a
        href="#"
        className="text-blue-900 hover:text-pink-500 transition font-medium"
      >
        Plastic Chair
      </a>
      <a
        href="#"
        className="text-blue-900 hover:text-pink-500 transition font-medium"
      >
        Sofa Collection
      </a>
    </div>

   {/* Content Section */}
<div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10">
  {/* Left Content */}
  <div className="lg:w-1/2 lg:pr-8">
    <h3 className="text-2xl font-bold text-blue-800 mb-3">
      20% Discount On All Products
    </h3>
    <p className="text-pink-500 mb-4 text-lg">Eams Sofa Compact</p>
    <p className="text-gray-400 mb-5 text-sm lg:text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
      habitasse nec, bibendum condimentum.
    </p>

    {/* Product Features with Tick Marks */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
      <li className="flex items-start">
        <span className="w-5 h-5 flex items-center justify-center text-green-500 font-bold mr-3">
          ✓
        </span>
        <p className="text-gray-500 text-sm lg:text-base">
          Material expose like metals
        </p>
      </li>
      <li className="flex items-start">
        <span className="w-5 h-5 flex items-center justify-center text-green-500 font-bold mr-3">
          ✓
        </span>
        <p className="text-gray-500 text-sm lg:text-base">
          Clear lines and geometric figures
        </p>
      </li>
      <li className="flex items-start">
        <span className="w-5 h-5 flex items-center justify-center text-green-500 font-bold mr-3">
          ✓
        </span>
        <p className="text-gray-500 text-sm lg:text-base">
          Simple neutral colours
        </p>
      </li>
      <li className="flex items-start">
        <span className="w-5 h-5 flex items-center justify-center text-green-500 font-bold mr-3">
          ✓
        </span>
        <p className="text-gray-500 text-sm lg:text-base">
          Material expose like metals
        </p>
      </li>
    </ul>

    <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition">
      Shop Now
    </button>
  </div>

  {/* Right Image */}
  <div className="lg:w-1/2 mt-8 lg:mt-0">
    <Image
      src="/discount.png"
      alt="Eams Sofa Compact"
      className=""
      width={800}
      height={800}
    />
  </div>
</div>

  </div>
</section>

    </div>
  );
};

export default Home;
