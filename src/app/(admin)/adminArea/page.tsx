"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import vector from "../../../../public/images/Vector-12.svg";
import dollar from "../../../../public/images/Vector-13.svg";
import { Progress } from "antd";
import { MdOutlineChevronRight } from "react-icons/md";
import axios from "axios";
import { formatToTwoDecimalPlaces } from "@/helpers/helpers";
import Loader from "@/components/Loader";
import notransact from "../../../../public/images/notransact.png";
import DepositModal from "@/components/depositModal";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { div } from "framer-motion/client";
import { FormatDate } from "@/helpers/helpers";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

interface DocumentLoadingState {
  [key: string]: boolean;
}
const Page = () => {
  const router = useRouter();
  const [depositModalVisible, setDepositModalVisible] = useState<any>(false);
  const [data, setData] = useState<any>();
  const [transactions, setTransactions] = useState<any>(null);
  const [withdrawal, setWithdrawal] = useState<any>();
  const [users, setUsers] = useState<any>(null);
  const [deposit, setDeposit] = useState<any>(null);
  const [transactionsLoading, setTransactionsLoading] =
    useState<boolean>(false);
  const [investment, setInvestment] = useState<any>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState<DocumentLoadingState>({});
  const [isapprove, setApprove] = useState<DocumentLoadingState>({});
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

        const {
          firstName,
          lastName,
          id: userId,
        } = userProfileResponse.data.data;
        const fullName = `${firstName} ${lastName}`;
        localStorage.setItem("fullName", fullName);
        setData(userProfileResponse.data.data);

        // Fetch investment data
        const withdrawalResponse = await axios.get(
          "https://web-gold-limited-backend.onrender.com/api/v1/withdrawal?pagination_size=1000000000000",
          config
        );
        const investmentResponse = await axios.get(
          "https://web-gold-limited-backend.onrender.com/api/v1/investment/admin-analytics",
          config
        );
        const allUsers = await axios.get(
          "https://web-gold-limited-backend.onrender.com/api/v1/user",
          config
        );
        console.log("allUsers response.data", allUsers.data);
        setUsers(allUsers.data.data);
        console.log("Investment response.data", investmentResponse.data);
        console.log(
          "withdrawalResponse response.data",
          withdrawalResponse.data
        );
        setInvestment(investmentResponse.data.data);
        setWithdrawal(withdrawalResponse.data.data);

        // Fetch transactions and deposits only if userId exists
        if (userId) {
          setTransactionsLoading(true);

          const [transactionsResponse, userDepositResponse] = await Promise.all(
            [
              axios.get(
                `https://web-gold-limited-backend.onrender.com/api/v1/investment?pagination_size=5&user=${userId}`,
                config
              ),
              axios.get(
                `https://web-gold-limited-backend.onrender.com/api/v1/deposit?pagination_size=100000000000`,
                config
              ),
            ]
          );

          setTransactionsLoading(false);
          console.log("Transactions response.data", transactionsResponse.data);
          console.log("userDeposit response.data", userDepositResponse.data);

          setTransactions(transactionsResponse.data.data);
          setDeposit(userDepositResponse.data.data);
        }

        setLoading(false); // Set loading to false when the data is fetched
      } catch (err: any) {
        setError(err.message); // Set error if request fails
        setLoading(false); // Also stop loading in case of error
      }
    };

    fetchData();
  }, []);

  const closeDepositModal = () => {
    setDepositModalVisible(false);
  };
  const toggleDepositVisible = () => {
    setDepositModalVisible(true);
  };
  const onChange = (key: string) => {
    console.log(key);
  };
  const handleSubmit = async (id: any) => {
    setIsSubmitting((prevLoading: any) => ({
      ...prevLoading,
      [id]: true,
    }));
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
    try {
      const response = await axios.post(
        `https://web-gold-limited-backend.onrender.com/api/v1/deposit/${id}`,
        {
          confirmed: true,
        },
        config
      );

      if (response.status === 201) {
        console.log("response.data.token", response);
        toast.success(response.data.message);
        // Handle successful signup (e.g., redirect to login or verification page)
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
      setIsSubmitting((prevLoading: any) => ({
        ...prevLoading,
        [id]: false,
      }));
    }
  };
  const handleApprove = async (id: any, confirmed: any) => {
    setApprove((prevLoading: any) => ({
      ...prevLoading,
      [id]: true,
    }));
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
    try {
      const response = await axios.post(
        `https://web-gold-limited-backend.onrender.com/api/v1/withdrawal/${id}`,
        {
          confirmed,
        },
        config
      );

      if (response.status === 201) {
        console.log("response.data.token", response);
        toast.success(response.data.message);
        // Handle successful signup (e.g., redirect to login or verification page)
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
      setApprove((prevLoading: any) => ({
        ...prevLoading,
        [id]: false,
      }));
    }
  };

  const Withdraw = () => {
    return (
      <div>
        {transactionsLoading ? (
          <Loader />
        ) : withdrawal && withdrawal.length > 0 ? (
          <>
            <div className="p-[18px] flex flex-row md:gap-[29.45px] gap-[10px] items-center">
              <div className="w-1/3">
                <p>name</p>
              </div>

              <div className="w-1/3">
                <p>Amount</p>
              </div>
            </div>
            {withdrawal.map((withdrawals: any, index: any) => (
              <div key={index}>
                <div
                  className={`flex flex-row items-center  p-[18px]  md:gap-[29.45px] gap-[10px] ${
                    index % 2 === 0 ? "bg-[#FEEFD1]" : "bg-white"
                  }`}
                >
                  <div className="w-1/3 flex flex-row items-center gap-[4px]">
                    <p>{withdrawals?.user?.firstName}</p>
                  </div>

                  <div className="w-1/3">
                    <p>{withdrawals?.amount}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    {withdrawals?.confirmed === false && (
                      <button
                        className="px-3 py-1 bg-green-300 rounded-sm"
                        onClick={() => handleApprove(withdrawals.id, true)}
                      >
                        {isapprove[withdrawals?.id] ? "Loading..." : " Approve"}
                      </button>
                    )}
                    {withdrawals?.confirmed === true && (
                      <button
                        className="px-3 py-1 bg-red-400 rounded-sm"
                        onClick={() => handleApprove(withdrawals.id, false)}
                      >
                        {isapprove[withdrawals?.id] ? "Loading..." : " Decline"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className=" w-full flex flex-col items-center justify-center gap-[8px] pb-10">
            <Image src={notransact} alt="" className="mt-12" />
            <div className="flex flex-col gap-[8px] mt-8 items-center justify-center">
              <p className="font-[600] text-[25.65px] leading-[14.63px] text-[#333333]">
                No Withdrawal
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  const Invest = () => {
    return (
      <div>
        {transactionsLoading ? (
          <Loader />
        ) : users && users.length > 0 ? (
          <>
            <div className="p-[18px] flex flex-row md:gap-[29.45px] gap-[10px] items-center">
              <div className="w-1/2">
                <p>First Name</p>
              </div>

              <div className="w-1/2">
                <p>Email</p>
              </div>
            </div>
            {users.map((transaction: any, index: any) => (
              <div key={index}>
                <Link href={`/adminSettings/${transaction?.id}`}>
                  <div
                    className={`flex flex-row items-center  p-[18px]  md:gap-[29.45px] gap-[10px] ${
                      index % 2 === 0 ? "bg-[#FEEFD1]" : "bg-white"
                    }`}
                  >
                    <div className="w-1/2 flex flex-row items-center gap-[4px]">
                      <p>{transaction?.firstName}</p>
                      <p>{transaction?.lastName}</p>
                    </div>

                    <div className="w-1/2">
                      <p>{transaction?.email}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <div className=" w-full flex flex-col items-center justify-center gap-[8px] pb-10">
            <Image src={notransact} alt="" className="mt-12" />
            <div className="flex flex-col gap-[8px] mt-8 items-center justify-center">
              <p className="font-[600] text-[25.65px] leading-[14.63px] text-[#333333]">
                No Users
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  const Deposit = () => {
    return (
      <div>
        {transactionsLoading ? (
          <Loader />
        ) : deposit && deposit.length > 0 ? (
          <>
            <div className="p-[18px] flex flex-row md:gap-[29.45px] gap-[8px] items-center font-[800]">
              <div className="w-1/3">
                <p>Amount Deposited</p>
              </div>
              {/* <div className="w-1/4">
                <p>Date</p>
              </div> */}
              <div className="w-1/3">
                <p>Status</p>
              </div>
              <div className="w-1/3">
                <p>User</p>
              </div>
            </div>
            {deposit.map((deposits: any, index: any) => (
              <div key={index}>
                <div
                  className={`flex flex-row items-center  md:p-[18px] p-[8px]  md:gap-[29.45px] gap-[8px] ${
                    index % 2 === 0 ? "bg-[#FEEFD1]" : "bg-white"
                  }`}
                >
                  <div className="w-1/3">
                    <p>${deposits?.amount}</p>
                  </div>
                  {/* <div className="w-1/4">
                    <p>{FormatDate(deposits?.createdAt)}</p>
                  </div> */}
                  <div className="w-1/3">
                    <p className="text-[#F6A41B]">
                      {deposits.confirmed === false ? "Pending" : "Confirmed"}
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-between w-1/3">
                    <p>{deposits?.user?.firstName}</p>
                    {deposits?.confirmed === false && (
                      <button
                        className="bg-[#37D159] md:px-5 py-2 px-2 rounded-[8px] text-white text-[8px] md:text-[14px]"
                        onClick={() => {
                          handleSubmit(deposits?.id);
                        }}
                      >
                        {isSubmitting[deposits?.id] ? "Loading..." : "Approve"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className=" w-full flex flex-col items-center justify-center gap-[8px] pb-10">
            <Image src={notransact} alt="" className="mt-12" />
            <div className="flex flex-col gap-[8px] mt-8 items-center justify-center">
              <p className="font-[600] text-[25.65px] leading-[14.63px] text-[#333333]">
                No Recent Transactions
              </p>
              <p className="font-[500] text-[25.65px] leading-[14.63px] text-[#333333] mt-4">
                We couldn't find any transactions to this account
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Deposits",
      children: <Deposit />,
    },
    {
      key: "2",
      label: "All Users",
      children: <Invest />,
    },
    {
      key: "",
      label: "All Withdrawals",
      children: <Withdraw />,
    },
  ];
  return (
    <div className="px-[2%] flex flex-col gap-[36px] min-h-[80vh] bg-[#F9F9F9]">
      <div className="flex md:flex-row flex-col items-center gap-[15px] mt-4">
        <div className="md:w-1/2 w-full rounded-[18.19px] border-[2.27px] p-[22.74px] gap-[22.74px] bg-[#FFFFFF] border-[#78B3FF80] flex flex-row items-center">
          <div className="w-[86.53px] h-[86.53px] bg-[#EDEFFF] rounded-full flex items-center justify-center">
            <Image src={vector} alt="" />
          </div>
          <div>
            <p className="text-[#333333] font-[800] text-[30.14px] leading-[41.05px]">
              ${formatToTwoDecimalPlaces(investment?.totalActiveInvestors)}
            </p>
            <p className="font-[400] text-[17.23px] leading-[23.46px] text-[#33333399]">
              Total Investors
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded-[18.19px] border-[2.27px] p-[22.74px] gap-[22.74px] bg-[#FFFFFF] border-[#78B3FF80] flex flex-row items-center">
          <div className="w-[86.53px] h-[86.53px] bg-[#FEEFD1] rounded-full flex items-center justify-center">
            <Image src={dollar} alt="" />
          </div>
          <div>
            <p className="text-[#333333] font-[800] text-[30.14px] leading-[41.05px]">
              ${formatToTwoDecimalPlaces(investment?.totalInvested)}
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
              ${formatToTwoDecimalPlaces(investment?.totalEarned)}
            </p>
            <p className="font-[400] text-[17.23px] leading-[23.46px] text-[#33333399]">
              Total Earned
            </p>
          </div>
        </div>
      </div>

      <div className="md:p-[10px] flex flex-col gap-[10px]">
        <div className="flex flex-col">
          <p className="font-[600] text-[24px] leading-[14.84px] text-[#333333CC]">
            Transactions
          </p>

          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className="mt-8"
          />
        </div>
      </div>
      <DepositModal onClose={closeDepositModal} visible={depositModalVisible} />
    </div>
  );
};

export default Page;
