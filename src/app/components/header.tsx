"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="mx-auto max-w-screen-2xl bg-purple-700 text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-10 lg:px-40">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FaEnvelope />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1 hidden sm:flex">
              <FaPhoneAlt />
              <span>(12345)67890</span>
            </div>
          </div>
          {/* Right Section */}
<div className="flex items-center space-x-4">
  <span className="hidden sm:block">English</span>
  <span className="hidden sm:block">USD</span>
  <div className="flex items-center space-x-2">
    <Link href="/login" legacyBehavior>
      <a className="flex items-center space-x-2">
        <FaUser />
        <span className="hidden sm:block">Login</span>
      </a>
    </Link>
  </div>
  <Link href="/wishlist" legacyBehavior>
    <a className="flex items-center space-x-2">
      <FaHeart />
      <span className="hidden sm:block">Wishlist</span>

    </a>
  </Link>
  <Link href="/shopingCard" legacyBehavior>
    <a>
      <FaShoppingCart />
    </a>
  </Link>
</div>

        </div>
      </div>

      {/* Navigation Header */}
      <div className="mx-auto max-w-screen-2xl bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-10 lg:px-40 py-4">
          {/* Logo */}
          <h1 className="text-purple-700 text-2xl font-bold">Hekto</h1>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>
            <Link href="aboutUs" className="hover:text-purple-700">
              Pages
            </Link>
            <Link href="productDetails" className="hover:text-purple-700">
              Products
            </Link>
            <Link href="blogPage" className="hover:text-purple-700">
              Blog
            </Link>
            <Link href="shopList" className="hover:text-purple-700">
              Shop
            </Link>
            <Link href="contactUs" className="hover:text-purple-700">
              Contact
            </Link>
          </nav>

          {/* Search Box */}
          <div className="hidden lg:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:border-purple-500"
            />
            <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">
              Search
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden text-purple-700 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>
            <Link href="aboutUs" className="hover:text-purple-700">
              Pages
            </Link>
            <Link href="productDetails" className="hover:text-purple-700">
              Products
            </Link>
            <Link href="blogPage" className="hover:text-purple-700">
              Blog
            </Link>
            <Link href="shopList" className="hover:text-purple-700">
              Shop
            </Link>
            <Link href="contactUs" className="hover:text-purple-700">
              Contact
            </Link>
            </nav>

            {/* Search Box (Mobile) */}
            <div className="flex items-center space-x-2 px-6 py-4">
              <input
                type="text"
                placeholder="Search"
                className="border w-full rounded-md px-3 py-1 text-sm focus:outline-none focus:border-purple-500"
              />
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

