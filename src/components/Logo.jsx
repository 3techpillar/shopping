import { logo } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="viera"
        className="w-[100px] sm:w-[150px] mix-blend-multiply"
        width={100}
        height={150}
      />
    </Link>
  );
};

export default Logo;
