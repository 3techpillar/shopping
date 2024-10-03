import React from "react";
import { camphor, camphorDesc, video } from "@/data/assets";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SponseredSection from "./SponseredSection";

const Spritual = () => {
  const spiritualCategory = products.filter(
    (product) => product.category === "Spiritual items"
  );

  const featuredProduct = spiritualCategory[0];

  return (
    <div id="spritiual">
      <div className="relative h-[20vh] md:h-[70vh] overflow-hidden mx-1 rounded-lg">
        <video
          className="w-full h-full object-cover object-bottom"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-5 md:p-10 z-10">
          <h1 className="text-white text-lg text-center md:text-5xl font-bold">
            Explore Spritiual Products
          </h1>
          <p className="text-white text-xs md:text-xl max-w-6xl text-center mt-2">
            explore the wide range of spritiual products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-3 sm:my-7 px-3 sm:px-0 py-5">
        <h1 className="lg:text-3xl md:text-2xl text-lg lg:my-5 my-1 font-bold">
          Spritiual Products
        </h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none">
          {spiritualCategory.map((category) => (
            <div key={category.id}>
              <ProductCard product={category} />
            </div>
          ))}
        </div>

        <div className=" my-1 md:my-8 w-full md:py-5">
          <SponseredSection video={camphor} product={featuredProduct} />
        </div>
      </div>
    </div>
  );
};

export default Spritual;
