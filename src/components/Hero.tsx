"use client";
import React, { useEffect } from "react";
import Photo from "../../public/images/image.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-heroBg  bg-center bg-no-repeat bg-contain h-[90vh] bg-[#FAFAFA] px-[4%] flex md:flex-row flex-col items-center">
      <div data-aos="fade-right" className="md:w-1/2 w-full flex  items-center">
        <div className="flex flex-col md:gap-[26px] gap-[14px]">
          <div className="flex flex-col gap-[8px] text-black">
            <p className="md:text-[48px] text-[24px] font-[700] md:leading-[64px] leading-[32px] mt-8 md:mt-0">
              Grow Your Wealth with Cryptocurrency, Invest in the Future.
            </p>
            <p className="md:text-[20px] text-[16px] font-[400] md:leading-[25.2px]">
              Experience seamless crypto trading. Our platform offers advanced
              tools, and dedicated support to help you succeed.
            </p>
          </div>
          <div>
            <Link href="/dashboard">
              <button className="rounded-[8px] py-[16px] px-[25px] bg-gradient-to-b from-[#F3C53D] via-[#F8AA02] to-[#B88D0F] text-white">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-end" data-aos="fade-left">
        <Image
          alt=""
          src={Photo}
          className="md:w-[578.2px] md:h-[581.99px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
