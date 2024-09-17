import Image from "next/image";
import React from "react";
import photo from "../../public/images/Rectangle 116.png";
import photo2 from "../../public/images/Rectangle 116-2.png";

const Announcement = () => {
  return (
    <div className="flex flex-col gap-[32px] px-[4%] py-4 bg-white">
      <div className="flex flex-col gap-[7px] px-[16px]">
        <p className="text-[#001404B2] font-[500] text-[20px] leading-[25.2px]">
          Announcement
        </p>
        <p className="font-[700] md:text-[32px] text-[20px] md:leading-[43.58px] text-[#E8A000]">
          <span className="text-[#001404B2]">Our </span>Latest Announcement
        </p>
      </div>
      <div className="gap-[27.48px] flex md:flex-row flex-col p-[7.63px]">
        <div className="flex flex-col md:w-1/3 w-full gap-[20.19px]">
          <Image alt="" src={photo} className="w-full" />
          <div className="flex flex-col gap-[10.1px]">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] text-[14.25px] leading-[19.01px]">
                Cryptocurrency Prices on August 22: Bitcoin rises above $60,700
                on US rate-cut bets; Ethereum gains
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] text-[9.5px] leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FBAD00] py-[8.32px] px-[26.73px] rounded-[3.56px] text-white font-[700] text-[16px] leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 w-full gap-[20.19px]">
          <Image alt="" src={photo2} className="w-full" />
          <div className="flex flex-col gap-[10.1px]">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] text-[14.25px] leading-[19.01px]">
                Analysts estimate that the global cryptocurrency market will
                more than triple by 2030
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] text-[9.5px] leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FBAD00] py-[8.32px] px-[26.73px] rounded-[3.56px] text-white font-[700] text-[16px] leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 w-full gap-[20.19px]">
          <Image alt="" src={photo2} className="w-full" />
          <div className="flex flex-col gap-[10.1px]">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] text-[14.25px] leading-[19.01px]">
                Bitcoin's value has rallied over the last few quarters,
                increasing from about US$26,000 in mid-September 2023
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] text-[9.5px] leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FBAD00] py-[8.32px] px-[26.73px] rounded-[3.56px] text-white font-[700] text-[16px] leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
