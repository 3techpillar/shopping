import { facebook, google, loginImg, twitter } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="bg-white shadow-none sm:shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-5xl">
        {/* Left Side - Welcome Message */}
        <div className="w-full md:w-1/2 bg-green-100 sm:flex flex-col justify-center items-center rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg overflow-hidden hidden">
          <Image
            src={loginImg}
            alt="login-img"
            className="w-full h-full object-cover"
            width={500}
            height={800}
          />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 bg-white py-8 px-4 sm:px-8 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Confirm your password"
                required
              />
            </div>
            <Link href={"/"}>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md transition duration-200"
              >
                Sign Up
              </button>
            </Link>
          </form>
          <p className="text-gray-600 mb-6 mt-5 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 font-semibold">
              Log In
            </Link>
          </p>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 text-sm">Or sign up with</span>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            {/* Icons for social login, replace src with actual icons */}
            <a href="#" className="text-gray-500">
              <Image
                width={32}
                height={32}
                src={google}
                alt="Google"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-gray-500">
              <Image
                width={32}
                height={32}
                src={facebook}
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-gray-500">
              <Image
                width={32}
                height={32}
                src={twitter}
                alt="Twitter"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
