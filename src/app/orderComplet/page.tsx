import React from 'react';
import LogoSection from '../components/logos';
import Image from 'next/image';

const OrderCompleted: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Order Completed</h1>
          <nav>
            <a href="#" className="text-blue-500 hover:underline">Home</a> /
            <a href="#" className="text-gray-500 ml-1">Order Completed</a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="bg-white p-10 rounded shadow-lg">
          <div className="flex justify-center mb-6">
            <Image
              src="https://via.placeholder.com/50" 
              alt="Order Completed Icon"
              className="w-16 h-16"
              width={20} height={20}
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Order Is Completed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded shadow hover:bg-pink-600">
            Continue Shopping
          </button>
        </div>

        {/* Brand Logos Section */}
        <div className="mt-12 flex justify-center space-x-6">
          <Image src="https://via.placeholder.com/100" alt="Brand 1" className="w-20" width={20} height={20}/>
          <Image src="https://via.placeholder.com/100" alt="Brand 2" className="w-20" width={20} height={20}/>
          <Image src="https://via.placeholder.com/100" alt="Brand 3" className="w-20" width={20} height={20}/>
          <Image src="https://via.placeholder.com/100" alt="Brand 4" className="w-20" width={20} height={20}/>
          <Image src="https://via.placeholder.com/100" alt="Brand 5" className="w-20" width={20} height={20}/>
        </div>
      </main>

      <LogoSection/>
    </div>
  );
};

export default OrderCompleted;
