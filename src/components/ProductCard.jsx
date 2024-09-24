"use client";
import { CartContext } from "@/context/CartContext";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaWpforms } from "react-icons/fa6";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const items = products.find((p) => p.id === parseInt(product.id));

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const trimDescription = (description, num) => {
    const words = description.split(" ");
    if (words.length > num) {
      return words.slice(0, num).join(" ") + "...";
    }
    return description;
  };
  return (
    <div class="relative w-[150px] sm:w-[200px] md:w-[300px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group">
      <Link href={`/products/${product.id}`}>
        <div class="absolute z-10 top-2 left-2 bg-purple-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
          {discountPercentage}% off
        </div>

        <div className="w-full h-28 sm:h-56 relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className=" group-hover:scale-110 duration-300"
          />
        </div>

        <div class="p-4">
          <h3 class="text-gray-800 font-semibold text-xs sm:text-lg line-clamp-1">
            {product.name}
          </h3>
          <p class="text-gray-600 mt-2 hidden sm:block">
            {trimDescription(product.description, 7)}
          </p>

          <div class="mt-2 flex justify-between items-center">
            <div>
              {/* <p className="text-gray-500 text-sm">Price</p> */}
              <div className="flex flex-row gap-1">
                <span className="text-sm sm:text-base font-semibold">
                  ₹{product.price}
                </span>
                <span>-</span>
                <span className="text-sm sm:text-base font-semibold">
                  ₹{product.originalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Move the button outside the link */}
      <button
        onClick={() => addToCart(items)}
        className="hidden sm:block absolute bottom-4 right-4 bg-black/80 text-white text-sm font-semibold p-2 rounded-lg hover:bg-black"
      >
        <FaWpforms size={24} />
      </button>
    </div>
  );
}
