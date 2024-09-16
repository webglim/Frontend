"use client";
import kite from "../../../public/images/kite.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://customer-care-live-chat.onrender.com");

const page = () => {
  const [messages, setMessages] = useState<any>([]);
  const [messageText, setMessageText] = useState<any>("");
  //   useEffect(() => {
  //     socket.on("connect", () => {
  //       console.log("Connected to server");
  //     });

  //     socket.on("disconnect", () => {
  //       console.log("Disconnected from server");
  //     });
  //   }, []);
  //   useEffect(() => {
  //     socket.on("message", (message: any) => {
  //       setMessages([...messages, message]);
  //     });
  //     console.log("messages", messages);
  //   }, [messages]);

  //   const sendMessage = () => {
  //     socket.emit("sendMessage", { text: messageText });
  //     setMessageText("");
  //   };
  return (
    <div className="flex flex-col px-[4%] bg-white min-h-screen items-center w-full">
      <p className="text-[24px] mt-8">AI Chat Assitant</p>
      <div className="flex flex-row items-center mt-12 w-full">
        <div className="w-[40%]"></div>
        <div className="rounded-[8.34px] p-[10px] bg-[#534EDB] w-[60%]">
          <p className="font-[400] text-[12.51px] leading-[17.03px] text-[#FFFFFF]">
            Good Morning, How are you ? 💯
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="font-[400] text-[8.51px] leading-[17.03px] text-[#FFFFFF]">
              23 mins ago
            </p>
            <p className="font-[400] text-[8.51px] leading-[17.03px] text-[#FFFFFF]">
              1:00PM
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mt-12 w-full">
        <div className="rounded-[8.34px] p-[10px] bg-[#F4F9FF] w-[60%]">
          <p className="font-[400] text-[12.51px] leading-[17.03px] text-[#333333CC]">
            Good Morning, How are you ? 💯
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="font-[400] text-[8.51px] leading-[17.03px] text-[#333333CC]">
              23 mins ago
            </p>
            <p className="font-[400] text-[8.51px] leading-[17.03px] text-[#333333CC]">
              1:00PM
            </p>
          </div>
        </div>
        <div className="w-[40%]"></div>
      </div>
      <div className="fixed bottom-8 border-[0.83px] border-[#ADAFB542] p-[10px] w-[90%] rounded-[4.17px] items-center justify-between flex flex-row">
        <input
          type="text"
          value={messageText}
          className="w-[80%]"
          onChange={(e) => setMessageText(e.target.value)}
        />
        <div className="w-[20%] flex justify-end">
          <div className="bg-[#EAF2FF] p-[10.84px] rounded-[4.17px]">
            <Image src={kite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
