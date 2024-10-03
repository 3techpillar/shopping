import React from "react";
import Link from "next/link";
import Image from "next/image";
import { facebook } from "@/data/assets";

const Facebook = ({size}) => {
    return (
        <Link
            href={
                "https://www.facebook.com/profile.php?id=61563291367273&mibextid=ZbWKwL"
            }
            target="_blank"
        >
            <Image
                src={facebook}
                alt="payment"
                width={size}
                height={size}
                className="cursor-pointer"
            />
        </Link>
    );
};

export default React.memo(Facebook);
