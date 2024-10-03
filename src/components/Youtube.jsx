import React from "react";
import Link from "next/link";
import Image from "next/image";
import { youtube } from "@/data/assets";

const Youtube = ({size}) => {
    return (
        <Link
            href={
                "https://www.youtube.com/@avon_trading_chotiwalekapoor"
            }
            target="_blank"
        >
            <Image
                src={youtube}
                alt="payment"
                width={size}
                height={size}
                className="cursor-pointer"
            />
        </Link>
    );
};

export default React.memo(Youtube);
