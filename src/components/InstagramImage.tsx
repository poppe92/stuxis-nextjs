import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export type InstagramImageType = {
  socialImage: string;
};

function InstagramImage({ socialImage }: InstagramImageType) {
  return (
    <div className="relative">
      <Image
        src={socialImage}
        height={800}
        width={1240}
        alt="/"
        className="w-full h-full"
      />
      {/* Overlay */}
      <div className="flex justify-center h-full w-full absolute items-center top-0 bottom-0 right-0 left-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} className="z-10" />
        </p>
      </div>
    </div>
  );
}

export default InstagramImage;
