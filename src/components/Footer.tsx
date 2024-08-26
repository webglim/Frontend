import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col   py-4 bg-[#1D1D1D]">
      <div className="px-[4%] mt-[34px] justify-between flex md:flex-row flex-col">
        <div className="flex flex-col gap-[16px] md:w-[50%] w-full">
          <Image src={logo} alt="" className="w-[114px] h-[59.26px]" />
          <p className="font-[300] text-[16px] leading-[20.16px] text-[#FFFFFFCC]">
            Join Web Gold Limited today to embark on a secure, user-friendly,
            and comprehensive cryptocurrency investment journey. Experience the
            future of digital asset management with it.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[51px] gap-[24px] md:w-[50%] w-full md:justify-end">
          <div className="flex flex-col gap-[24px]  mt-4 md:mt-0">
            <p className="font-[600] text-white text-[18px] leading-[24.51px]">
              Quick links
            </p>
            <p className="font-[600] text-white text-[18px] leading-[24.51px]">
              About us
            </p>
            <p className="font-[600] text-white text-[18px] leading-[24.51px]">
              Support
            </p>
          </div>
          <div className="flex flex-col gap-[22px]">
            <p className="font-[600] text-[18px] leading-[24.51px] text-white">
              Contact
            </p>
            <div className="flex flex-row gap-[24px] items-center justify-between">
              <div className="w-1/2">
                <p className="leading-[19.07px] font-[400] text-[14px] text-[#FFFFFF]">
                  {" "}
                  Tel: 630-400-4310
                </p>
                <p className="leading-[19.07px] font-[400] text-[14px] text-[#FFFFFF]">
                  {" "}
                  Tel: 630-400-4310
                </p>
              </div>
              <div className="w-1/2">
                <p className="leading-[19.07px] font-[400] text-[14px] text-[#FFFFFF]">
                  Address:
                </p>
                <p className="leading-[19.07px] font-[400] text-[14px] text-[#FFFFFF]">
                  Lapinlahdenkatu 1 B. 00180 Helsinki Finland
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
