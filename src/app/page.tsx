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
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function Home() {
  const aboutUsRef = useRef(null);
  const [shouldAboutUs, setShouldAboutUs] = useState(false);
  const tawkMessengerRef = useRef<any>();
  const scrollToAboutUs = () => {
    setShouldAboutUs(true);
  };

  const handleScrollComplete = () => {
    setShouldAboutUs(false); // Reset the state after scrolling
  };
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  return (
    <div className={"overflow-x-hidden"}>
      {/* <TawkMessengerReact
        propertyId="66e9d06c4cbc4814f7d996b7"
        widgetId="default"
        useRef={tawkMessengerRef}
      /> */}
      <Navbar scrollToAboutUs={scrollToAboutUs} />
      <Hero />
      <About
        onScrollComplete={handleScrollComplete}
        aboutUsRef={aboutUsRef}
        shouldAboutUs={shouldAboutUs}
      />
      <Service />
      <Announcement />
      <Footer scrollToAboutUs={scrollToAboutUs} />
      {/* <Link href="/support">
        <div className="  fixed bottom-8 right-8" style={{ zIndex: 1000 }}>
          <Image src={chatbot} alt="" />
        </div>
      </Link> */}
    </div>
  );
}
