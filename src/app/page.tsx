"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import { LayoutProvider } from "@/components/context";
import chatbot from "../../public/images/chatbot.svg";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const aboutUsRef = useRef(null);
  const [shouldAboutUs, setShouldAboutUs] = useState(false);

  const scrollToAboutUs = () => {
    setShouldAboutUs(true);
  };

  const handleScrollComplete = () => {
    setShouldAboutUs(false); // Reset the state after scrolling
  };
  return (
    <div className={"overflow-x-hidden"}>
      <Navbar scrollToAboutUs={scrollToAboutUs} />
      <Hero />
      <About
        onScrollComplete={handleScrollComplete}
        aboutUsRef={aboutUsRef}
        shouldAboutUs={shouldAboutUs}
      />
      <Service />
      {/* <Announcement /> */}
      <Footer />
      <Link href="/support">
        <div className="  fixed bottom-8 right-8" style={{ zIndex: 1000 }}>
          <Image src={chatbot} alt="" />
        </div>
      </Link>
    </div>
  );
}
