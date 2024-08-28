import React from "react";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";

const Login = () => {
  return (
    <div className="h-screen flex md:flex-row flex-col bg-[#F9FAF9]">
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
              Welcome Back
            </p>
            <div className="flex flex-row items-center">
              <div className="rounded-[5px] py-[10px] px-[40px] bg-gradient-to-b from-[rgb(220,157,20)] via-[#D69402] to-[#916E06]">
                <p className="text-[18px] font-[600] leading-[21.94px] text-[#F4F4F4]">
                  Login
                </p>
              </div>
              <div className="rounded-[5px] py-[10px] px-[40px]">
                <p className="text-[18px] font-[600] leading-[21.94px] text-[#2B2A2A]">
                  Signup
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] mt-8">
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-col gap-[24px]">
                <input
                  type="email"
                  className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px]"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  className="p-[10px] rounded-[5px] border-[#BBBBBC] border-[1px]"
                  placeholder="Password"
                />
                <p className="text-[#1B1C1F] text-[14px] font-[600] leading-[17.07px]">
                  Forgot password?
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[38px]">
              <button className="bg-[#D88A19] py-[10px] rounded-[5px] text-[#F4F4F4] font-[600] text-[18px] leading-[21.94px]">
                Login
              </button>
            </div>
            <p className="text-center font-[600] text-[12px] leading-[14.63px]">
              Dont have an account? Sign up .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
