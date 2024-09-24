/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const page = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Delivery Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="john doe"
              />
            </div>

            {/* Mobile Number */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="+1 424-236-3574"
              />
            </div>

            {/* Email */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="thejon@gmail.com"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Hawthorne"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="California"
              />
            </div>

            {/* ZIP */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ZIP
              </label>
              <input
                type="text"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="90250"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="mt-1 px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="4796 Libby Street"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Payment Method</h3>
            <div className="mt-4 flex items-center space-x-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio text-green-500"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked
                />
                <span className="ml-2">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {/* Item 1 */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                    height={64}
                    width={64}
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-medium">{item.name}</h4>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total (USD)</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Confirm Order */}
          <div className="mt-8">
            <Link href={"/confirm-order"}>
              <button className="w-full bg-black text-white py-2 rounded-lg shadow-md">
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
