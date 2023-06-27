"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Metadata } from "next";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stuxis Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
