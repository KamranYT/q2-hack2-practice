import Link from "next/link";
import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white text-sm flex justify-center items-center py-2">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a
            href="#"
            className="font-bold underline ml-1 hover:text-gray-300"
          >
            ShopNow
          </a>
        </span>
        <div className="absolute right-5">
          <select
            className="bg-transparent text-white cursor-pointer"
            defaultValue="English"
          >
            <option value="English">English</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Exclusive</div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
            <li>
            <Link href="/sign" className="hover:text-gray-700">
                 Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative flex-1 mx-5 max-w-md md:max-w-lg lg:max-xl">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          >
            🔍
          </button>
        </div>

        {/* Placeholder for Navigation or Icons */}
        <div className="flex gap-4">
          <button className="hover:text-gray-700">
          <CiHeart />
          </button>
          <button className="hover:text-gray-700 text-5xl text-sm">
            <RiShoppingCart2Line />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
