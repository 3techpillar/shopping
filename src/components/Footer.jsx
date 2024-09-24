import { payment, facebook, youtube, instagram } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white py-10 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Popular Categories */}
          <div className="col-span-1">
            <h3 className="w-fit text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Popular Categories
            </h3>
            <ul>
              <Link href={"/products"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  All Products
                </li>
              </Link>
              <Link href={"/#featured"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Feature Products
                </li>
              </Link>
              <Link href={"/#spritiual"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Spiritual Products
                </li>
              </Link>
            </ul>
          </div>
          {/* Our Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Our Company
            </h3>
            <ul>
              <Link href={"/privacy"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Privacy Policy
                </li>
              </Link>
              <Link href={"term-condition"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  Terms And Conditions
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                  About Us
                </li>
              </Link>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Contact
            </h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://www.chotiwale.in" target="_blank">
                  chotiwale.com
                </a>
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-map-marker-alt"></i>
                224 bhilamau, road, bhauti, Bhimsen, Kanpur, Uttar Pradesh,
                209305
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-phone-alt"></i>
                (+91) 9161 293 334
              </li>
              <li className="mb-2 text-gray-400 hover:text-gray-200 cursor-pointer">
                <i className="fas fa-envelope"></i>
                chotiwalepurecamphormarket
                <br />
                @gmail.com
              </li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div className="col-span-2">
            <h3 className="w-fit text-lg font-bold mb-4  inline-block">
              Subscribe to our newsletter and <br /> Get 10% off
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-2 bg-transparent border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-white text-black py-2 rounded-md hover:bg-[#ebf7ff] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-gray-400 text-sm">
              Get regular updates on our product with our newsletter.
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-3 flex-col justify-center items-center">
          {/* Payment methods */}
          <div className="flex flex-row gap-3">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61563291367273&mibextid=ZbWKwL"
              }
              target="_blank"
            >
              <Image
                src={facebook}
                alt="payment"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
            <Link
              href={
                "https://www.instagram.com/chotiwalepurecamphor?igsh=bW84MWY4ZTBweGJp"
              }
              target="_blank"
            >
              <Image
                src={instagram}
                alt="payment"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
            <Link
              href={"https://www.youtube.com/@avon_trading_chotiwalekapoor"}
              target="_blank"
            >
              <Image
                src={youtube}
                alt="payment"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Copyright © Chotiwale All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
