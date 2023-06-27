import React from "react";
import Image from "next/image";
import InstagramImage from "./InstagramImage";

function Instagram() {
  return (
    <div className="max-width-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Capture</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImage socialImage="/ig-img-1.jpeg" />
        <InstagramImage socialImage="/ig-img-2.jpeg" />
        <InstagramImage socialImage="/ig-img-3.jpeg" />
        <InstagramImage socialImage="/ig-img-4.jpeg" />
        <InstagramImage socialImage="/ig-img-5.jpeg" />
        <InstagramImage socialImage="/ig-img-6.jpeg" />
      </div>
      {/* <Image src="/ig-img-1.jpeg" width={1240} height={700} alt="/" /> */}
    </div>
  );
}

export default Instagram;
