import React from "react";
import wallet from "../../public/images/wallet.svg";
import crypto from "../../public/images/crypto.svg";
import plans from "../../public/images/plans.svg";
import fund from "../../public/images/fund.svg";
import withdraw from "../../public/images/withdraw.svg";
import security from "../../public/images/security.svg";
import support from "../../public/images/support.svg";
import Image from "next/image";
import laptop from "../../public/images/lappy.png";

const data: { header: string; icon: string; body: string }[] = [
  {
    header: "Secure Crypto Wallet",
    icon: wallet,
    body: "Safeguard your digital assets in our state-of-the-art cryptocurrency wallet.",
  },
  {
    header: "Diverse Cryptocurrency Selection",
    icon: crypto,
    body: "Safeguard your digital assets in our state-of-the-art cryptocurrency wallet.",
  },
  {
    header: "Tailored Investment Plans",
    icon: plans,
    body: "Safeguard your digital assets in our state-of-the-art cryptocurrency wallet.",
  },
  {
    header: "Seamless Fund Management",
    icon: fund,
    body: "Effortlessly add and transfer funds within your account.",
  },
  {
    header: "Efficient Money Withdrawal",
    icon: withdraw,
    body: "Safeguard your digital assets in our state-of-the-art cryptocurrency wallet.",
  },
  {
    header: "Robust Security Measures",
    icon: security,
    body: "Safeguard your digital assets in our state-of-the-art cryptocurrency wallet.",
  },
  {
    header: "Responsive Support",
    icon: support,
    body: "Safeguard your digital assets in our state-of-the-art cryptocurrency wallet.",
  },
];
const About = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center px-[4%] py-4 bg-white">
      <div className="md:w-1/2 w-full bg-bgTwo bg-no-repeat bg-cover  bg-center">
        <Image alt="" src={laptop} />
      </div>
      <div className="md:w-1/2 w-full flex flex-col md:gap-[59px] gap-[20px]">
        <div className="flex flex-col gap-[8px]">
          <p className="font-[500] text-[20px] leading-[25.2px]">About us</p>
          <p className="font-[700] md:text-[24px] text-[16px] md:leading-[32px]">
            <span className="text-[#E8A000]">Our platform</span> offers a range
            of exceptional features to elevate your cryptocurrency investment
            journey.
          </p>
        </div>
        <div className="p-[10px] flex flex-col md:gap-[64px] gap-[24px]">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-[8px]">
              <div className="flex flex-row gap-[8px] items-center">
                <Image
                  src={item.icon}
                  alt=""
                  className="md:w-[32px] w-[24px] h-[24px] md:h-[32px]"
                />
                <p className="text-[#001404B2] md:text-[20px] text-[16px] font-[700] leading-[32px]">
                  {item.header}
                </p>
              </div>
              <p className="text-[#001404B2] md:text-[16px] text-[12px] font-[500] leading-[20.16px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
