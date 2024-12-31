import React from 'react';
import LogoSection from "../components/logos";
import Image from 'next/image';


const ShopGridDefault = () => {
  const products = [
    { name: "Vel elit euismod", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Ultricies condimentum imperdiet", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Vitae suspendisse sed", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Sed at fermentum", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Fusce pellentesque at", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Vestibulum magna laoreet", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Sollicitudin amet orci", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Ultrices mauris sit", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Pellentesque condimentum ac", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Cras scelerisque velit", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Lectus vulputate faucibus", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
    { name: "Purus risus, ut", price: "$26.00", oldPrice: "$42.00", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800">Ecommerce Accessories & Fashion item</h1>
        </div>

        {/* Filter Options */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4 items-center">
            <label className="text-gray-600">Per Page:</label>
            <select className="border rounded px-3 py-1 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400">
              <option>9</option>
              <option>18</option>
              <option>27</option>
            </select>
          </div>
          <div className="flex space-x-4 items-center">
            <label className="text-gray-600">Sort By:</label>
            <select className="border rounded px-3 py-1 bg-white shadow-sm focus:ring-2 focus:ring-indigo-400">
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 border rounded shadow hover:shadow-md">
              <Image
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
                width={20} height={20}
              />
              <h3 className="text-gray-800 font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">
                {product.price} <span className="line-through">{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <LogoSection/>

    </div>
  );
};

export default ShopGridDefault;

