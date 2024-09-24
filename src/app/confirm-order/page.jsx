import { confirm } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[90vh] bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Thank You</h1>
      <Image
        src={confirm}
        alt="confirm-order"
        className=" mix-blend-multiply"
        width={250}
        height={250}
      />
      <p className="text-lg">Your order is confirmed</p>
      <Link href={"/"}>
        <button className="bg-black px-4 py-2 rounded-xl text-white mt-4">
          Continue shopping
        </button>
      </Link>
    </div>
  );
};

export default page;
