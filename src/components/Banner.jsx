import Image from "next/image";
import React from "react";

const Banner = ({ src }) => {
  return (
    <div className="block sm:hidden relative h-[20vh] md:h-[70vh] overflow-hidden mx-1 rounded-lg my-6">
      <Image src={src} alt="banner" fill />
      <div className="absolute inset-0 flex flex-col justify-center items-center md:p-10 z-10">
        {/* <h1 className="text-white text-lg text-center md:text-5xl font-bold">
          Explore Spritiual Products
        </h1>
        <p className="text-white text-xs md:text-xl max-w-6xl text-center mt-2">
          explore the wide range of spritiual products
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
