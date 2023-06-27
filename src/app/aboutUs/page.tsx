"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Hero message="This is what is about us" heading="About Stuxis" />
      <h1 className="text-center flex text-3xl bold underline text-green-400 pt-20 bg-red-400">
        This is the ABOUT US PAGE WOOOOP WOOOPPP
      </h1>
      <p className="text-center py-5">
        Press{" "}
        <Link className="text-green-800 underline bold " href="/">
          here
        </Link>{" "}
        to return to home page
      </p>
    </>
  );
}
