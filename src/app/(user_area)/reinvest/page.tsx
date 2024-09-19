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
    amount: "",
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
    // switch (plan) {
    //   case "silver":
    //     setMinValue(1000); // Minimum value for Silver Plan
    //     break;
    //   case "gold":
    //     setMinValue(20000); // Minimum value for Gold Plan
    //     break;
    //   case "platinum":
    //     setMinValue(50000); // Minimum value for Platinum Plan
    //     break;
    //   default:
    //     setMinValue(0); // Default minimum value
    //     break;
    // }
    setFormData((prevData: any) => ({
      ...prevData,
      plan: plan,
    }));
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
    <div className="px-[2%] flex flex-col gap-[36px] min-h-[80vh] overflow-y-scroll pb-20 text-black">
      <form onSubmit={handleSubmit}>
        {/* {selected !== null && ( */}
        <div className="flex flex-col gap-[33px]">
          {/* <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px]">
              <p className="font-[500] text-[24px] leading-[36px] text-[#2E2A39]">
                {items[selected].title}
              </p>
            </div> */}

          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px]  flex flex-col gap-[7.41px] mt-8">
            <p className="font-[500] text-[24px] leading-[36px] text-[#2E2A39]">
              Duration
            </p>
            <select
              required
              name="plan"
              onChange={handlePlanChange}
              className="bg-[#EDEFFF]"
            >
              <option value="">Select Duration</option>
              <option value="silver_re_1">Silver Plan One Week</option>
              <option value="silver_re_2">Silver Plan Two Weeks</option>
              <option value="gold_re_1">Gold Plan One Week</option>
              <option value="gold_re_2">Gold Plan Two Weeks</option>
              <option value="platinum_re_1">Platinium Plan One Week</option>
              <option value="platinum_re_2">Platinium Plan Two Weeks</option>
            </select>
          </div>

          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px] items-center justify-between flex flex-row">
            <span className="font-[500] text-[24px] leading-[36px] text-[#2E2A39]">
              ${" "}
              <input
                onChange={handleInputChange}
                type="number"
                className="bg-[#EDEFFF]"
                placeholder={`0.00`}
                // min={minValue}
                required
                name="amount"
              />
            </span>
            <div className="bg-white rounded-[7.41px] px-[23.17px]">
              <p>USD</p>
            </div>
          </div>
        </div>
        {/* )} */}
        {/* <ul className="list-disc pl-5">
          <li>
            Instruction: Select a project to invest, select a plan, enter
            investment amount and click the button
          </li>
        </ul> */}
        {/* {selected !== null && ( */}
        <button
          className="bg-[#FFAA00] py-[6.24px] rounded-[8px] text-white w-full mt-8"
          type="submit"
        >
          {isSubmitting ? "Loading..." : "Re-Invest Now"}
        </button>
        {/* )} */}
      </form>
    </div>
  );
};

export default Page;
