"use client";
import React, { useMemo, useEffect, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import { toast } from "react-toastify";
import ChangePasswordModal from "@/components/changepasswordModal";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [withdrawModalVisible, setWithdrawModalVisible] = useState<any>(false);
  const options = useMemo<any>(() => countryList().getData(), []);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const closeWithdrawModal = () => {
    setWithdrawModalVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your authorization scheme
      },
    };
    closeWithdrawModal();
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
        router.push("/login");
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

  const toggleWithdrawVisible = () => {
    setWithdrawModalVisible(true);
  };
  const isFormValid = formData.password.trim() !== "";
  return (
    <div className="flex flex-col px-[2%] bg-[#F9F9F9] min-h-screen pb-10 text-black">
      <p className="font-[700] mt-4 text-[24px] leading-[32.68px] text-[#333333]">
        Change Password
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
                <div className="flex flex-col gap-[9.28px] md:w-1/2 w-full">
                  <p className="font-[600] text-[16px] leading-[24px] ">
                    New Password
                  </p>
                  <input
                    onChange={handleInputChange}
                    name="password"
                    value={formData.password}
                    type="text"
                    className="rounded-[8px] p-[7.73px] bg-[#EDEFFF]"
                    // defaultValue={data?.firstName}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            disabled={!isFormValid}
            onClick={toggleWithdrawVisible}
            type="button"
            className="bg-[#FFAA00] w-[95%] py-[6.24px] rounded-[8px] mx-6 font-[700] text-[16.68px] leading-[25.02px] text-[#FFFFFF]"
          >
            Update
          </button>
        </form>
      </div>
      <ChangePasswordModal
        onClose={closeWithdrawModal}
        visible={withdrawModalVisible}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default page;
