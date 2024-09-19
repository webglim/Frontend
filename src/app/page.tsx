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
import Script from "next/script";

export default function Home() {
  const aboutUsRef = useRef(null);
  const footerRef = useRef(null);
  const announceRef = useRef(null);
  const [shouldAboutUs, setShouldAboutUs] = useState(false);
  const [shouldFooter, setShouldFooter] = useState(false);
  const [shouldAnnounce, setShouldAnnounce] = useState(false);
  const scrollToAboutUs = () => {
    setShouldAboutUs(true);
  };
  const scrollToFooter = () => {
    setShouldFooter(true);
  };
  const scrollToAnnounce = () => {
    setShouldAnnounce(true);
  };

  const handleScrollComplete = () => {
    setShouldAboutUs(false);
    setShouldFooter(false); // Reset the state after scrolling
    setShouldAnnounce(false); // Reset the state after scrolling
  };

  return (
    <div className={"overflow-x-hidden"}>
      <Script id="smartsupp-chat" strategy="afterInteractive">
        {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = 'd7037c63f6af6904a18172dd705d30ab8273b3ce';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
      </Script>
      <Navbar
        scrollToAnnounce={scrollToAnnounce}
        scrollToAboutUs={scrollToAboutUs}
        scrollToFooter={scrollToFooter}
      />
      <Hero />
      <About
        onScrollComplete={handleScrollComplete}
        aboutUsRef={aboutUsRef}
        shouldAboutUs={shouldAboutUs}
      />
      <Service />
      <Announcement
        shouldAnnounce={shouldAnnounce}
        announceRef={announceRef}
        onScrollComplete={handleScrollComplete}
      />
      <Footer
        shouldFooter={shouldFooter}
        footerRef={footerRef}
        onScrollComplete={handleScrollComplete}
      />
      {/* <Link href="/support">
        <div className="  fixed bottom-8 right-8" style={{ zIndex: 1000 }}>
          <Image src={chatbot} alt="" />
        </div>
      </Link> */}
    </div>
  );
}
