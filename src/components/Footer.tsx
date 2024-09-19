import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../../public/images/logo.svg";
import { BsFillEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = ({ shouldFooter, onScrollComplete, footerRef }: any) => {
  useEffect(() => {
    if (shouldFooter && footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      onScrollComplete();
    }
  }, [shouldFooter, footerRef, onScrollComplete]);
  return (
    <div className="flex flex-col   py-4 bg-[#1D1D1D]" ref={footerRef}>
      <div className="px-[4%] mt-[34px] justify-between flex md:flex-row flex-col">
        <div className="flex flex-col gap-[16px] md:w-[50%] w-full">
          <Image src={logo} alt="" className="w-[114px] h-[59.26px]" />
          <p className="font-[300] text-[12px] leading-[20.16px] text-[#FFFFFFCC]">
            Join Web Gold Limited today to embark on a secure, user-friendly,
            and comprehensive cryptocurrency investment journey. Experience the
            future of digital asset management with it.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[51px] gap-[24px] md:w-[50%] w-full md:justify-end">
          <div className="flex flex-col md:gap-[24px]  mt-4 md:mt-0">
            <p className="font-[600] text-white text-[8px] leading-[24.51px]">
              Quick links
            </p>
            <p className="font-[600] text-white text-[8px] leading-[24.51px] hover:cursor-pointer">
              About us
            </p>
            <p className="font-[600] text-white text-[8px] leading-[24.51px]">
              Support
            </p>
          </div>
          <div className="flex flex-col gap-[22px]">
            <p className="font-[600] text-[8px] leading-[24.51px] text-white">
              Contact
            </p>
            <div className="flex flex-row gap-[24px] items-center justify-between">
              <div className="w-1/2">
                <p className="leading-[19.07px] font-[400] text-[10px] text-[#FFFFFF]">
                  {" "}
                  Email: Webgoldlimited.co@gmail.com
                </p>
              </div>
              <div className="w-1/2">
                <p className="leading-[19.07px] font-[400] text-[10px] text-[#FFFFFF]">
                  Address:
                </p>
                <p className="leading-[19.07px] font-[400] text-[10px] text-[#FFFFFF]">
                  Lapinlahdenkatu 1 B. 00180 Helsinki Finland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white text-[10px]">
        <div className="flex flex-row  justify-end border-white border-b-[1px] py-[18px] px-[4%]">
          <div className=" flex flex-row items-center gap-[10px]">
            <div className="flex flex-row gap-[8px] items-center">
              <p>Whatsapp</p>
              <a href="https://wa.me/+358417228584">
                <RiWhatsappFill className="text-3xl" />
              </a>
            </div>
            <div className="flex flex-row gap-[8px] items-center">
              <p>webgoldlimited.co@gmail.com</p>
              <BsFillEnvelopeFill />
            </div>
          </div>
        </div>
        <div className="py-[18px] px-[4%] flex flex-row justify-between">
          <p>Copyright 2024 Web Gold Limited All Rights Reserved.</p>
          <div className="flex flex-row items-center gap-4">
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
