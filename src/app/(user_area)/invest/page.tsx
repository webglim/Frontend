"use client";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import {
  MdOutlineRealEstateAgent,
  MdOutlineHealthAndSafety,
  MdOutlineEmojiTransportation,
} from "react-icons/md";
import { GiGreenhouse } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [minValue, setMinValue] = useState(0);
  const handleItemClick = (index: any) => {
    setSelected(index);
  };
  const [formData, setFormData] = useState<any>({
    plan: "",
    amount: 0,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };
  const handlePlanChange = (e: any) => {
    const plan = e.target.value;
    setSelectedPlan(plan);

    // Set minimum value based on selected plan
    switch (plan) {
      case "silver":
        setMinValue(1000); // Minimum value for Silver Plan
        break;
      case "gold":
        setMinValue(20000); // Minimum value for Gold Plan
        break;
      case "platinum":
        setMinValue(50000); // Minimum value for Platinum Plan
        break;
      default:
        setMinValue(0); // Default minimum value
        break;
    }
    setFormData((prevData: any) => ({
      ...prevData,
      plan: plan,
    }));
  };
  const items = [
    {
      id: "1",
      title: "Real Estate",
      icon: (
        <MdOutlineRealEstateAgent className="h-[24px] w-[24px] text-black" />
      ),
    },
    {
      id: "2",
      title: "Agriculture",
      icon: <GiGreenhouse className="h-[24px] w-[24px] text-black" />,
    },
    {
      id: "3",
      title: "Health",
      icon: (
        <MdOutlineHealthAndSafety className="h-[24px] w-[24px] text-black" />
      ),
    },
    {
      id: "4",
      title: "Transportation",
      icon: (
        <MdOutlineEmojiTransportation className="h-[24px] w-[24px] text-black" />
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await localStorage.getItem("token");
    const wallet = await localStorage.getItem("wallet");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your authorization scheme
      },
    };
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://web-gold-limited-backend.onrender.com/api/v1/investment",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("response.data", response);
        toast.success("Profile Update successfully!!!");
      }
    } catch (error: any) {
      if (error.response) {
        console.log("error", error.response.data.message);
        toast.error(error.response.data.message);
        // Handle validation or server errors from backend
        const serverErrors =
          error.response.data.errors || error.response.data.message;
        setErrors(serverErrors);
      } else if (error.request) {
        // Network error or no response from the server
        alert(
          "Network error. Please check your internet connection and try again."
        );
      } else {
        // Other unknown errors
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[2%] flex flex-col gap-[36px] min-h-[80vh] overflow-y-scroll pb-20">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[16px] px-[21.36px]">
          <p className="font-[700] text-[24px] leading-[32.68px] text-[#333333] mt-8">
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
                required
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
                  onChange={handleInputChange}
                  type="number"
                  className="bg-[#EDEFFF]"
                  placeholder={`${minValue}`}
                  min={minValue}
                  required
                  name="amount"
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
        {selected !== null && (
          <button
            className="bg-[#FFAA00] py-[6.24px] rounded-[8px] text-white w-full mt-8"
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Invest Now"}
          </button>
        )}
      </form>
    </div>
  );
};

export default Page;
