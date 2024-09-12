"use client";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import {
  MdOutlineRealEstateAgent,
  MdOutlineHealthAndSafety,
  MdOutlineEmojiTransportation,
} from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";

const Page = () => {
  const [selected, setSelected] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [minValue, setMinValue] = useState(0);
  const handleItemClick = (index: any) => {
    setSelected(index);
  };
  const handlePlanChange = (e: any) => {
    const plan = e.target.value;
    setSelectedPlan(plan);

    // Set minimum value based on selected plan
    switch (plan) {
      case "silver":
        setMinValue(100); // Minimum value for Silver Plan
        break;
      case "gold":
        setMinValue(500); // Minimum value for Gold Plan
        break;
      case "platinum":
        setMinValue(1000); // Minimum value for Platinum Plan
        break;
      default:
        setMinValue(0); // Default minimum value
        break;
    }
  };
  const items = [
    {
      id: "1",
      title: "Real Estate",
      icon: <MdOutlineRealEstateAgent className="h-[24px] w-[24px]" />,
    },
    {
      id: "2",
      title: "Agriculture",
      icon: <GiGreenhouse className="h-[24px] w-[24px]" />,
    },
    {
      id: "3",
      title: "Health",
      icon: <MdOutlineHealthAndSafety className="h-[24px] w-[24px]" />,
    },
    {
      id: "4",
      title: "Transportation",
      icon: <MdOutlineEmojiTransportation className="h-[24px] w-[24px]" />,
    },
  ];
  return (
    <div className="px-[2%] flex flex-col gap-[36px] min-h-[80vh] overflow-y-scroll pb-10">
      <div className="bg-[#1B1C1F] rounded-[8.55px] flex md:flex-row flex-col justify-between py-[12.83px] px-[26.72px] mt-4">
        <div className="flex flex-col gap-[6.28px]">
          <div className="flex flex-row gap-[5.93px] items-center">
            <p className="font-[400] text-[14.23px] leading-[19.38px] text-[#FFFFFF]">
              Available Balance
            </p>
            <FiEye color="white" />
          </div>
          <div className="flex flex-row gap-[9.49px] items-center">
            <p className="font-[600] text-[56.93px] leading-[77.52px] text-[#FFFFFF]">
              $0.00
            </p>
            <p className="font-[600] text-[20.4px] leading-[27.78px] text-[#FFFFFF]">
              USD
            </p>
          </div>
          <div className="flex flex-row gap-[8.67px] font-[400] text-[11.46px] leading-[15.61px] text-[#FFFFFFB2]">
            <p>≈</p>
            <p>0.0085129BTC</p>
          </div>
        </div>
        <div className="flex flex-row gap-[16px] items-center mt-4 md:mt-0">
          <div className="rounded-[6.51px] py-[5px] px-[20.36px] bg-[#FFAA00] font-[600] text-[13.77px] leading-[18.75px] text-[#FFFFFF]">
            Deposit
          </div>
          <div className="rounded-[6.51px] py-[5px] px-[20.36px] border-[#FFFFFF] border-[0.81px] font-[600] text-[13.77px] leading-[18.75px] text-[#FFFFFF]">
            Withdraw
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] px-[21.36px]">
        <p className="font-[700] text-[24px] leading-[32.68px] text-[#333333]">
          Projects
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 p-[8.54px] gap-[8.54px] ">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className={`${
                selected === index ? "bg-[#FFAA00]" : "bg-white"
              } rounded-[8px] p-[19.42px] border-[#78B3FF80] border-[1.94px] gap-[19.42px] justify-center items-center flex flex-col h-[245.18px] cursor-pointer`} // Apply cursor-pointer for clickability
            >
              <div className="bg-[#EDEFFF] h-[73.92px] w-[73.92px] rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col gap-[8px] text-center">
                <p className="font-[800] text-[25.75px] leading-[35.07px] text-[#333333]">
                  {item.title}
                </p>
                <p className="font-[600] text-[14.72px] leading-[20.04px] text-[#33333399]">
                  ROI +33%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selected !== null && (
        <div className="flex flex-col gap-[33px]">
          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px]">
            <p className="font-[500] text-[24px] leading-[36px] text-[#2E2A39]">
              {items[selected].title}
            </p>
          </div>

          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px]  flex flex-col gap-[7.41px]">
            <p className="font-[500] text-[24px] leading-[36px] text-[#2E2A39]">
              Plan
            </p>
            <select
              name="plan"
              onChange={handlePlanChange}
              className="bg-[#EDEFFF]"
            >
              <option value="">Select Plan</option>
              <option value="silver">Silver Plan</option>
              <option value="gold">Gold Plan</option>
              <option value="platinum">Platinium Plan</option>
            </select>
          </div>
          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px] items-center justify-between flex flex-row">
            <span className="font-[500] text-[24px] leading-[36px] text-[#2E2A39]">
              ${" "}
              <input
                type="number"
                className="bg-[#EDEFFF]"
                placeholder={`Minimum $${minValue}`}
                min={minValue}
              />
            </span>
            <div className="bg-white rounded-[7.41px] px-[23.17px]">
              <p>USD</p>
            </div>
          </div>
        </div>
      )}
      <ul className="list-disc pl-5">
        <li>
          Instruction: Select a project to invest, select a plan, enter
          investment amount and click the button
        </li>
      </ul>
    </div>
  );
};

export default Page;
