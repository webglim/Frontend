"use client";
import React, { useState, useEffect, useContext } from "react";
import { FiEye } from "react-icons/fi";
import Image from "next/image";
import vector from "../../../../public/images/Vector-12.svg";
import dollar from "../../../../public/images/Vector-13.svg";
import { Progress } from "antd";
import { MdOutlineChevronRight } from "react-icons/md";
import axios from "axios";
import { LayoutContext } from "@/components/context";
import { formatToTwoDecimalPlaces } from "@/helpers/helpers";
import Loader from "@/components/Loader";
import notransact from "../../../../public/images/notransact.png";
import DepositModal from "@/components/depositModal";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { div } from "framer-motion/client";
import { FormatDate } from "@/helpers/helpers";
import { addCommasToNumber } from "@/helpers/helpers";
import WithdrawModal from "@/components/withdrawModal";
import Link from "next/link";

const Page = () => {
  const [depositModalVisible, setDepositModalVisible] = useState<any>(false);
  const [withdrawModalVisible, setWithdrawModalVisible] = useState<any>(false);
  const [data, setData] = useState<any>();
  const [transactions, setTransactions] = useState<any>(null);
  const [deposit, setDeposit] = useState<any>(null);
  const [transactionsLoading, setTransactionsLoading] =
    useState<boolean>(false);
  const [investment, setInvestment] = useState<any>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { setChildData } = useContext(LayoutContext);
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
        const {
          firstName,
          lastName,
          id: userId,
        } = userProfileResponse.data.data;
        const fullName = `${firstName} ${lastName}`;
        localStorage.setItem("fullName", fullName);
        const wallet = userProfileResponse.data.data.wallet;
        localStorage.setItem("wallet", wallet);
        setData(userProfileResponse.data.data);

        // Fetch investment data
        const investmentResponse = await axios.get(
          "https://web-gold-limited-backend.onrender.com/api/v1/investment/user-analytics",
          config
        );
        console.log("Investment response.data", investmentResponse.data);
        setInvestment(investmentResponse.data.data);

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
                `https://web-gold-limited-backend.onrender.com/api/v1/deposit?user=${userId}`,
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
  const closeWithdrawModal = () => {
    setWithdrawModalVisible(false);
  };
  const toggleWithdrawVisible = () => {
    setWithdrawModalVisible(true);
  };
  const toggleDepositVisible = () => {
    setDepositModalVisible(true);
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const Invest = () => {
    return (
      <div>
        {transactionsLoading ? (
          <Loader />
        ) : transactions && transactions.length > 0 ? (
          <>
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
            {transactions.map((transaction: any, index: any) => (
              <div>
                <div
                  className={`flex flex-row items-center ${
                    index % 2 === 0 ? "bg-[#FEEFD1]" : "bg-white"
                  } p-[18px]  gap-[29.45px]`}
                >
                  <div className="w-1/4">
                    <p>{transaction?.uniqueId}</p>
                  </div>
                  <div className="w-1/4">
                    <p>${transaction?.amount}</p>
                  </div>
                  <div className="w-1/4">
                    <p>{FormatDate(transaction?.createdAt)}</p>
                  </div>
                  <div className="w-1/4">
                    <p className="text-[#F6A41B]">
                      {transaction?.active === true ? "Active" : "Inactive"}
                    </p>
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
              <p className="font-[500] text-[25.65px] leading-[24.63px] text-[#333333] mt-4 text-center">
                We couldn't find any transactions to this account
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
            <div className="p-[18px] flex flex-row gap-[29.45px] items-center font-[800]">
              <div className="w-1/3">
                <p>Amount Deposited</p>
              </div>
              <div className="w-1/3">
                <p>Date</p>
              </div>
              <div className="w-1/3">
                <p>Status</p>
              </div>
            </div>
            {deposit.map((deposits: any, index: any) => (
              <div key={index}>
                <div
                  className={`flex flex-row items-center  p-[18px]  gap-[29.45px] ${
                    index % 2 === 0 ? "bg-[#FEEFD1]" : "bg-white"
                  }`}
                >
                  <div className="w-1/3">
                    <p>${deposits?.amount}</p>
                  </div>
                  <div className="w-1/3">
                    <p>{FormatDate(deposits?.createdAt)}</p>
                  </div>
                  <div className="w-1/3">
                    <p className="text-[#F6A41B]">
                      {deposits.confirmed === false ? "Pending" : "Confirmed"}
                    </p>
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
              <p className="font-[500] text-[25.65px] leading-[24.63px] text-[#333333] mt-4 text-center">
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
      label: "Investments",
      children: <Invest />,
    },
    {
      key: "2",
      label: "Deposits",
      children: <Deposit />,
    },
  ];
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
              ${formatToTwoDecimalPlaces(data?.wallet)}
            </p>
            <p className="font-[600] text-[20.4px] leading-[27.78px] text-[#FFFFFF]">
              USD
            </p>
          </div>
          {/* <div className="flex flex-row gap-[8.67px] font-[400] text-[11.46px] leading-[15.61px] text-[#FFFFFFB2]">
            <p>≈</p>
            <p>0.0085129BTC</p>
          </div> */}
        </div>
        <div className="flex flex-row gap-[16px] items-center mt-4 md:mt-0">
          <div
            onClick={toggleDepositVisible}
            className="rounded-[6.51px] hover:cursor-pointer py-[5px] px-[20.36px] bg-[#FFAA00] font-[600] text-[13.77px] leading-[18.75px] text-[#FFFFFF]"
          >
            Deposit
          </div>
          <div
            onClick={toggleWithdrawVisible}
            className="rounded-[6.51px] hover:cursor-pointer py-[5px] px-[20.36px] border-[#FFFFFF] border-[0.81px] font-[600] text-[13.77px] leading-[18.75px] text-[#FFFFFF]"
          >
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
      <div className="bg-[#1B1C1F] rounded-[6.41px] flex md:flex-row flex-col py-[30px] px-[80px] justify-between">
        <div className="flex md:flex-row flex-col gap-[24.5px] items-center">
          <div className="flex flex-col gap-4">
            {" "}
            <Progress
              type="circle"
              percent={investment?.averageInvestmentProfit}
            />
            <p className="font-[400] text-[13.25px] leading-[19.91px] text-[#FFFFFF]">
              Avg. interest Rate
            </p>
          </div>
          <div className="flex flex-col gap-[5.74px]">
            <p className="text-[48.61px] text-white font-[600] leading-[66.19px]">
              ${formatToTwoDecimalPlaces(investment?.portfolioValue)}
            </p>
            <p className="text-[19.71px] text-white font-[400] leading-[24.02px]">
              Portfolio value
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          {" "}
          <Link href="/invest">
            <div className="mt-4 md:mt-0 rounded-[6.51px] py-[5px] px-[20.36px] border-[#FFFFFF] border-[0.81px] font-[600] text-[13.77px] leading-[18.75px] text-[#FFFFFF]">
              Invest Now
            </div>
          </Link>
        </div>
      </div>
      <div className="p-[10px] flex flex-col gap-[10px]">
        <div className="flex flex-col">
          <p className="font-[600] text-[24px] leading-[14.84px] text-[#333333CC]">
            Transactions
          </p>
          {/* <div className="flex flex-row gap-[8px] items-center ">
            <p className="font-[700] text-[14px] leading-[14.84px] text-[#333333CC]">
              View More
            </p>
            <MdOutlineChevronRight />
          </div> */}
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className="mt-8"
          />
        </div>
      </div>
      <WithdrawModal
        onClose={closeWithdrawModal}
        visible={withdrawModalVisible}
      />
      <DepositModal onClose={closeDepositModal} visible={depositModalVisible} />
    </div>
  );
};

export default Page;
