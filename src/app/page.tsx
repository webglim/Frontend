"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";

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
    <div>
      <Navbar scrollToAboutUs={scrollToAboutUs} />
      <Hero />
      <About
        onScrollComplete={handleScrollComplete}
        aboutUsRef={aboutUsRef}
        shouldAboutUs={shouldAboutUs}
      />
      <Service />
      <Announcement />
      <Footer />
    </div>
  );
}
