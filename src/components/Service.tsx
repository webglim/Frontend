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
import user from "../../public/images/Image-60.png";
import good from "../../public/images/Vector-11.svg";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col  px-[4%] py-4 bg-white gap-[32px]">
      <div className="pb-4">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#001404B2] md:text-[20px] text-[14px] leading-[25.2px] font-[500]">
            Quickpay Provide Best Services & Secure Investment Platform
          </p>
          <p className="text-[#E8A000] md:text-[24px] text-[20px] leading-[32px] font-[700]">
            Service
          </p>
        </div>
        <div className="p-[10px] grid md:grid-cols-3 grid-cols-1 gap-y-[16px] gap-x-[14px]">
          {data.map((item, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className="py-[14px] px-[20px] rounded-[8px] gap-[8px] flex flex-col bg-[#C3DAFF]"
            >
              <div className="flex flex-col gap-[6.57px]">
                <Image src={item.icon} alt="" />
                <p className="text-[19.71px] leading-[26.28px] font-[700] text-[#1D1D1D]">
                  {item.header}
                </p>
              </div>
              <p className="text-[#1D1D1DB2] leading-[20.69px] text-[16.42px] font-[400]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex md:flex-row flex-col md:gap-[58px] gap-[20px]">
        <div
          className="md:w-1/2 w-full flex flex-col gap-[32px]"
          data-aos="fade-right"
        >
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#001404B2] text-[20px] font-[500] leading-[25.2px]">
                Feature to Investment Plans
              </p>
              <p className="text-[#001404B2] text-[24px] font-[700] leading-[32px]">
                Financial Growth Through{" "}
                <span className="text-[#E8A000]">Smart Investments</span>
              </p>
            </div>
            <p>
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
              <button className="py-[14px] px-[24px] bg-gradient-to-b from-[#DC9D14] via-[#D69402] to-[#916E06] rounded-[4px] text-white text-[16px] font-[600] leading-[20.16px]">
                Invest Now
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col" data-aos="fade-left">
          <Image src={photo} alt="" />
        </div>
      </div>
      <div className="py-4 flex md:flex-row flex-col-reverse gap-[28px] items-center">
        <div className="md:w-1/2 w-full" data-aos="fade-right">
          <Image src={image} alt="" className="md:h-[629px] md:w-[629px]" />
        </div>
        <div
          className="md:w-1/2 w-full flex flex-col gap-[32px]"
          data-aos="fade-left"
        >
          <div className="px-[16px] flex flex-col gap-[7px]">
            <p className="text-[20px] font-[500] leading-[25.2px] text-[#001404B2]">
              How It Works
            </p>
            <p className="md:text-[32px] text-[20px] font-[700] md:leading-[43.58px] leading-[28px] text-[#001404B2] ">
              Transform Your{" "}
              <span className="text-[#E8A000]">Holdings into Profits</span>
            </p>
            <p className="font-[500] text-[16px] leading-[20.16px] text-[#1D1D1DB2]">
              Understanding the Web Gold Limited process is simple and
              straightforward. Explore the five easy steps below to embark on
              your journey towards cryptocurrency investment success.
            </p>
          </div>
          <Steps direction="vertical" current={0} items={item} />
          <div>
            <Link href="/dashboard">
              <button className="py-[14px] px-[16px] rounded-[4px] bg-gradient-to-b from-[#DC9D14] via-[#D69402] to-[#916E06] text-white font-[600] text-[16px] leading-[20.16px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-[32px]">
        <div className="flex flex-col px-[16px] gap-[7px]">
          <p className="font-[500] text-[20px] md:leading-[25.2px] text-[#001404B2]">
            Testimonial
          </p>
          <p className="font-[700] md:text-[32px] text-[20px] md:leading-[43.58px]">
            What People Say <span className="text-[#E8A000]">About Us</span>
          </p>
        </div>
        <div className="flex md:flex-row flex-col p-[12.05px] md:gap-[28.93px] gap-[16px]">
          <div
            className="md:w-1/3 w-full rounded-[18.52px] p-[24.69px] gap-[12.35px] bg-[#C3DAFF]"
            data-aos="zoom-in"
          >
            <div className="flex flex-col gap-[6.17px]">
              <div className="flex flex-row gap-[12.88px]">
                <Image
                  src={user}
                  alt=""
                  className="w-[60px] h-[60px] rounded-[30px]"
                />
                <div className="flex flex-col gap-[3.68px] justify-center">
                  <p className="font-[600] text-[23.6px] leading-[28.77px] text-[#000000]">
                    Arttu Vatanen
                  </p>
                  <p className="text-[#000000B2] font-[500] text-[13.49px] leading-[16.44px]">
                    Retiree
                  </p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="mt-4" />
            </div>
            <p className="text-[#00000099] font-[500] text-[16px] leading-[20.16px] mt-4">
              It Pay’s!
            </p>
            <p className="text-[#00000099] font-[500] text-[16px] leading-[20.16px] mt-6">
              This is a very good company it pays consistently, real-time source
              of income, very informative and easy to use whether you are an
              authentic cryptocurrency user or not, they are best of all and I
              can’t give less than a five 5, I love you guys!!!
            </p>
          </div>
          <div
            className="md:w-1/3 w-full rounded-[18.52px] p-[24.69px] gap-[12.35px] bg-[#C3DAFF]"
            data-aos="zoom-in"
          >
            <div className="flex flex-col gap-[6.17px]">
              <div className="flex flex-row gap-[12.88px]">
                <Image
                  src={user}
                  alt=""
                  className="w-[60px] h-[60px] rounded-[30px]"
                />
                <div className="flex flex-col gap-[3.68px] justify-center">
                  <p className="font-[600] text-[23.6px] leading-[28.77px] text-[#000000]">
                    Tammy Jenkins
                  </p>
                  <p className="text-[#000000B2] font-[500] text-[13.49px] leading-[16.44px]">
                    small business owner
                  </p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="mt-4" />
            </div>
            <p className="text-[#00000099] font-[500] text-[16px] leading-[20.16px] mt-4">
              Awesome! I’love it!!
            </p>
            <p className="text-[#00000099] font-[500] text-[16px] leading-[20.16px] mt-6">
              This website is everything wrapped it to 1, clean interface with a
              lot of useful features, detailed price action and other info. very
              cool platform, fantastic experience their service is very prompt,
              efficient and hassle-free, transaction are completed quickly and
              securely making the whole process smooth, smart experience
              overall. Thumbs up team
            </p>
          </div>
          <div
            className="md:w-1/3 w-full rounded-[18.52px] p-[24.69px] gap-[12.35px] bg-[#C3DAFF]"
            data-aos="zoom-in"
          >
            <div className="flex flex-col gap-[6.17px]">
              <div className="flex flex-row gap-[12.88px]">
                <Image
                  src={user}
                  alt=""
                  className="w-[60px] h-[60px] rounded-[30px]"
                />
                <div className="flex flex-col gap-[3.68px] justify-center">
                  <p className="font-[600] text-[23.6px] leading-[28.77px] text-[#000000]">
                    Mia Morton
                  </p>
                  <p className="text-[#000000B2] font-[500] text-[13.49px] leading-[16.44px]">
                    entrepremeurs
                  </p>
                </div>
              </div>
              <Rate disabled defaultValue={5} className="mt-4" />
            </div>
            <p className="text-[#00000099] font-[500] text-[16px] leading-[20.16px] mt-4">
              The Best
            </p>
            <p className="text-[#00000099] font-[500] text-[16px] leading-[20.16px] mt-6">
              Consistent payments and exceptional service. Whether you're a
              seasoned crypto expert or just starting out, this platform offers
              top-notch information and ease of use. My rating: 5/5!
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[7px] px-[16px]">
          <p className="text-[#001404B2] font-[500] text-[20px] md:leading-[25.2px]">
            pricing plan
          </p>
          <p className="font-[700] md:text-[32px] text-[20px] md:leading-[43.58px]">
            <span className="text-[#E8A000]">Best Plan </span>for you
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[58px] gap-[24px]">
          <div
            className="flex flex-col md:w-1/3 w-full rounded-[10px]  shadow-md bg-white"
            data-aos="zoom-in-up"
          >
            <div className="rounded-tl-[10px] rounded-tr-[10px] bg-[#FBAD00] py-[10px] px-[25px]">
              <p className="text-center font-[600] text-[24px] leading-[32.68px] text-white">
                Silver Plan
              </p>
            </div>
            <div className="flex flex-col gap-[24px] items-center mt-6">
              <div className="flex flex-col gap-[32px]">
                <p className="text-[#FBAD00] font-[600] text-[32px] leading-[43.58px]">
                  From /€1,000
                </p>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Duration 1 Month
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Profit Return Type Daily Basis
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Percentage per Day 19.93%
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Minimum Return €6,178.3
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Maximum Return €123,559.8
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      No limit on withdrawal
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/dashboard">
                  <button className="bg-gradient-to-b from-[#DC9D14] via-[#D69402] to-[#916E06] rounded-[6px] py-[14px] px-[45px] mb-12 font-[600] text-[20px] leading-[27.24px] text-white">
                    {" "}
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:w-1/3 w-full rounded-[10px]  shadow-md  bg-[#FFAA00]"
            data-aos="zoom-in-up"
          >
            <div className="rounded-tl-[10px] rounded-tr-[10px] bg-[#FBAD00] py-[10px] px-[25px]">
              <p className="text-center font-[600] text-[24px] leading-[32.68px] text-white">
                Gold Plan
              </p>
            </div>
            <div className="flex flex-col gap-[24px] items-center mt-6">
              <div className="flex flex-col gap-[32px]">
                <p className="text-white font-[600] text-[32px] leading-[43.58px]">
                  From /€20,000
                </p>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-white font-[400] text-[15px] leading-[20.43px]">
                      Duration 1 Month
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-white font-[400] text-[15px] leading-[20.43px]">
                      Profit Return Type Daily Basis
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-white font-[400] text-[15px] leading-[20.43px]">
                      Percentage per Day 19.93%
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-white font-[400] text-[15px] leading-[20.43px]">
                      Minimum Return €6,178.3
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-white font-[400] text-[15px] leading-[20.43px]">
                      Maximum Return €123,559.8
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-white font-[400] text-[15px] leading-[20.43px]">
                      No limit on withdrawal
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/dashboard">
                  <button className="bg-white rounded-[6px] py-[14px] px-[45px] mb-12 font-[600] text-[20px] leading-[27.24px] text-[#FFAA00]">
                    {" "}
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:w-1/3 w-full rounded-[10px]  shadow-md bg-white "
            data-aos="zoom-in-up"
          >
            <div className="rounded-tl-[10px] rounded-tr-[10px] bg-[#FBAD00] py-[10px] px-[25px]">
              <p className="text-center font-[600] text-[24px] leading-[32.68px] text-white">
                Platinum Plan
              </p>
            </div>
            <div className="flex flex-col gap-[24px] items-center mt-6">
              <div className="flex flex-col gap-[32px] items-center">
                <p className="text-[#FBAD00]  font-[600] text-[32px] leading-[43.58px] text-center">
                  From /€50,000 -€2,000,000
                </p>
                <div className="flex flex-col gap-[8px] text-center">
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2] text-center  font-[400] text-[15px] leading-[20.43px]">
                      Duration 1 Month
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Profit Return Type Daily Basis
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Percentage per Day 19.93%
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2] font-[400] text-[15px] leading-[20.43px]">
                      Minimum Return €6,178.3
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      Maximum Return €123,559.8
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-[16px]">
                    <Image src={good} alt="" />
                    <p className="text-[#000000B2]  font-[400] text-[15px] leading-[20.43px]">
                      No limit on withdrawal
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Link href="/dashboard">
                  <button className="bg-gradient-to-b from-[#DC9D14] via-[#D69402] to-[#916E06] rounded-[6px] py-[14px] px-[45px] mb-12 font-[600] text-[20px] leading-[27.24px] text-white">
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
