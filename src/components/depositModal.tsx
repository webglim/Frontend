"use client";
import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import usa from "../../public/images/usa.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

type FormData = {
  amount: number;
};
type FormErrors = {
  amount?: string;
};
const DepositModal = ({ visible, onClose }: any) => {
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBTCWalletCopied, setIsBTCWalletCopied] = useState(false);
  const [isEthereumWalletCopied, setIsEthereumWalletCopied] = useState(false);
  const [isUSDTWalletCopied, setIsUSDTWalletCopied] = useState(false);
  const [isBNBWalletCopied, setIsBNBWalletCopied] = useState(false);
  const [isLiteWalletCopied, setIsLiteWalletCopied] = useState(false);
  const [isSolanaWalletCopied, setIsSolanaWalletCopied] = useState(false);
  const [isBNBsmartWalletCopied, setIsBNBsmartWalletCopied] = useState(false);
  const BTCWallet = "bc1qg0xghuz6t255704a82z0udyc4rhvpjp7txshml";
  const EthereumWallet = "0xd4278134CD4e6540F46aD4846cF8Cc16FE079aF2";
  const USDTWallet = "TBhZHJuCNAum4r8WHCKq3oAMUs2xifipNJ";
  const BNBWallet = "bnb1lcc2d98cdydjpxf9jrcwvav3qqf4fwctk9e8m3";
  const LiteWallet = "ltc1qs6wnvcfx6ayqarar93kk3eeje4eajtcwggf8s6";
  const SolanaWallet = "AqFvArcyxJ1Peib677jdzVc6CHYURK2o4Fg27djnnQeV";
  const BNBsmartWallet = "0xd4278134CD4e6540F46aD4846cF8Cc16FE079aF2";
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const handleBTCWalletCopyClick = () => {
    navigator.clipboard
      .writeText(BTCWallet)
      .then(() => setIsBTCWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const handleEthereumWalletCopyClick = () => {
    navigator.clipboard
      .writeText(EthereumWallet)
      .then(() => setIsEthereumWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const handleUSDTWalletCopyClick = () => {
    navigator.clipboard
      .writeText(USDTWallet)
      .then(() => setIsUSDTWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const handleBNBWalletCopyClick = () => {
    navigator.clipboard
      .writeText(BNBWallet)
      .then(() => setIsBNBWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const handleLiteWalletCopyClick = () => {
    navigator.clipboard
      .writeText(LiteWallet)
      .then(() => setIsLiteWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const handleSolanaWalletCopyClick = () => {
    navigator.clipboard
      .writeText(SolanaWallet)
      .then(() => setIsSolanaWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const handleBNBsmartWalletCopyClick = () => {
    navigator.clipboard
      .writeText(BNBsmartWallet)
      .then(() => setIsBNBsmartWalletCopied(true))
      .catch((err) => toast.error("Failed to copy to clipboard", err));
  };
  const [formData, setFormData] = useState<any>({
    amount: undefined,
  });
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    }
    return newErrors;
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // If the field is 'amount', convert the value to a number
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const token = await localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your authorization scheme
      },
    };
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://web-gold-limited-backend.onrender.com/api/v1/deposit",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("response.data", response);
        toast.success("Funds succssfully Deposited, awaiting confirmation");
        onClose();
        // router.push("/dashboard");
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
      setIsSubmitting(false);
    }
  };
  const walletData: any = {
    Bitcoin: {
      name: "Bitcoin",
      address: "bc1qg0xghuz6t255704a82z0udyc4rhvpjp7txshml",
      copyClick: handleBTCWalletCopyClick,
      isCopied: isBTCWalletCopied,
    },
    Ethereum: {
      name: "Ethereum",
      address: "0xd4278134CD4e6540F46aD4846cF8Cc16FE079aF2",
      copyClick: handleEthereumWalletCopyClick,
      isCopied: isEthereumWalletCopied,
    },
    USDT: {
      name: "USDT trc 20",
      address: "TBhZHJuCNAum4r8WHCKq3oAMUs2xifipNJ",
      copyClick: handleUSDTWalletCopyClick,
      isCopied: isUSDTWalletCopied,
    },
    BNB: {
      name: "BNB beacon chain",
      address: "bnb1lcc2d98cdydjpxf9jrcwvav3qqf4fwctk9e8m3",
      copyClick: handleBNBWalletCopyClick,
      isCopied: isBNBWalletCopied,
    },
    Litecoin: {
      name: "Litecoin",
      address: "ltc1qs6wnvcfx6ayqarar93kk3eeje4eajtcwggf8s6",
      copyClick: handleLiteWalletCopyClick,
      isCopied: isLiteWalletCopied,
    },
    Solana: {
      name: "Solana",
      address: "AqFvArcyxJ1Peib677jdzVc6CHYURK2o4Fg27djnnQeV",
      copyClick: handleSolanaWalletCopyClick,
      isCopied: isSolanaWalletCopied,
    },
    BNBsmart: {
      name: "BNB smart chain",
      address: "0xd4278134CD4e6540F46aD4846cF8Cc16FE079aF2",
      copyClick: handleBNBsmartWalletCopyClick,
      isCopied: isBNBsmartWalletCopied,
    },
  };
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        visible ? "visible" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white md:w-1/3 w-[95%] max-h-[80%] py-[14.83px] overflow-y-scroll md:px-[18.53px] px-[10px] rounded-[4px] md:gap-[33.36px] gap-[14px] z-10 flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="p-2 border rounded text-black"
          >
            <option value="" disabled>
              Select Cryptocurrency
            </option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="USDT">USDT trc 20</option>
            <option value="BNB">BNB beacon chain</option>
            <option value="Litecoin">Litecoin</option>
            <option value="Solana">Solana</option>
            <option value="BNBsmart">BNB smart chain</option>
          </select>

          <IoIosCloseCircleOutline
            className="text-[#4743C9] h-[24px] w-[24px] hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="bg-[#EDEFFF] py-[8px] px-[16px] rounded-[8px] items-center justify-between flex flex-col md:flex-row gap-2">
            <div className="font-[500] text-[24px] leading-[36px] text-[#2E2A39] flex flex-row w-full">
              <p>€</p>{" "}
              <input
                value={formData.amount || ""}
                name="amount"
                onChange={handleChange}
                type="number"
                className="bg-[#EDEFFF] w-full"
                placeholder={`0.00`}
                // min={minValue}
              />
            </div>

            <div className="bg-white rounded-[7.41px] px-[23.17px] md:h-[64px] flex flex-row justify-between items-center gap-[8px]">
              {/* <Image src={usa} alt="" /> */}
              <p className="text-[#4743C9] font-[700] text-[18px] leading-[27px]">
                Euros
              </p>
            </div>
          </div>
          {errors.amount && (
            <p className="text-red-600 text-[12px]">{errors.amount}</p>
          )}
          <div className="bg-[#EDEFFF] mt-4 p-[16px] rounded-[8px] justify-between flex flex-col gap-[18.53px]">
            <ul className="font-[500] list-disc text-[14.83px] leading-[22.24px] text-[#2E2A39] w-full pl-[16px]">
              <li>Instruction: Send money to wallet address</li>
            </ul>

            {selectedCurrency && (
              <div className="flex flex-col justify-between mt-4">
                <div>
                  <p className="font-[800] text-[14px] text-[#2E2A39]">
                    {walletData[selectedCurrency].name}
                  </p>
                  <p className="font-[800] text-[14px] text-[#2E2A39] break-words overflow-hidden">
                    {walletData[selectedCurrency].address}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <button
                    type="button"
                    onClick={walletData[selectedCurrency].copyClick}
                    className="py-1 px-2 rounded-md font-bold bg-[#4743C9] text-white text-[12px]"
                  >
                    {walletData[selectedCurrency].isCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#4743C9] rounded-[6.24px] py-[6.24px] px-[12.48px] h-[60px] text-white font-[700] text-[16.68px] leading-[25.02px] w-full mt-4"
          >
            {isSubmitting ? "Loading..." : "Fund Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositModal;
