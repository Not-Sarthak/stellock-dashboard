"use client";

import React, { useState } from "react";
import { Sparkles, WalletCardsIcon } from "lucide-react";
import ColorPicker from "@/components/color-picker";
import { Explore } from "@/components/customization-cards/explore";
import { Export } from "@/components/customization-cards/export";
import { Whitelabel } from "@/components/customization-cards/whitelabel";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {
  FaGoogle,
  FaDiscord,
  FaTiktok,
  FaApple
} from "react-icons/fa";
import {
  Mail,
  MessageSquare,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";


type AuthOptions = {
  email: boolean;
  sms: boolean;
  google: boolean;
  apple: boolean;
  twitter: boolean;
  discord: boolean;
  github: boolean;
  linkedin: boolean;
  tiktok: boolean;
};

type WalletOptions = {
  external: boolean;
};

const authIcons: Record<keyof AuthOptions, JSX.Element> = {
  email: <Mail className="h-6 w-6" />,
  sms: <MessageSquare className="h-6 w-6" />,
  google: <FaGoogle className="h-6 w-6" />,
  apple: <FaApple className="h-6 w-6" />,
  twitter: <Twitter className="h-6 w-6" />,
  discord: <FaDiscord className="h-6 w-6" />,
  github: <Github className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
  tiktok: <FaTiktok className="h-6 w-6" />,
};

export default function Overview() {
  const [selectedColors, setSelectedColors] = useState<{
    background: string;
    accent: string;
  }>({
    background: "",
    accent: "",
  });

  const [authOptions, setAuthOptions] = useState<AuthOptions>({
    email: false,
    sms: false,
    google: false,
    apple: false,
    twitter: false,
    discord: false,
    github: false,
    linkedin: false,
    tiktok: false,
  });

  const [walletOptions, setWalletOptions] = useState<WalletOptions>({
    external: false,
  });

  const [showAuth, setShowAuth] = useState(true);
  const [showWallets, setShowWallets] = useState(true);

  const handleColorSelect = (background: string, accent: string) => {
    setSelectedColors({ background, accent });
  };

  const handleAuthOptionChange = (option: keyof AuthOptions) => {
    setAuthOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleWalletOptionChange = (option: keyof WalletOptions) => {
    setWalletOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <div className="flex h-screen max-w-screen-2xl flex-col space-y-12 p-8 text-white">
      <div className="flex flex-col space-y-6">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Customization
        </h1>
      </div>
      <div className="flex h-[90vh] w-full justify-between rounded-3xl border-[2px] border-[#636365]">
        <div className="w-3/4 border-r-[2px] border-[#636365] font-cal font-bold dark:text-white">
          <div className="z-10 h-full w-full rounded-l-3xl bg-black bg-[radial-gradient(#646368_1px,transparent_1px)] [background-size:24px_24px]">
            <div className="flex w-full justify-center gap-8 py-20">
              <div className="flex w-[20vw] cursor-pointer flex-col gap-8 rounded-lg border-[1px] border-[#636365] bg-[#232325] p-4">
                <div className="flex justify-center">Log in or sign up</div>
                <div className="flex items-center justify-center gap-4">
                  <Image src={logo} alt="logo" width={80} height={80} />
                  <div className="text-4xl">Stellock</div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {showAuth && (
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.keys(authOptions).map(
                          (option) =>
                            authOptions[option as keyof AuthOptions] && (
                              <div
                                key={option}
                                className="flex items-center rounded-md border px-4 py-2"
                              >
                                <div className="flex items-center justify-center gap-2">
                                  {authIcons[option as keyof AuthOptions]}
                                  {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                                </div>
                              </div>
                            ),
                        )}
                      </div>
                    </>
                  )}
                  {showWallets && walletOptions.external && (
                    <div className="flex items-center justify-between rounded-md border-[1px] border-white/60 px-4 py-2">
                      <div className="flex items-center gap-2">
                        <WalletCardsIcon />
                        Continue with a wallet
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <Explore />
                <Export />
                <Whitelabel />
              </div>
            </div>
          </div>
        </div>
        <div className="text-md flex w-1/4 flex-col rounded-3xl p-4 font-cal font-bold dark:text-white">
          <div className="flex items-center gap-2 border-b-[1px] border-[#636365] pb-2">
            <Sparkles />
            <div>Customize</div>
          </div>
          <div className="mt-4 flex w-full items-center gap-20">
            <ColorPicker onColorSelect={handleColorSelect} />
          </div>
          <div className="mt-16 flex items-center gap-2 border-b-[1px] border-[#636365] pb-2">
            <Sparkles />
            <div>Authentication</div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="hidden"
                checked={showAuth}
                onChange={() => setShowAuth(!showAuth)}
              />
              <div
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1 ${
                  showAuth ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    showAuth ? "translate-x-6 transform" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div className="mt-4 grid grid-cols-2 items-center gap-2">
            {Object.keys(authOptions).map((option) => (
              <label
                key={option}
                className="flex items-center rounded-md border-[1px] border-white/60 p-2"
              >
                <input
                  type="checkbox"
                  className="mr-2 bg-transparent checked:border-[1px] checked:border-transparent checked:bg-transparent checked:text-black"
                  checked={authOptions[option as keyof AuthOptions]}
                  onChange={() =>
                    handleAuthOptionChange(option as keyof AuthOptions)
                  }
                  disabled={!showAuth}
                />
                <div className="flex items-center gap-2">
                  {authIcons[option as keyof AuthOptions]}
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </div>
              </label>
            ))}
          </div>
          <div className="mt-16 flex items-center gap-2 border-b-[1px] border-[#636365] pb-2">
            <Sparkles />
            <div>Wallets</div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="hidden"
                checked={showWallets}
                onChange={() => setShowWallets(!showWallets)}
              />
              <div
                className={`flex h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1 ${
                  showWallets ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-4 w-4 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${
                    showWallets ? "translate-x-6 transform" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {Object.keys(walletOptions).map((option) => (
              <label
                key={option}
                className="flex items-center rounded-md border-[1px] border-white/60 p-2"
              >
                <input
                  type="checkbox"
                  className="mr-2 bg-transparent checked:border-[1px] checked:border-transparent checked:bg-transparent checked:text-black"
                  checked={walletOptions[option as keyof WalletOptions]}
                  onChange={() =>
                    handleWalletOptionChange(option as keyof WalletOptions)
                  }
                  disabled={!showWallets}
                />
                <div className="flex items-center gap-2">
                  <WalletCardsIcon className="h-6 w-6" />
                  {option.charAt(0).toUpperCase() + option.slice(1)} Wallets
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
