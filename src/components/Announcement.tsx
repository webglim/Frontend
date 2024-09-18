import Image from "next/image";
import React from "react";
import photo from "../../public/images/Rectangle 116.png";
import photo2 from "../../public/images/Rectangle 116-2.png";

const Announcement = () => {
  return (
    <div className="flex flex-col md:gap-[32px] gap-[8px] px-[4%] py-4 bg-white">
      <div className="flex flex-col gap-[7px] px-[16px]">
        <p className="text-[#001404B2] font-[500] md:text-[20px] text-[12px] leading-[25.2px]">
          Announcement
        </p>
        <p className="font-[700] md:text-[32px] text-[12px]  md:leading-[43.58px] text-[#E8A000]">
          <span className="text-[#001404B2]">Our </span>Latest Announcement
        </p>
      </div>
      <div className="md:gap-[27.48px] gap-[10px] md:flex flex-row p-[7.63px] hidden">
        <div className="flex flex-col w-1/3  md:gap-[20.19px] gap-[10px]">
          <Image alt="" src={photo} className="w-full " />

          <div className="flex flex-col gap-[10.1px] ">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] md:text-[14.25px] text-[8px] md:leading-[19.01px]">
                Cryptocurrency Prices on August 22: Bitcoin rises above $60,700
                on US rate-cut bets; Ethereum gains
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] md:text-[9.5px] text-[5px] md:leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#FBAD00] md:py-[8.32px] py-[4px] md:px-[26.73px] px-[10px] rounded-[3.56px] text-white font-[700] md:text-[16px] text-[8px] md:leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/3  md:gap-[20.19px] gap-[10px]">
          <Image alt="" src={photo2} className="w-full" />

          <div className="flex flex-col gap-[10.1px] ">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] md:text-[14.25px] text-[8px] md:leading-[19.01px]">
                Analysts estimate that the global cryptocurrency market will
                more than triple by 2030
              </p>
              <p className="font-[400] text-[8.32px] md:leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] md:text-[9.5px] text-[5px] md:leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#FBAD00] md:py-[8.32px] py-[4px] md:px-[26.73px] px-[10px] rounded-[3.56px] text-white font-[700] md:text-[16px] text-[8px] md:leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/3  md:gap-[20.19px] gap-[10px]">
          <Image alt="" src={photo2} className="w-full" />

          <div className="flex flex-col gap-[10.1px] ">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] md:text-[14.25px] text-[8px] md:leading-[19.01px]">
                Bitcoin's value has rallied over the last few quarters,
                increasing from about US$26,000 in mid-September 2023
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] md:text-[9.5px] text-[5px] md:leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#FBAD00] md:py-[8.32px] py-[4px]  md:px-[26.73px] px-[10px] rounded-[3.56px] text-white font-[700] md:text-[16px] text-[8px] md:leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="md:gap-[27.48px] gap-[10px] flex flex-row p-[7.63px] md:hidden">
        <div className="flex flex-col w-1/3  md:gap-[20.19px] gap-[10px]">
          <div className="h-[30%]">
            <Image alt="" src={photo} className="w-full " />
          </div>

          <div className="flex flex-col gap-[10.1px] h-[60%]">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] md:text-[14.25px] text-[8px] md:leading-[19.01px]">
                Cryptocurrency Prices on August 22: Bitcoin rises above $60,700
                on US rate-cut bets; Ethereum gains
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] md:text-[9.5px] text-[5px] md:leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center h-[10%]">
            <button className="bg-[#FBAD00] md:py-[8.32px] py-[4px] md:px-[26.73px] px-[10px] rounded-[3.56px] text-white font-[700] md:text-[16px] text-[8px] md:leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/3  md:gap-[20.19px] gap-[10px]">
          <div className="h-[30%]">
            <Image alt="" src={photo2} className="w-full" />
          </div>

          <div className="flex flex-col gap-[10.1px] h-[60%]">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] md:text-[14.25px] text-[8px] md:leading-[19.01px]">
                Analysts estimate that the global cryptocurrency market will
                more than triple by 2030
              </p>
              <p className="font-[400] text-[8.32px] md:leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] md:text-[9.5px] text-[5px] md:leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center h-[10%]">
            <button className="bg-[#FBAD00] md:py-[8.32px] py-[4px] md:px-[26.73px] px-[10px] rounded-[3.56px] text-white font-[700] md:text-[16px] text-[8px] md:leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/3  md:gap-[20.19px] gap-[10px]">
          <div className="h-[30%]">
            <Image alt="" src={photo2} className="w-full" />
          </div>

          <div className="flex flex-col gap-[10.1px] h-[60%]">
            <div className="flex flex-col gap-[4.75px]">
              <p className="text-[#151716] font-[700] md:text-[14.25px] text-[8px] md:leading-[19.01px]">
                Bitcoin's value has rallied over the last few quarters,
                increasing from about US$26,000 in mid-September 2023
              </p>
              <p className="font-[400] text-[8.32px] leading-[10.69px] text-[#838384]">
                posted 3rd july 2023
              </p>
            </div>
            <p className="font-[400] md:text-[9.5px] text-[5px] md:leading-[11.88px] text-[#000000] text-justify">
              Together, we can forge powerful partnerships, tap into diverse
              expertise, and unlock the true potential of interconnected
              success.Together, we can forge powerful partnerships, tap into
              diverse expertise, and unlock the true potential of interconnected
              success.Together, potential of interconnected success.Together,
              potential of interconnected success.Together,{" "}
            </p>
          </div>
          <div className="flex justify-center h-[10%]">
            <button className="bg-[#FBAD00] md:py-[8.32px] py-[4px]  md:px-[26.73px] px-[10px] rounded-[3.56px] text-white font-[700] md:text-[16px] text-[8px] md:leading-[21.79px]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
