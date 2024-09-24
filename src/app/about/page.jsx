import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div
        className="h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white">
            Discover Our Vision, Approach, and Process
          </p>
        </div> */}
      </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At [Your Ecommerce Store], our vision is to create a seamless
              shopping experience that connects people with the products they
              love. We believe in making quality products accessible to
              everyone, anywhere, anytime. Our goal is to become a global leader
              in online retail by consistently providing outstanding service,
              unbeatable prices, and an exceptional user experience.
            </p>
            <p className="text-gray-700">
              We are committed to innovation and excellence, continuously
              enhancing our platform to meet the evolving needs of our
              customers.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/vision.webp"
              alt="Vision"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Approach Section */}
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-1/2 md:order-2 md:pl-6 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              Our approach is customer-centric. We focus on understanding our
              customers needs and preferences to offer a curated selection of
              products that cater to diverse tastes and budgets. We prioritize
              quality, reliability, and value in every product we sell.
            </p>
            <p className="text-gray-700">
              Through data-driven insights, we continually optimize our
              inventory and services to provide a personalized shopping
              experience. We believe in transparent communication, ensuring that
              our customers are well-informed every step of the way, from
              browsing to checkout.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/approach.jpg"
              alt="Vision"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
            />
          </div>
        </div>
        {/* our process */}
        <div className="flex flex-col md:flex-row items-center my-12">
          <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-700 mb-4">
              Our process is designed to be efficient, user-friendly, and
              secure. From the moment you land on our website, we strive to
              provide a smooth and enjoyable shopping journey. Our
              easy-to-navigate platform allows you to explore our extensive
              catalog, filter by categories, and find exactly what you are
              looking for.
            </p>
            <p className="text-gray-700 mb-4">
              We ensure that each product listed meets our strict quality
              standards. Our secure checkout process is quick and hassle-free,
              with multiple payment options to suit your convenience. After your
              purchase, we keep you updated with real-time tracking information,
              so you know exactly when your order will arrive.
            </p>
            <p className="text-gray-700">
              Our customer support team is always ready to assist you, ensuring
              that any issues are resolved promptly and effectively.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/process.avif"
              alt="Vision"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
