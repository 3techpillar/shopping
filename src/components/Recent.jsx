import React from "react";
import Link from "next/link";
import Image from "next/image";

const Recent = ({ product }) => {
  return (
    <div class="relative max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="w-full h-28 sm:h-56 relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default Recent;
