import React from "react";
import Link from "next/link";
import Image from "next/image";
import { instagram } from "@/data/assets";

const Instagram = ({size}) => {
    return (
        <Link
            href={
                "https://www.instagram.com/chotiwalepurecamphor?igsh=bW84MWY4ZTBweGJp"
            }
            target="_blank"
        >
            <Image
                src={instagram}
                alt="payment"
                width={size}
                height={size}
                className="cursor-pointer"
            />
        </Link>
    );
};

export default React.memo(Instagram);
