import React from "react";
import { kapore } from "@/data/assets";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SponseredSection from "./SponseredSection";

const Phones = () => {
  const carFreshner = products.filter((product) => product.bestSeller === true);
  console.log(carFreshner);

  const featuredProduct = carFreshner[0];

  return (
    <div id="best-seller">
      <div className="max-w-7xl mx-auto my-7 px-3 sm:px-0">
        <h1 className="lg:text-4xl md:text-3xl text-2xl lg:my-5 my-2 font-bold">
          Best Seller
        </h1>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-x-visible flex md:flex-none mt-4">
          {carFreshner.map((category) => (
            <div key={category.id}>
              <ProductCard product={category} />
            </div>
          ))}
        </div>

        <div className="my-8 w-full">
          <SponseredSection video={kapore} product={featuredProduct} />
        </div>
      </div>
    </div>
  );
};

export default Phones;
