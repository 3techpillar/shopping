import React from "react";
import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0 sm:py-5">
      <h1 className="lg:text-3xl md:text-2xl text-lg hidden sm:block mt-2 sm:mt-4 font-bold">
        Categories
      </h1>
      <div className="flex justify-left overflow-x-auto space-x-4 py-2">
        {categories.map((category) => (
          <Link key={category.id} href={"/products"}>
            <div className="flex items-center justify-center flex-col w-[100px] sm:w-[200px] h-[100px]">
              <Image
                src={category.image}
                alt={category.title}
                width={50}
                height={50}
              />

              <p className="text-xs sm:text-base text-center">
                {category.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
