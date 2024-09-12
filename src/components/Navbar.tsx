"use client";
import Image from "next/image";
import Logo from "../../public/images/logoBlack.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const navData: {
  itemName: string;
  id: number;
  dropDown: boolean;
  options: any[];
  route: any;
}[] = [
  {
    itemName: "Home",
    id: 1,
    dropDown: false,
    options: [],
    route: "/",
  },

  {
    itemName: "About",
    id: 2,
    dropDown: false,
    options: [],
    route: "/about",
  },

  {
    itemName: "Announcement",
    id: 4,
    dropDown: false,
    options: [],
    route: "/announcement",
  },

  {
    itemName: "Contact",
    id: 5,
    dropDown: false,
    options: [],
    route: "/contact",
  },
];
const Navbar = ({ scrollToAboutUs }: any) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleItemClick = (item: any) => {
    if (item.route == "/about") {
      scrollToAboutUs();
      console.log("Item clicked:", item);
    }
  };
  return (
    <div className="bg-white px-[4%] py-[8px] flex md:flex-row flex-col items-center justify-between">
      <div className="md:w-1/2 w-full items-center flex ">
        <Image
          src={Logo}
          width={10}
          height={10}
          alt=""
          className="w-[90px] h-[46.36px]"
        />
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 top-2 cursor-pointer md:hidden text-[#DC9D14]`}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <div
        className={`md:w-1/2 w-full flex md:flex-row flex-col items-center gap-[25px] absolute md:static md:z-auto z-[9999] bg-white  py-8 md:py-0 transition-all duration-500 ease-in  ${
          open
            ? "top-14 opacity-100 h-[55%vh] z-99999"
            : "top-[-490px] items-center "
        }`}
      >
        <div className="flex md:flex-row flex-col  items-center p-[10px]">
          {" "}
          {navData.map((item) => {
            return (
              <span
                key={item.id}
                className="p-[10px] text-[16px] text-center hover:cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <span
                  // href={item.route}
                  className={`${
                    pathname === item.route
                      ? `md:py-[23px] mb-5  ${
                          pathname === "/"
                            ? "border-b-[#FFFFFF] md:border-b-2 "
                            : "border-b-[#6A0DAD] md:border-b-2 "
                        } font-[700]`
                      : " "
                  } ${
                    pathname === "/"
                      ? "text-[#1D1D1DB2]"
                      : "md:text-[#000] text-white"
                  } md:py-[20px] font-[500] whitespace-nowrap `}
                >
                  {item.itemName}
                </span>
              </span>
            );
          })}
        </div>
        <Link href={"/login"}>
          <button className="py-[14px] px-[8px] bg-gradient-to-b from-[#F3C53D] via-[#F8AA02] to-[#B88D0F] rounded-[8px] text-white w-[152px]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
