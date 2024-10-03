"use client";
import React, { } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import Facebook from "./Facebook";
import Youtube from "./Youtube";
import Instagram from "./Instagram";

const SocialBar = () => {

    return (
        <>
            <header className="border-b flex items-center bg-gray-500 justify-between gap-5 sticky top-0 z-50">
                <div className="flex items-center px-4 py-1 lg:py-3 gap-2 bg-gray-500 justify-start text-sm w-1/2 lg:w-3/4">
                    <h3 className="font-bold text-white hidden lg:block">
                        Follow Us:
                    </h3>
                    <Facebook size={25} />
                    <Youtube size={25} />
                    <Instagram size={25} />
                </div>
                <div className="flex items-center px-4 py-1 lg:py-3 gap-2 bg-red-500 justify-end text-sm w-1/2 lg:w-1/4">
                    <BsTelephoneFill size={25} color="white" />
                    <p className="text-1xl text-white">
                    {/* <li className="mb-2 text-white-400 hover:text-white-200 cursor-pointer"> */}
                        {/* <i className="fas fa-phone-alt"></i> */}
                        <a href="tel:9161 293 334"> Call Us: (+91) 9161 293 334 </a>
                        
                    {/* </li> */}
                    </p>
                </div>
            </header >
        </>
    );
};

export default React.memo(SocialBar);
