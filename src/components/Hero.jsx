"use client";
import React, { useEffect, useState } from "react";
import { slides } from "@/data/products";


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autScroll = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(autScroll);
  }, [currentIndex]);

  return (
      <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img key={index} src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto flex-shrink-0" />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
      >
        &gt;
      </button>
    </div>
    );
};

export default Hero;
