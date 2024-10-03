"use client";
import React, { useContext, useState } from "react";

import { IoBagHandleOutline, IoPersonCircleOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { facebook, youtube, instagram } from "@/data/assets";

import Link from "next/link";
import Logo from "./Logo";

import { CartContext } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const isActive = (checkPathname) => pathname === checkPathname;

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    console.log("Logout clicked");
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-2 py-1 md:px-16 flex items-center justify-between gap-5 sticky top-0 z-50">
        <div className="flex-1 sm:flex items-center justify-start gap-12 text-lg hidden">
          <Link href={"/"}>
            <p
              className={`${
                isActive("/") ? "font-bold border-b border-black" : "text-black"
              }  pb-[1px]`}
            >
              Home
            </p>
          </Link>
          <Link href={"/products"}>
            <p
              className={`${
                isActive("/products")
                  ? "font-bold border-b border-black"
                  : "text-black"
              }  pb-[1px]`}
            >
              Products
            </p>
          </Link>
        </div>
        <div className="flex-1 flex items-center sm:justify-center">
          <RiMenu2Fill
            size={30}
            onClick={() => setIsMobile(true)}
            className="block sm:hidden"
          />
          <Logo />
        </div>
        {/* <form className="w-[75%] hidden sm:flex justify-center relative">
          <div className="relative w-[70%]">
            <FaSearch
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Enter your product name..."
              className="border-[2px] border-gray-300 w-full font-semibold rounded-md py-3 px-3"
            />
          </div>
        </form> */}
        <div className="flex-1 flex gap-3 sm:gap-6 items-center justify-end">
          <div className="relative">
            <div
              className="cursor-pointer flex items-center"
              onClick={toggleDropdown}
            >
              <BsPerson size={35} />
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link href={"/"}>
                  <button className="w-full flex items-center gap-3 text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <IoPersonCircleOutline size={24} /> Profile
                  </button>
                </Link>

                <Link href={"/login"}>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <CgLogOut size={24} /> Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
          <Link href={"/cart"}>
            <div className="relative cursor-pointer">
              <div className="h-5 w-5 bg-red-500 absolute right-0 top-0 text-white flex items-center justify-center rounded-full">
                {cartItems.length}
              </div>
              <IoBagHandleOutline size={35} />
            </div>
          </Link>
        </div>
        {isMobile && (
          <div
            className={`bg-white absolute inset-0 transform transition-transform duration-500 w-[80vw] h-screen top-0 -left-[80] z-20 ${
              isMobile ? "translate-x-0 left-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between p-4 border-b border-gray-300">
              <Logo />
              <RxCross1 size={30} onClick={() => setIsMobile(false)} />
            </div>
            <div
              className="pt-5 flex flex-col items-start gap-4 text-lg px-4"
              onClick={() => setIsMobile(false)}
            >
              <Link href={"/"} className="w-full">
                <div
                  className={`px-2 py-1 rounded-xl ${
                    isActive("/") ? "bg-blue-200" : "text-black"
                  }  pb-[1px]`}
                >
                  Home
                </div>
              </Link>
              <Link href={"/products"} className="w-full">
                <div
                  className={`px-2 py-1 rounded-xl ${
                    isActive("/products") ? "bg-blue-200" : "text-black"
                  }  pb-[1px]`}
                >
                  Products
                </div>
              </Link>
              <Link href={"/#featured"} className="w-full">
                <div
                  className={`px-2 py-1 rounded-xl ${
                    isActive("/#featured") ? "bg-blue-200" : "text-black"
                  }  pb-[1px]`}
                >
                  Featured Products
                </div>
              </Link>
              <Link href={"/about"} className="w-full">
                <div
                  className={`px-2 py-1 rounded-xl ${
                    isActive("/about") ? "bg-blue-200" : "text-black"
                  }  pb-[1px]`}
                >
                  About Us
                </div>
              </Link>
              <Link href={"/privacy"} className="w-full">
                <div
                  className={`px-2 py-1 rounded-xl ${
                    isActive("/privacy") ? "bg-blue-200" : "text-black"
                  }  pb-[1px]`}
                >
                  Privacy Policy
                </div>
              </Link>
              <Link href={"/term-condition"} className="w-full">
                <div
                  className={`px-2 py-1 rounded-xl ${
                    isActive("/term-condition") ? "bg-blue-200" : "text-black"
                  }  pb-[1px]`}
                >
                  Terms & Conditions
                </div>
              </Link>
              <div className="flex flex-row gap-3 px-2">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61563291367273&mibextid=ZbWKwL"
                  }
                  target="_blank"
                >
                  <Image
                    src={facebook}
                    alt="payment"
                    width={30}
                    height={30}
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
                    width={30}
                    height={30}
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
                    width={30}
                    height={30}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default React.memo(Navbar);
