"use client";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { TiInfoLarge } from "react-icons/ti";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Login = () => {
  const [value, setValue] = useState("");
  const options = useMemo<any>(() => countryList().getData(), []);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const togglePassword = (e: any) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPassword = (e: any) => {
    e.preventDefault();
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const router = useRouter();
  type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    referralCode: string;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    referralCode: "",
  });
  const changeHandler = (country: any) => {
    setValue(country);
    const countryLabel = country?.label;
    setFormData({
      ...formData,
      country: countryLabel,
    });
  };
  //   const handleSelectChange = (selectedOption) => {
  //     setFormData({
  //       ...formData,
  //       selectedOption,
  //     });
  //   };

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (formData.firstName.length < 3) {
      newErrors.firstName = "First Name must be at least 3 characters";
    }
    if (formData.lastName.length < 3) {
      newErrors.lastName = "Last Name must be at least 3 characters";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.country) {
      newErrors.country = "Please select an option";
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
    // toast("hello");
    const { confirmPassword, ...data } = formData;
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://web-gold-limited-backend.onrender.com/api/v1/auth/register",
        data
      );
      console.log("response", response);
      if (response.status === 201) {
        toast(
          "Signup successful! Please check your email to verify your account."
        );
        router.push("/login");
        // Handle successful signup (e.g., redirect to login or verification page)
      }
    } catch (error: any) {
      if (error.response) {
        // Handle validation or server errors from backend
        toast.error(error.response.data.message);
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

  //   const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     const formErrors = validateForm();
  //     if (Object.keys(formErrors).length === 0) {
  //       alert("Form submitted successfully");
  //       console.log(formData);
  //     } else {
  //       setErrors(formErrors);
  //     }
  //   };
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
        <div className="bg-white rounded-[10px] shadow-md md:w-[80%] w-[90%] md:h-[90vh] items-center justify-center p-6">
          <div className="flex flex-col gap-[32px] items-center">
            <p className="text-[#2B2A2A] text-[28px] font-[700] leading-[34.13px]">
              Create Account
            </p>
            <div className="flex flex-row items-center bg-[#FFDA694D] rounded-tl-[5px] rounded-bl-[5px]">
              <Link href={"/login"}>
                <div className=" py-[10px] px-[40px] bg-[#FFDA694D] rounded-tl-[5px] rounded-bl-[5px]">
                  <p className="text-[18px] font-[600] leading-[21.94px] text-[#2B2A2A]">
                    Login
                  </p>
                </div>
              </Link>
              <div className="rounded-[5px] py-[10px] px-[40px]  bg-gradient-to-b from-[#F3C53D] via-[#F8AA02] to-[#B88D0F]">
                <p className="text-[18px] font-[600] leading-[21.94px] text-[#F4F4F4]">
                  Signup
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-row justify-between gap-[10px]">
                    <div className=" w-1/2">
                      <input
                        name="firstName"
                        minLength={3}
                        // required
                        type="text"
                        className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px] w-full"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <p className="text-red-600 text-[8px]">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className=" w-1/2">
                      <input
                        name="lastName"
                        minLength={3}
                        // required
                        type="text"
                        className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px] w-full"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <p className="text-red-600 text-[8px]">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
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
                  <div>
                    <div className="flex flex-row items-center p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px] bg-[#E8F0FE]">
                      <input
                        name="password"
                        type={isPasswordVisible ? "password" : "text"}
                        className=" w-full bg-[#E8F0FE]"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span
                        className={`text-[#C0C0C0] text-2xl px-2`}
                        onClick={togglePassword}
                      >
                        {isPasswordVisible ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </span>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-[8px]">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="flex flex-row items-center p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px] bg-[#E8F0FE]">
                      <input
                        name="confirmPassword"
                        type={isConfirmPasswordVisible ? "password" : "text"}
                        className="w-full bg-[#E8F0FE]"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <span
                        className={`text-[#C0C0C0] text-2xl px-2`}
                        onClick={toggleConfirmPassword}
                      >
                        {isConfirmPasswordVisible ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </span>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-600 text-[8px]">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div>
                    <Select
                      options={options}
                      value={value}
                      onChange={changeHandler}
                      className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px]"
                    />
                    {errors.country && (
                      <p className="text-red-600 text-[8px]">
                        {errors.country}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      name="referralCode"
                      type="text"
                      className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px] w-full"
                      placeholder="Referral Code(Optional)"
                      value={formData.referralCode}
                      onChange={handleChange}
                    />
                  </div>
                  <Link href={"/forgotpassword"}>
                    <p className="text-[#1B1C1F] text-[14px] font-[600] leading-[17.07px]">
                      Forgot password?
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-[38px]">
                <button
                  className="bg-[#D88A19] py-[10px] rounded-[5px] text-[#F4F4F4] font-[600] text-[18px] leading-[21.94px]"
                  type="submit"
                >
                  {isSubmitting ? "Loading..." : "Signup"}
                </button>
              </div>
            </form>
            <Link href={"/signup"}>
              <p className="text-center font-[600] text-[12px] leading-[14.63px]">
                Dont have an account? Sign up .
              </p>
            </Link>
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

export default Login;
