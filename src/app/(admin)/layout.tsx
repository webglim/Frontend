"use client";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import AdminSidebar from "@/components/adminSidebar";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const isTab = useMediaQuery({ query: "(min-width:700px)" });
  const [isSidebarOpen, setSidebarOpen] = useState(isTab);
  const [storedName, setStoredName] = useState("");
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    if (isTab) {
      setSidebarOpen(true); // Open on tablet/desktop
    } else {
      setSidebarOpen(false); // Close on mobile
    }
  }, [isTab]);
  useEffect(() => {
    // Retrieve the name from localStorage using the key fullName
    const fullName = "fullName"; // Replace with the actual key if necessary
    const retrievedName = localStorage.getItem(fullName);

    // Set the retrieved name to the state
    if (retrievedName) {
      setStoredName(retrievedName);
    }
  }, []);
  return (
    <div className="h-[100vh]  max-w-[100vw] overflow-y-hidden ">
      <div className=" flex bg-white w-full h-full">
        <div className="md:w-[20vw]">
          <AdminSidebar
            isOpen={isSidebarOpen}
            openSidebar={openSidebar}
            closeSidebar={closeSidebar}
          />
        </div>
        <div className=" bg-white md:w-[80vw] w-full flex flex-col">
          <div className="bg-[#1B1C1F] flex flex-row justify-between items-center w-full px-[2%] py-2">
            <div className="w-1/2 ">
              <Image
                src={Logo}
                alt=""
                className="w-[60px] h-[60px] hidden md:block"
              />
              <Image
                onClick={openSidebar}
                src={Logo}
                alt=""
                className="w-[60px] h-[60px] md:hidden block "
              />
            </div>
            <div className="w-1/2 flex justify-end">
              {" "}
              <div className="flex flex-col gap-[6.82px]">
                <p className="font-[600] text-[13.65px] leading-[18.59px] text-[#FFFFFF]">
                  Good Morning
                </p>
                <p className="font-[600] text-[23.88px] leading-[32.52px] text-[#FFFFFF]">
                  {storedName}
                </p>
              </div>
            </div>
          </div>
          <div className={`overflow-y-scroll `}>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
