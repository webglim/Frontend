"use client";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import usa from "../../public/images/usa.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

type FormData = {
  amount: number;
};
type FormErrors = {
  amount?: string;
  walletType?: string;
  walletAddress: string;
};
const WithdrawModal = ({ visible, onClose }: any) => {
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<any>({
    amount: undefined,
    walletType: "",
    walletAddress: "",
  });
  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    }
    if (!formData.walletType) {
      newErrors.walletType = "Wallet Type is required";
    }
    if (!formData.walletAddress) {
      newErrors.walletAddress = "Wallet Address is required";
    }
    return newErrors;
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // If the field is 'amount', convert the value to a number
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const token = await localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your authorization scheme
      },
    };
    console.log("formData", formData);
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://web-gold-limited-backend.onrender.com/api/v1/withdrawal",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("response.data", response);
        toast.success("Withdrawal request successfully submitted");
        onClose();
        // router.push("/dashboard");
        // Handle successful signup (e.g., redirect to login or verification page)
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
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        visible ? "visible" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white md:w-1/3 w-[95%] py-[14.83px] px-[18.53px] rounded-[4px] gap-[33.36px] z-10 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div>
            <select
              name="walletType"
              onChange={handleChange}
              value={formData.walletType}
              className="p-2 border rounded text-black"
            >
              <option>Select Cryptocurrency</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="USDT">USDT trc 20</option>
              <option value="BNB">BNB beacon chain</option>
              <option value="Litecoin">Litecoin</option>
              <option value="Solana">Solana</option>
              <option value="BNBsmart">BNB smart chain</option>
            </select>
            {errors.walletType && (
              <p className="text-red-600 text-[12px]">{errors.walletType}</p>
            )}
          </div>
          <IoIosCloseCircleOutline
            className="text-[#4743C9] h-[24px] w-[24px] hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px] items-center justify-between flex-col flex md:flex-row gap-2">
            <div className="font-[500] gap-[5px] text-[24px] leading-[36px] text-[#2E2A39] flex flex-row w-full">
              <p>€</p>{" "}
              <input
                value={formData.amount}
                name="amount"
                onChange={handleChange}
                type="number"
                className="bg-[#EDEFFF] w-full"
                placeholder={`0.00`}
                // min={minValue}
              />
            </div>

            <div className="bg-white rounded-[7.41px] px-[18.17px] md:h-[64px] flex flex-row justify-between items-center gap-[8px]">
              <p className="text-[#4743C9] font-[700] text-[18px] leading-[27px]">
                Euros
              </p>
            </div>
          </div>
          {errors.amount && (
            <p className="text-red-600 text-[12px]">{errors.amount}</p>
          )}
          <div className="bg-[#EDEFFF] mt-2 py-[8px] px-[16px] rounded-[8px] items-center justify-between flex-col flex md:flex-row gap-2">
            <div className="font-[500] gap-[5px] text-[24px] leading-[36px] text-[#2E2A39] flex flex-col w-full">
              <p className="text-[14px]">wallet address</p>{" "}
              <input
                value={formData.walletAddress}
                name="walletAddress"
                onChange={handleChange}
                type="number"
                className="bg-[#EDEFFF] w-full"
                placeholder={`0.00`}
                // min={minValue}
              />
            </div>
          </div>
          {errors.walletAddress && (
            <p className="text-red-600 text-[12px]">{errors.walletAddress}</p>
          )}
          <div className="bg-[#EDEFFF] mt-4 p-[16px] rounded-[8px] justify-between flex flex-col gap-[18.53px]">
            <ul className="font-[500] list-disc text-[14.83px] leading-[22.24px] text-[#2E2A39] w-full pl-[16px]">
              <li>
                Instruction: Input amount to withdraw to your wallet address
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="bg-[#4743C9] rounded-[6.24px] py-[6.24px] px-[12.48px] h-[60px] text-white font-[700] text-[16.68px] leading-[25.02px] w-full mt-4"
          >
            {isSubmitting ? "Loading..." : "Withdraw Funds"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawModal;
