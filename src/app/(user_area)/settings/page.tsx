"use client";
import React, { useMemo, useEffect, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import { toast } from "react-toastify";

type FormData = {
  amount: number;
};
type FormErrors = {
  amount?: string;
};
const page = () => {
  const options = useMemo<any>(() => countryList().getData(), []);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    phone: "",
    nextOfKinFirstName: "",
    nextOfKinLastName: "",
    nextOfKinEmail: "",
    nextOfKinPhone: "",
    walletAddress: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        firstName: data?.firstName,
        lastName: data?.lastName,
        phone: data?.phone,
        nextOfKinFirstName: data?.nextOfKinFirstName,
        nextOfKinLastName: data?.nextOfKinLastName,
        nextOfKinEmail: data?.nextOfKinEmail,
        nextOfKinPhone: data?.nextOfKinPhone,
        walletAddress: data?.walletAddress,
      });
    }
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found");
        }

        // Set up the headers including the token
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Replace with your authorization scheme
          },
        };

        // Fetch user profile data
        const userProfileResponse = await axios.get(
          "https://web-gold-limited-backend.onrender.com/api/v1/user/profile",
          config
        );
        console.log("userProfileResponse", userProfileResponse);

        setData(userProfileResponse.data.data);
        // Fetch transactions and deposits only if userId exists

        setLoading(false); // Set loading to false when the data is fetched
      } catch (err: any) {
        setError(err.message); // Set error if request fails
        setLoading(false); // Also stop loading in case of error
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your authorization scheme
      },
    };
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://web-gold-limited-backend.onrender.com/api/v1/user",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("response.data", response);
        toast.success(response.data.message);
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
    <div className="flex flex-col px-[2%] bg-[#F9F9F9] min-h-screen pb-10 text-black">
      <p className="font-[700] mt-4 text-[24px] leading-[32.68px] text-[#333333]">
        Settings
      </p>
      <div className="p-[10px] flex fflex-col">
        <p className="p-[10px] border-[#FFAA00] border-b-[2px] font-[600] text-[16px] leading-[24px] text-[#333333]">
          Profile
        </p>
      </div>
      <div className="rounded-[8px] bg-white py-[18px] flex flex-col gap-[48px] pb-8">
        <form
          action=""
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full">
            <div className=" p-[7.73px] gap-[7.73px] flex flex-col bg-[#FFFFFF]">
              <div className="p-[7.73px] gap-[13.91px] flex flex-row w-full">
                <div className="flex flex-col gap-[9.28px] w-1/2">
                  <p className="font-[600] text-[16px] leading-[24px] ">
                    First Name
                  </p>
                  <input
                    onChange={handleInputChange}
                    name="firstName"
                    value={formData.firstName}
                    type="text"
                    className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
                    // defaultValue={data?.firstName}
                  />
                </div>
                <div className="flex flex-col gap-[9.28px] w-1/2">
                  <p className="font-[600] text-[16px] leading-[24px]">
                    Last Name
                  </p>
                  <input
                    value={formData.lastName}
                    onChange={handleInputChange}
                    type="text"
                    className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
                    // defaultValue={data?.lastName}
                    name="lastName"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col gap-[9.28px] w-full">
              <p className="font-[600] text-[16px] leading-[24px]">Email</p>
              <input
                type="text"
                className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
              />
            </div> */}
              <div className="flex flex-col gap-[9.28px] w-full">
                <p className="font-[600] text-[16px] leading-[24px]">Phone</p>
                <div className="rounded-[8px] p-[7.73px] bg-[#EDEFFF] flex flex-row">
                  {/* <Select
                  options={options}
                  //   value={formData.country}
                  //   onChange={changeHandler}
                  className=" rounded-[5px]  w-[30%] bg-[#EDEFFF]"
                /> */}
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-[#EDEFFF]"
                    defaultValue={data?.phone}
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[9.28px] w-full">
                <p className="font-[600] text-[16px] leading-[24px]">
                  Wallet Address
                </p>
                <div className="rounded-[8px] p-[7.73px] bg-[#EDEFFF] flex flex-row">
                  {/* <Select
                  options={options}
                  //   value={formData.country}
                  //   onChange={changeHandler}
                  className=" rounded-[5px]  w-[30%] bg-[#EDEFFF]"
                /> */}
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-[#EDEFFF]"
                    defaultValue={data?.walletAddress}
                    name="walletAddress"
                  />
                </div>
              </div>
            </div>
            {/* <div className="w-[25%]"></div> */}
          </div>
          <div className="flex flex-col px-[8px] gap-[21px] w-full">
            <p className="font-[600] text-[18px] leading-[27px] text-[#333333]">
              Next of Kin
            </p>
            <div className="p-[7.73px] flex flex-col gap-[7.73px]">
              <div className="py-[7.73px] gap-[13.91px] flex flex-row w-full">
                <div className="flex flex-col gap-[9.28px] w-1/2">
                  <p className="font-[600] text-[16px] leading-[24px] ">
                    First Name
                  </p>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
                    defaultValue={data?.nextOfKinFirstName}
                    name="nextOfKinFirstName"
                  />
                </div>
                <div className="flex flex-col gap-[9.28px] w-1/2">
                  <p className="font-[600] text-[16px] leading-[24px]">
                    Last Name
                  </p>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
                    defaultValue={data?.nextOfKinLastName}
                    name="nextOfKinLastName"
                  />
                </div>
              </div>
              {/* <div className="flex flex-col gap-[9.28px] w-full">
              <p className="font-[600] text-[16px] leading-[24px]">Email</p>
              <input
                type="text"
                className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
              />
            </div> */}
              <div className="flex flex-col gap-[9.28px] w-full">
                <p className="font-[600] text-[16px] leading-[24px]">email</p>
                <div className="rounded-[8px] p-[7.73px] bg-[#EDEFFF] flex flex-row">
                  {/* <Select
                  options={options}
                  //   value={formData.country}
                  //   onChange={changeHandler}
                  className=" rounded-[5px]  w-[30%] bg-[#EDEFFF]"
                /> */}
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-[#EDEFFF]"
                    defaultValue={data?.nextOfKinEmail}
                    name="nextOfKinEmail"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[9.28px] w-full">
                <p className="font-[600] text-[16px] leading-[24px]">Phone</p>
                <div className="rounded-[8px] p-[7.73px] bg-[#EDEFFF] flex flex-row">
                  {/* <Select
                  options={options}
                  //   value={formData.country}
                  //   onChange={changeHandler}
                  className=" rounded-[5px]  w-[30%] bg-[#EDEFFF]"
                /> */}
                  <input
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-[#EDEFFF]"
                    defaultValue={data?.nextOfKinPhone}
                    name="nextOfKinPhone"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#FFAA00] w-[95%] py-[6.24px] rounded-[8px] mx-6 font-[700] text-[16.68px] leading-[25.02px] text-[#FFFFFF]"
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
