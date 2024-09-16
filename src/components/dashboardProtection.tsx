"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function DashboardProtection({ children }: any) {
  const router = useRouter();
  const [authenticationChecked, setAuthenticationChecked] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!isAuthenticated) {
        router.push(`/login`);
      }
    };
    checkAuthentication();
  }, []);

  const getUserToken = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        return token;
      }
      return localStorage.getItem("token");
    }
    return null;
  };
  const isAuthenticated = !!getUserToken();

  return <>{children}</>;
}
