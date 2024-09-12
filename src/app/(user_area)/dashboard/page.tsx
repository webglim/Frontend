"use client";
import React, { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import vector from "../../../../public/images/Vector-12.svg";
import dollar from "../../../../public/images/Vector-13.svg";
import { Progress } from "antd";
import { MdOutlineChevronRight } from "react-icons/md";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data on component mount
    axios
      .get("https://web-gold-limited-backend.onrender.com/api/v1/user/profile") // Replace with your API URL
      .then((response) => {
        console.log("response.data", response.data);
        setData(response.data); // Set the received data to state
        setLoading(false); // Set loading to false when the data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error if request fails
        setLoading(false); // Also stop loading in case of error
      });
  }, []); //
  return (
    <div className="px-[2%] flex flex-col gap-[36px] min-h-[80vh] overflow-y-scroll">
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
      <div className="flex md:flex-row flex-col items-center gap-[15px]">
        <div className="md:w-1/2 w-full rounded-[18.19px] border-[2.27px] p-[22.74px] gap-[22.74px] bg-[#FFFFFF] border-[#78B3FF80] flex flex-row items-center">
          <div className="w-[86.53px] h-[86.53px] bg-[#EDEFFF] rounded-full flex items-center justify-center">
            <Image src={vector} alt="" />
          </div>
          <div>
            <p className="text-[#333333] font-[800] text-[30.14px] leading-[41.05px]">
              $4,778
            </p>
            <p className="font-[400] text-[17.23px] leading-[23.46px] text-[#33333399]">
              Total Invested
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded-[18.19px] border-[2.27px] p-[22.74px] gap-[22.74px] bg-[#FFFFFF] border-[#78B3FF80] flex flex-row items-center">
          <div className="w-[86.53px] h-[86.53px] bg-[#FEEFD1] rounded-full flex items-center justify-center">
            <Image src={dollar} alt="" />
          </div>
          <div>
            <p className="text-[#333333] font-[800] text-[30.14px] leading-[41.05px]">
              $4,778
            </p>
            <p className="font-[400] text-[17.23px] leading-[23.46px] text-[#33333399]">
              Total Earned
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1B1C1F] rounded-[6.41px] flex md:flex-row flex-col py-[30px] px-[80px] justify-between">
        <div className="flex md:flex-row flex-col gap-[24.5px] items-center">
          <div className="flex flex-col gap-4">
            {" "}
            <Progress type="circle" percent={75} />
            <p className="font-[400] text-[13.25px] leading-[19.91px] text-[#FFFFFF]">
              Avg. interest Rate
            </p>
          </div>
          <div className="flex flex-col gap-[5.74px]">
            <p className="text-[48.61px] text-white font-[600] leading-[66.19px]">
              $557,235.31
            </p>
            <p className="text-[19.71px] text-white font-[400] leading-[24.02px]">
              Portfolio value
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          {" "}
          <div className="rounded-[6.51px] py-[5px] px-[20.36px] border-[#FFFFFF] border-[0.81px] font-[600] text-[13.77px] leading-[18.75px] text-[#FFFFFF]">
            Invest Now
          </div>
        </div>
      </div>
      <div className="p-[10px] flex flex-col gap-[10px]">
        <div className="flex flex-row justify-between items-center">
          <p className="font-[600] text-[24px] leading-[14.84px] text-[#333333CC]">
            Transactions
          </p>
          <div className="flex flex-row gap-[8px] items-center ">
            <p className="font-[700] text-[14px] leading-[14.84px] text-[#333333CC]">
              View More
            </p>
            <MdOutlineChevronRight />
          </div>
        </div>
        <div className="p-[18px] flex flex-row gap-[29.45px] items-center">
          <div className="w-1/4">
            <p>Transaction ID</p>
          </div>
          <div className="w-1/4">
            <p>Amount invested</p>
          </div>
          <div className="w-1/4">
            <p>Date</p>
          </div>
          <div className="w-1/4">
            <p>Status</p>
          </div>
        </div>
        <div className="flex flex-row items-center bg-[#FEEFD1] p-[18px]  gap-[29.45px]">
          <div className="w-1/4">
            <p>#45678989</p>
          </div>
          <div className="w-1/4">
            <p>$3456</p>
          </div>
          <div className="w-1/4">
            <p>11/09/2024 13:34pm</p>
          </div>
          <div className="w-1/4">
            <p className="text-[#F6A41B]">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
