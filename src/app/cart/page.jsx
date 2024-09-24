"use client";
import React, { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/Modal";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="px-2 sm:px-10 mt-5 mb-12 min-h-[30vh]">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left side - Cart Items */}
        <div className="w-full lg:w-2/3 pr-4">
          <div className="mb-4 border-b border-gray-300 pb-4 flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold ">Shopping Cart</h1>
            {cartItems.length > 0 && (
              <button
                onClick={() => setIsOpen(true)}
                className="border-2 border-red-600 hover:bg-red-600 hover:text-white duration-300 px-3 py-1 rounded-full"
              >
                Enquire Now
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex justify-between items-start sm:items-center rounded-md shadow-lg mb-4 p-4"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      className="w-[100px] sm:w-[150px] h-[150px] object-cover rounded-lg"
                      width={100}
                      height={100}
                    />
                    <div>
                      <div>
                        <p className="font-bold text-lg sm:text-3xl">
                          {item.name}
                        </p>
                        <p className="text-xs text-green-500">In stock</p>
                        <p className="text-xs text-gray-500">
                          {item.price > 100
                            ? "Eligible for FREE shipping"
                            : "Not eligible for FREE shipping"}
                        </p>
                      </div>
                      <div className="block sm:hidden mt-2">
                        <div className="">
                          <label className="hidden sm:block text-sm mr-2">
                            Qty:
                          </label>
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="border p-1 text-sm"
                          >
                            {[...Array(10).keys()].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mt-2">
                          <p className="text-lg">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-5 ">
                    <div className="">
                      <label className="text-sm mr-2">Qty:</label>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="border p-1 text-sm"
                      >
                        {[...Array(10).keys()].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm rounded-lg"
                    >
                      <RiDeleteBin6Fill size={30} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="block sm:hidden text-red-400 text-sm rounded-lg"
                  >
                    <RiDeleteBin6Fill size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Subtotal and Proceed to Buy */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
            <div className="border p-4 rounded-lg shadow-lg bg-white sticky top-10">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-full h-4 bg-green-600 rounded-full"></div>
                  <p className="">₹100</p>
                </div>
                <p className="text-sm">
                  Your order is eligible for FREE Delivery.
                </p>
                <p className="text-sm text-green-600">
                  Choose FREE Delivery option at checkout.
                </p>
              </div>
              <div className="flex justify-between mb-4 border-b pb-4">
                <p className="text-lg font-base">
                  Subtotal ({cartItems.length} items):
                </p>
                <p className="font-semibold">₹{totalPrice.toFixed(2)}</p>
              </div>
              <Link href={"/checkout"}>
                <button className="w-full bg-black text-white py-2 rounded-lg text-lg">
                  Proceed to Buy
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        actionLabel="Submit"
        disabled={false}
      />
    </div>
  );
}
