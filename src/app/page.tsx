import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import InstagramImage from "@/components/InstagramImage";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div>
      <main>
        <Hero
          heading="Öppna Förskolan"
          message="Rolig lekpark med samarbete hos närliggande öppna förskolor!"
        />

        <Slider slides={SliderData} />

        <Instagram />

        <Footer />
      </main>
    </div>
  );
}
