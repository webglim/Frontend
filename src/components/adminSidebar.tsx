"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dashboard from "../../public/images/dashboard.svg";
import invest from "../../public/images/invest.svg";
import settings from "../../public/images/settings.svg";
import Image from "next/image";
import { RiDashboardLine } from "react-icons/ri";
import { PiFlowerLotusLight } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";

function AdminSidebar({ isOpen, openSidebar, closeSidebar }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const isTab = useMediaQuery({ query: "(min-width:700px)" });
  // const [isOpen, setIsOpen] = useState(isTab);
  // useEffect(() => {
  //   if (isTab) {
  //     setIsOpen(true); // Open on tablet/desktop
  //   } else {
  //     setIsOpen(false); // Close on mobile
  //   }
  // }, [isTab]);
  const Sidebar_animation = {
    open: {
      width: "18rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0rem",
      transition: {
        damping: 40,
      },
    },
  };

  return (
    <div>
      <div
        onClick={closeSidebar}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <motion.div
        variants={Sidebar_animation}
        initial={{ x: 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-[#1B1C1F] text-gray shadow-xl z-[999] 
     h-screen overflow-hidden md:relative fixed"
      >
        <div className="flex items-end justify-end">
          <IoCloseSharp
            className="text-white text-right mr-6 mt-8 md:hidden block text-[32px]"
            onClick={closeSidebar}
          />
        </div>
        <div className="flex flex-col h-full mt-20">
          <ul className=" px-2.5 text-[0.9rem] py-5 flex flex-col gap-[16px] font-medium overflow-x-hidden">
            <li>
              <Link
                // onClick={closeSidebar}
                href="/adminArea"
                className={`flex flex-row  text-[A4A4A4] text-white items-center gap-[16px] px-[30px] py-[20px] rounded-[8px] 
                  ${
                    pathname === "/adminArea"
                      ? "bg-[#FFAA00] text-white"
                      : "bg-transparent text-[#A4A4A4]"
                  }`}
              >
                <RiDashboardLine className="w-[24px] h-[24px]" />
                <p className="font-[400] text-[16px] leading-[21.79px]   ">
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                // onClick={closeSidebar}
                href="/adminchangepassword"
                className={`flex flex-row items-center gap-[16px] px-[30px] py-[20px] rounded-[8px] ${
                  pathname === "/adminchangepassword"
                    ? "bg-[#FFAA00] text-white"
                    : "bg-transparent text-[#A4A4A4]"
                }`}
              >
                <RiUserSettingsLine className="w-[24px] h-[24px]" />

                <p className="font-[400] text-[16px] leading-[21.79px] ">
                  Change Password
                </p>
              </Link>
            </li>
            <div
              className="flex flex-row items-center gap-[16px] px-[20px] py-[10px] rounded-[8px] bg-red-400 w-1/2"
              onClick={() => {
                router.push("/");
                localStorage.removeItem("token");
              }}
            >
              <TbLogout2 className="w-[24px] h-[24px] text-white" />{" "}
              <p className="font-[400] text-[16px] leading-[21.79px] ">
                Logout
              </p>
            </div>
            {/* <li>
              <Link
                // onClick={closeSidebar}
                href="/invest"
                className={`flex flex-row items-center gap-[16px] px-[30px] py-[20px] rounded-[8px] ${
                  pathname === "/invest"
                    ? "bg-[#FFAA00] text-white"
                    : "bg-transparent text-[#A4A4A4]"
                }`}
              >
                <PiFlowerLotusLight className="w-[24px] h-[24px]" />

                <p className="font-[400] text-[16px] leading-[21.79px]">
                  Invest
                </p>
              </Link>
            </li> */}
            {/* <li>
              <Link
                // onClick={closeSidebar}
                href="/settings"
                className={`flex flex-row items-center gap-[16px] px-[30px] py-[20px] rounded-[8px] ${
                  pathname === "/settings"
                    ? "bg-[#FFAA00] text-white"
                    : "bg-transparent text-[#A4A4A4]"
                }`}
              >
                <RiUserSettingsLine className="w-[24px] h-[24px]" />

                <p className="font-[400] text-[16px] leading-[21.79px] ">
                  Settings
                </p>
              </Link>
            </li> */}
          </ul>
        </div>
      </motion.div>
      {/* <div className=" md:hidden bg-red-500">
        <MdMenu size={25} onClick={() => setIsOpen(true)} />
      </div> */}
    </div>
  );
}
export default AdminSidebar;
