"use client";
import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { TiInfoLarge } from "react-icons/ti";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Page = () => {
  const router = useRouter();
  type FormData = {
    email: string;
  };

  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePassword = (e: any) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    return newErrors;
  };
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `https://web-gold-limited-backend.onrender.com/api/v1/auth/forgot-password/${formData.email}`,
        formData
      );

      if (response.status === 201) {
        console.log("response.data.token", response);
        toast.success(response.data.message);
        router.push("/login");

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
    <div className="h-screen flex md:flex-row flex-col bg-[#F9FAF9] text-black">
      <div className="md:w-1/2 w-full bg-loginBg bg-no-repeat bg-cover px-[4%] pb-8 md:pb-0">
        <Image alt="" src={logo} className="mt-4" />
        <div className="flex flex-col items-center justify-center md:h-[90vh] ">
          <div className="flex flex-col md:gap-[16px] gap-[8px] justify-center items-center">
            <p className="md:text-[39.06px] text-[24px] text-white md:leading-[46.87px] leading-[24px] font-[900] text-center mt-4 md:mt-0">
              Join a <span className="text-[#DC9D14]">diverse community</span>{" "}
              of investors
            </p>
            <p className="text-[#BDBDBD] text-[16px] leading-[28.16px] text-center">
              Unlock the world of digital assets with our secure and
              user-friendly platform.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full bg-[#F9FAF9] flex flex-col justify-center items-center mt-8 md:mt-0 pb-4 md:pb-0">
        <div className="bg-white rounded-[10px] shadow-md md:w-[80%] w-[90%] md:h-[80vh] items-center justify-center p-6">
          <div className="flex flex-col gap-[32px] items-center">
            <p className="text-[#2B2A2A] text-[28px] font-[700] leading-[34.13px]">
              Recover Password
            </p>
            <div className="flex flex-row items-center bg-[#FFDA694D] rounded-tr-[5px] rounded-br-[5px]">
              <div className="rounded-[5px] py-[10px] px-[40px] bg-gradient-to-b from-[#F3C53D] via-[#F8AA02] to-[#B88D0F]">
                <p className="text-[18px] font-[600] leading-[21.94px] text-[#F4F4F4]">
                  Login
                </p>
              </div>
              <Link href={"/signup"}>
                <div className="rounded-tr-[5px] rounded-br-[5px] py-[10px] px-[40px] bg-[#FFDA694D]">
                  <p className="text-[18px] font-[600] leading-[21.94px] text-[#2B2A2A]">
                    Signup
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="w-full">
                    <input
                      name="email"
                      type="email"
                      className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px] w-full"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-[8px]">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[38px] mt-16">
                <button
                  type="submit"
                  className="bg-[#FFAA00] py-[10px] rounded-[5px] text-[#F4F4F4] font-[600] text-[18px] leading-[21.94px]"
                >
                  {isSubmitting ? "Loading..." : "Continue"}
                </button>
              </div>
            </form>
            <p className="text-center font-[400] text-[12px] leading-[14.63px]">
              Dont have an account?{" "}
              <Link href={"/signup"}>
                <span className="font-[600]">Sign up .</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full px-[4%] mt-8 items-baseline">
          <p className="font-[400] text-[#666666] text-[11.27px] leading-[15.35px]">
            Copyright 2024 Quickpay. All Rights Reserved.
          </p>
          <span className="flex flex-row gap-[4px] font-[400] text-[#666666] text-[11.27px] leading-[15.35px] items-center">
            <TiInfoLarge className="text-[15px]" />
            <p>Need help</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
