"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import cryptoWallet from "../../public/images/cryptoWallet.svg";
import investmentPotential from "../../public/images/investmentPotential.svg";
import financialGrowth from "../../public/images/financialGrowth.svg";
import fundManagement from "../../public/images/fundManagement.svg";
import profits from "../../public/images/profits.svg";
import securityMeasure from "../../public/images/securityMeasures.svg";
import photo from "../../public/images/Group 1261156856.png";
import image from "../../public/images/19466810_6134223 1.png";
import { Steps, Rate } from "antd";
import user1 from "../../public/images/image.svg";
import user2 from "../../public/images/Image-60.svg";
import user3 from "../../public/images/Image-610.svg";
import good from "../../public/images/Vector-11.svg";
import Link from "next/link";

const data: { header: string; icon: string; body: string }[] = [
  {
    header: "Secure Crypto Wallet",
    icon: cryptoWallet,
    body: "cryptocurrencies are shielded by state-of-the-art security protocols,  ensuring your digital wealth remains impenetrable. Experience the  convenience of managing and accessing your assets securely, anytime,  anywhere.",
  },
  {
    header: "Investment Potential",
    icon: investmentPotential,
    body: "Choose from a rich selection of over 20 cryptocurrencies to curate a  balanced and lucrative investment strategy. Seize the opportunity to  capitalize on the diverse dynamics of the digital currency landscape.",
  },
  {
    header: "Financial Growth",
    icon: financialGrowth,
    body: "We offer plans that align with your aspirations.  Achieve optimal growth and maximize your returns through intelligently  designed investment options.",
  },
  {
    header: "Fund Management",
    icon: fundManagement,
    body: "Add money, transfer funds, and monitor your investments with ease.  Navigate through your financial journey smoothly as you react promptly  to market opportunities.",
  },
  {
    header: "Access to Profits",
    icon: profits,
    body: "Convert your investments into real-world gains, making the most of your  financial endeavors. Enjoy the flexibility and speed you deserve",
  },
  {
    header: "Security Measures",
    icon: securityMeasure,
    body: "Our KYC verification and Google Authenticator features fortify your  account against unauthorized access. Trust in our platform to protect  your digital holdings and secure your financial future",
  },
];
const item = [
  {
    title: "Creating Your  Account:",
    description: "Simply sign up online for free and verify your identity",
  },
  {
    title: "Fund Your Account:",
    description: "Add a recipient’s details and choose which currency...",
  },
  {
    title: "Choose Your Plan:",
    description: "Send us your funds with a bank transfer and we'll notify..",
  },
  {
    title: "Monitor and Manage:",
    description: "We inform you when the money has been sent and can also ...",
  },
  {
    title: "Reap the Rewards:",
    description: "We inform you when the money has been sent and can also ...",
  },
];
const Service = () => {
  return (
    <div className="flex flex-col  md:px-[4%] px-[2%] py-4 bg-white md:gap-[32px] gap-[14px]">
      <div className="pb-4">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#001404B2] md:text-[20px] text-[14px] md:leading-[25.2px] font-[500]">
            Quickpay Provide Best Services & Secure Investment Platform
          </p>
          <p className="text-[#E8A000] md:text-[24px] text-[14px] md:leading-[32px] font-[700]">
            Service
          </p>
        </div>
        <div className="md:p-[10px] p-[5px] grid grid-cols-3  gap-y-[16px] md:gap-x-[14px] gap-x-[5px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="md:py-[14px] py-[8px] md:px-[20px] px-[10px] rounded-[8px] md:gap-[8px] gap-[4px] flex flex-col bg-[#C3DAFF]"
            >
              <div className="flex flex-col md:gap-[6.57px] gap-[2px]">
                <Image
                  src={item.icon}
                  alt=""
                  className="w-[18px] md:w-[24px]"
                />
                <p className="md:text-[19.71px] text-[8px] leading-[26.28px] font-[700] text-[#1D1D1D]">
                  {item.header}
                </p>
              </div>
              <p className="text-[#1D1D1DB2] md:leading-[20.69px] leading-[10px] md:text-[16.42px] text-[6px] font-[400]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex flex-row  md:gap-[58px] gap-[20px] items-center">
        <div className="w-1/2 flex flex-col md:gap-[32px] gap-[14px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col md:gap-[8px] gap-[2px]">
              <p className="text-[#001404B2] md:text-[20px] text-[10px] font-[500] md:leading-[25.2px]">
                Feature to Investment Plans
              </p>
              <p className="text-[#001404B2] md:text-[24px] text-[12px] font-[700] md:leading-[32px]">
                Financial Growth Through{" "}
                <span className="text-[#E8A000]">Smart Investments</span>
              </p>
            </div>
            <p className="text-[#001404B2] md:text-[20px] text-[10px]">
              Discover a range of meticulously crafted investment plans designed
              to cater to your unique financial aspirations. At Quickpay, we
              understand that every investor is different, and that’s why we
              offer a variety of plans tailored to your needs. Whether you’re a
              newcomer looking to start small, an experienced investor seeking
              substantial growth, or someone planning for retirement, our plans
              provide you with the tools, strategies, and support to achieve
              your goals. Explore our diverse investment options and embark on a
              journey towards financial success with Quickpay
            </p>
          </div>
          <div>
            <Link href="/dashboard">
              <button className="md:py-[14px] py-[8px] md:px-[24px] px-[12px] bg-[#FBAD00] rounded-[4px] text-white md:text-[16px] text-[8px] font-[600] md:leading-[20.16px]">
                Invest Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2  flex flex-col">
          <Image src={photo} alt="" />
        </div>
      </div>
      <div className="py-4 flex flex-row  gap-[28px] items-center">
        <div className="md:w-1/2 w-full">
          <Image src={image} alt="" className="md:h-[629px] md:w-[629px]" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:gap-[32px] gap-[10px]">
          <div className="px-[16px] flex flex-col gap-[7px]">
            <p className="md:text-[20px] text-[10px] font-[500] md:eading-[25.2px] text-[#001404B2]">
              How It Works
            </p>
            <p className="md:text-[32px] text-[10px] font-[700] md:leading-[43.58px] leading-[28px] text-[#001404B2] ">
              Transform Your{" "}
              <span className="text-[#E8A000]">Holdings into Profits</span>
            </p>
            <p className="font-[500] md:text-[16px] text-[8px] md:leading-[20.16px] text-[#1D1D1DB2]">
              Understanding the Web Gold Limited process is simple and
              straightforward. Explore the five easy steps below to embark on
              your journey towards cryptocurrency investment success.
            </p>
          </div>
          <Steps direction="vertical" current={0} items={item} />
          <div>
            <Link href="/dashboard">
              <button className="md:py-[14px] py-[7px] md:px-[16px] px-[8px] rounded-[4px] bg-[#FBAD00] text-white font-[600] md:text-[16px] text-[8px] leading-[20.16px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col md:gap-[32px] gap-[12px">
        <div className="flex flex-col px-[16px] gap-[7px]">
          <p className="font-[500] text-[20px] md:leading-[25.2px] text-[#001404B2]">
            Testimonial
          </p>
          <p className="font-[700] md:text-[32px] text-[18px] md:leading-[43.58px] mb-2 md:mb-0 text-black">
            What People Say <span className="text-[#E8A000]">About Us</span>
          </p>
        </div>
        <div className="flex flex-row  md:p-[12.05px] md:gap-[28.93px] gap-[8px]">
          <div className="w-1/3  rounded-[18.52px] md:p-[24.69px]  p-[8px] gap-[12.35px] bg-[#C3DAFF]">
            <div className="flex flex-col gap-[6.17px]">
              <div className="flex flex-row gap-[12.88px]">
                <Image
                  src={user1}
                  alt=""
                  className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] rounded-[30px]"
                />
                <div className="flex flex-col gap-[3.68px] justify-center">
                  <p className="font-[600] md:text-[23.6px] text-[8px] md:leading-[28.77px] text-[#000000]">
                    Arttu Vatanen
                  </p>
                  <p className="text-[#000000B2] font-[500] md:text-[13.49px] text-[6px] leading-[16.44px]">
                    Retiree
                  </p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="mt-4" />
            </div>
            <p className="text-[#00000099] font-[500] md:text-[16px] text-[10px] leading-[20.16px] mt-4">
              It Pay’s!
            </p>
            <p className="text-[#00000099] font-[500] md:text-[16px] text-[5px] md:leading-[20.16px] md:mt-6">
              This is a very good company it pays consistently, real-time source
              of income, very informative and easy to use whether you are an
              authentic cryptocurrency user or not, they are best of all and I
              can’t give less than a five 5, I love you guys!!!
            </p>
          </div>
          <div className="w-1/3  rounded-[18.52px] md:p-[24.69px] p-[8px] gap-[12.35px] bg-[#C3DAFF]">
            <div className="flex flex-col gap-[6.17px]">
              <div className="flex flex-row md:gap-[12.88px]  gap-[5px]">
                <Image
                  src={user2}
                  alt=""
                  className="md:w-[60px] md:h-[60px] rounded-[30px] w-[30px] h-[30px]"
                />
                <div className="flex flex-col gap-[3.68px] justify-center">
                  <p className="font-[600] md:text-[23.6px] text-[8px] md:leading-[28.77px] text-[#000000]">
                    Tammy Jenkins
                  </p>
                  <p className="text-[#000000B2] font-[500] md:text-[13.49px] text-[6px] leading-[16.44px]">
                    small business owner
                  </p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="mt-4" />
            </div>
            <p className="text-[#00000099] font-[500] md:text-[16px] text-[10px] leading-[20.16px] mt-4">
              Awesome! I’love it!!
            </p>
            <p className="text-[#00000099] font-[500] md:text-[16px] text-[5px] md:leading-[20.16px] md:mt-6">
              This website is everything wrapped it to 1, clean interface with a
              lot of useful features, detailed price action and other info. very
              cool platform, fantastic experience their service is very prompt,
              efficient and hassle-free, transaction are completed quickly and
              securely making the whole process smooth, smart experience
              overall. Thumbs up team
            </p>
          </div>
          <div className="w-1/3  rounded-[18.52px] md:p-[24.69px]  p-[8px] gap-[12.35px] bg-[#C3DAFF]">
            <div className="flex flex-col gap-[6.17px]">
              <div className="flex flex-row md:gap-[12.88px] gap-[5px]">
                <Image
                  src={user3}
                  alt=""
                  className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] rounded-[30px]"
                />
                <div className="flex flex-col gap-[3.68px] justify-center">
                  <p className="font-[600] md:text-[23.6px] text-[8px] leading-[28.77px] text-[#000000]">
                    Mia Morton
                  </p>
                  <p className="text-[#000000B2] font-[500] md:text-[13.49px] text-[6px] leading-[16.44px]">
                    entrepremeurs
                  </p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="mt-4" />
            </div>
            <p className="text-[#00000099] font-[500] md:text-[16px] text-[10px] leading-[20.16px] mt-4">
              The Best
            </p>
            <p className="text-[#00000099] font-[500] md:text-[16px] text-[5px] md:leading-[20.16px] mt-6">
              Consistent payments and exceptional service. Whether you're a
              seasoned crypto expert or just starting out, this platform offers
              top-notch information and ease of use. My rating: 5/5!
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col md:gap-[32px] gap-[14px]">
        <div className="flex flex-col gap-[7px] px-[16px]">
          <p className="text-[#001404B2] font-[500] md:text-[20px] text-[10px] md:leading-[25.2px]">
            pricing plan
          </p>
          <p className="font-[700] md:text-[32px] text-[10px] md:leading-[43.58px]">
            <span className="text-[#E8A000]">Best Plan </span>for you
          </p>
        </div>
        <div className="flex flex-row  md:gap-[58px] gap-[8px]">
          <div className="flex flex-col w-1/3 rounded-[10px]  shadow-md bg-white px-[4px]">
            <div className="rounded-tl-[10px] rounded-tr-[10px] bg-[#FBAD00] py-[10px] px-[25px]">
              <p className="text-center font-[600] md:text-[24px] text-[12px] md:leading-[32.68px] text-white">
                Silver Plan
              </p>
            </div>
            <div className="flex flex-col gap-[24px] items-center md:mt-6 mt-2">
              <div className="flex flex-col md:gap-[32px] gap-[10px]">
                <p className="text-[#FBAD00] font-[600] md:text-[32px] text-[12px] md:leading-[43.58px]">
                  From /€1,000
                </p>
                <div className="flex flex-col md:gap-[8px] gap-[2px]">
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Duration 1 Month
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Profit Return Type Daily Basis
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Percentage per Day 19.93%
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Minimum Return €6,178.3
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Maximum Return €123,559.8
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      No limit on withdrawal
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/dashboard">
                  <button className="bg-[#FBAD00] rounded-[6px] md:py-[14px] py-[7px] md:px-[45px] px-[20px] md:mb-12 mb-2 font-[600] md:text-[20px] text-[10px] md:leading-[27.24px] text-white">
                    {" "}
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3  rounded-[10px]  shadow-md  bg-[#FFAA00] px-[4px]">
            <div className="rounded-tl-[10px] rounded-tr-[10px] bg-[#FBAD00] py-[10px] px-[25px]">
              <p className="text-center font-[600] md:text-[24px] text-[12px] md:leading-[32.68px] text-white">
                Gold Plan
              </p>
            </div>
            <div className="flex flex-col md:gap-[24px] gap-[10px] items-center md:mt-6 mt-2">
              <div className="flex flex-col md:gap-[32px] gap-[10px]">
                <p className="text-white font-[600] md:text-[32px] text-[12px] md:leading-[43.58px]">
                  From /€20,000
                </p>
                <div className="flex flex-col md:gap-[8px] gap-[2px]">
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-white font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Duration 1 Month
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-white font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Profit Return Type Daily Basis
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-white font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Percentage per Day 19.93%
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-white font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Minimum Return €6,178.3
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-white font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Maximum Return €123,559.8
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-white font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      No limit on withdrawal
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/dashboard">
                  <button className="bg-white rounded-[6px] md:py-[14px] py-[7px] md:px-[45px] px-[20px] md:mb-12 mb-2 font-[600] md:text-[20px] text-[10px] md:leading-[27.24px] text-[#FFAA00]">
                    {" "}
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 rounded-[10px]  shadow-md bg-white px-[4px]">
            <div className="rounded-tl-[10px] rounded-tr-[10px] bg-[#FBAD00] py-[10px] px-[25px]">
              <p className="text-center font-[600] md:text-[24px] text-[12px] md:leading-[32.68px] text-white">
                Platinum Plan
              </p>
            </div>
            <div className="flex flex-col md:gap-[24px] gap-[10px] items-center md:mt-6 mt-2">
              <div className="flex flex-col md:gap-[32px] gap-[10px] items-center">
                <p className="text-[#FBAD00]  font-[600] md:text-[32px] text-[12px] md:leading-[43.58px] text-center">
                  From /€50,000 -€2,000,000
                </p>
                <div className="flex flex-col md:gap-[8px] gap-[2px]">
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2] text-center  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Duration 1 Month
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Profit Return Type Daily Basis
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Percentage per Day 19.93%
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2] font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Minimum Return €6,178.3
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      Maximum Return €123,559.8
                    </p>
                  </div>
                  <div className="flex flex-row items-center md:gap-[16px] gap-[4px]">
                    <Image src={good} alt="" className="w-[10px] md:w-[24px]" />
                    <p className="text-[#000000B2]  font-[400] md:text-[15px] text-[8px] md:leading-[20.43px]">
                      No limit on withdrawal
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/dashboard">
                  <button className="bg-[#FBAD00] rounded-[6px] md:py-[14px] py-[7px] md:px-[45px] px-[20px] md:mb-12 mb-2 font-[600] md:text-[20px] text-[10px] md:leading-[27.24px] text-white">
                    {" "}
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
