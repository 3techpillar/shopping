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
      <div className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">
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
          <h1 className="text-white text-2xl text-center md:text-5xl font-bold">
            Explore Spritiual Products
          </h1>
          <p className="text-white text-base md:text-xl max-w-6xl text-center mt-2">
            explore the wide range of spritiual products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-7 px-3 sm:px-0">
        <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-2 font-bold">
          Spritiual Products
        </h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none">
          {spiritualCategory.map((category) => (
            <div key={category.id}>
              <ProductCard product={category} />
            </div>
          ))}
        </div>

        <div className="my-8 w-full">
          <SponseredSection video={camphor} product={featuredProduct} />
        </div>
      </div>
    </div>
  );
};

export default Spritual;
