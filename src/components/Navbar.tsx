"use client";
import React, { useEffect } from "react";
import NavigationItem from "./NavigationItem";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [viewState, setViewState] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleViewState = () => {
    setViewState(!viewState);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="flex items-center p-4 justify-between max-w[1240px]">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Stuxis
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <NavigationItem link="/" text="Home" textColor={textColor} />
          <NavigationItem
            link="/aboutUs"
            text="About Us"
            textColor={textColor}
          />
          <NavigationItem
            link="/#gallery"
            text="Gallery"
            textColor={textColor}
          />
          <NavigationItem link="/work" text="Work" textColor={textColor} />
          <NavigationItem
            link="/contactUs"
            text="Contact Us"
            textColor={textColor}
          />
        </ul>

        {/*Mobile Button */}
        <button onClick={handleViewState} className="block sm:hidden z-10">
          {viewState ? (
            <AiOutlineClose size={20} style={{ color: `${"white"}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </button>
        {/* Mobile Menu */}
        <div
          className={
            viewState
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }>
          <ul>
            <NavigationItem
              onClick={handleViewState}
              link="/"
              text="Home"
              textColor={"white"}
            />
            <NavigationItem
              onClick={handleViewState}
              link="/aboutUs"
              text="About Us"
              textColor={"white"}
            />
            <NavigationItem
              onClick={handleViewState}
              link="/#gallery"
              text="Gallery"
              textColor={"white"}
            />
            <NavigationItem
              onClick={handleViewState}
              link="/work"
              text="Work"
              textColor={"white"}
            />
            <NavigationItem
              onClick={handleViewState}
              link="/contactUs"
              text="Contact Us"
              textColor={"white"}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
