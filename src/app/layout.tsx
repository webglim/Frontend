"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Web Gold Limited",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tawkMessengerRef = useRef<any>();
  return (
    <html lang="en">
      <body className={"overflow-x-hidden"}>
        <ToastContainer />
        {children}
        <TawkMessengerReact
          propertyId="66e9d06c4cbc4814f7d996b7"
          widgetId="default"
          useRef={tawkMessengerRef}
          // useRef={tawkMessengerRef}
        />
      </body>
    </html>
  );
}
