import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl bg-purple-100 text-gray-700 pt-10  ">
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {/* Logo and Subscription */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Hekto</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 rounded-md border border-gray-300 mb-3"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm mt-4">
            Contact Info
            <br />
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Pages</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
      <div className="bg-purple-300 flex justify-between text-sm text-gray-600 mt-10 px-40 py-4">
  <div className="flex justify-start gap-4 mb-2"> {/* Align social icons to the right */}
    {/* Social Media Icons */}
    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
      <img src="/fb.png" alt="Facebook" className="w-6 h-6 rounded-full overflow-hidden shadow-md" />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
      <img src="/insta.png" alt="Twitter" className="w-6 h-6 rounded-full overflow-hidden shadow-md" />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300">
      <img src="/instag.png" alt="Instagram" className="w-6 h-6 rounded-full overflow-hidden shadow-md" />
    </a>
  </div>
  <div className="flex items-center justify-start">
    © Webecy - All Rights Reserved {/* Align text to the left */}
  </div>
</div>

    </footer>
  );
};

export default Footer;
