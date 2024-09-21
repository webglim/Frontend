"use client";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ApproveModal = ({ visible, onClose, withdrawal, handleApprove }: any) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        visible ? "visible" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white md:w-1/3 w-[95%] py-[14.83px] px-[18.53px] rounded-[4px] gap-[33.36px] z-10 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <p className="font-[600] text-[24px] leading-[36px] text-[#333333]">
            Approve Withdrawal
          </p>
          <IoIosCloseCircleOutline
            className="text-[#4743C9] h-[24px] w-[24px] hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="bg-[#EDEFFF] p-[16px] rounded-[8px] gap-2">
          <div className="flex flex-col">
            <p className="font-[800]">wallet address</p>
            <p>{withdrawal?.walletAddress}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-[800]">wallet type</p>
            <p>{withdrawal?.walletType}</p>
          </div>
        </div>

        <div className="bg-[#EDEFFF] mt-4 p-[16px] rounded-[8px] justify-between flex flex-col gap-[18.53px] ">
          <p className="font-[800]  text-[18.83px] leading-[22.24px] text-[#2E2A39] w-full ">
            Are sure you want to approve withdrawal?
          </p>
        </div>
        <button
          onClick={() => handleApprove(withdrawal?.id, { confirmed: true })}
          type="button"
          className="bg-[#4743C9] rounded-[6.24px] py-[6.24px] px-[12.48px] h-[60px] text-white font-[700] text-[16.68px] leading-[25.02px] w-full mt-4"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default ApproveModal;
