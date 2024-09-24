import React from "react";
import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="container mx-auto py-3">
      <h1 className="lg:text-4xl md:text-3xl text-2xl my-2 font-bold">
        Categories
      </h1>
      <div className="flex justify-center overflow-x-auto space-x-4">
        {categories.map((category) => (
          <Link key={category.id} href={"/products"}>
            <div className="flex items-center justify-center flex-col w-[100px] sm:w-[200px] h-[100px]">
              <Image
                src={category.image}
                alt={category.title}
                width={50}
                height={50}
              />

              <p className="text-sm sm:text-base text-center">
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
