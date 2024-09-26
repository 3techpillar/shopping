import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

const SponseredSection = ({ video, product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="hidden sm:flex items-center gap-1 flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Video Section - 40% */}
        <div className="w-full md:w-4/10 h-[40vh] md:h-[60vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="w-full flex items-center justify-center md:w-1/10 p-2 h-[40vh] md:h-[60vh] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            className=" h-full object-cover"
            width={400}
            height={500}
          />
        </div>

        {/* Product Details Section - 30% */}
        <div className="w-full md:w-5/10 p-4 md:p-2">
          <p className="text-gray-500 font-base text-xs flex items-center gap-1">
            Sponsored <BsInfoCircleFill />
          </p>
          <h2 className="text-xl md:text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2 hidden sm:block">
            {product.description}
          </p>
          <div className="mt-4">
            <p className="px-4 py-2 bg-red-500 w-fit text-sm text-white rounded-lg mb-2">
              Limited time deal
            </p>
            <span className="text-2xl font-bold text-red-600">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm line-through text-gray-500 ml-2">
                ₹{product.originalPrice}
              </span>
            )}
            <p className="text-gray-500 text-xs mt-2 ">
              Flat upto 15% off Credit cards
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SponseredSection;
