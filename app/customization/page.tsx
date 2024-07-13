"use client";

import React, { useState } from "react";
import { Sparkles, WalletCardsIcon } from "lucide-react";
import ColorPicker from "@/components/color-picker";
import { Explore } from "@/components/customization-cards/explore";
import { Export } from "@/components/customization-cards/export";
import { Whitelabel } from "@/components/customization-cards/whitelabel";
import Image from "next/image";

import google from "@/public/socials/google.svg";
import apple from "@/public/socials/apple.svg";
import twitter from "@/public/socials/twitter.svg";
import discord from "@/public/socials/discord.svg";
import linkedin from "@/public/socials/linkedin.svg";
import github from "@/public/socials/github.svg";

type AuthOptions = {
  google: boolean;
  apple: boolean;
  twitter: boolean;
  discord: boolean;
  github: boolean;
  linkedin: boolean;
};

type WalletOptions = {
  external: boolean;
};

const authIcons: Record<keyof AuthOptions, JSX.Element> = {
  google: <Image src={google} className="h-6 w-6" alt="Google" width={6} height={6}/>,
  apple: <Image src={apple} className="h-6 w-6" alt="Apple" width={6} height={6}/>,
  twitter: <Image src={twitter} className="h-6 w-6" alt="Twitter" width={6} height={6}/>,
  discord: <Image src={discord} className="h-6 w-6" alt="Discord" width={6} height={6}/>,
  github: <Image src={github} className="h-6 w-6" alt="Github" width={6} height={6}/>,
  linkedin: <Image src={linkedin} className="h-6 w-6" alt="LinkedIn" width={6} height={6}/>,
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
    google: true,
    apple: false,
    twitter: false,
    discord: false,
    github: true,
    linkedin: false,
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login logic here
  };

  return (
    <div
      className="flex h-screen max-w-screen-2xl flex-col space-y-12 p-8 text-white"
      style={{ backgroundColor: selectedColors.background }}
    >
      <div className="flex flex-col">
        <h1 className="font-cal text-3xl font-bold dark:text-white">
          Customization
        </h1>
      </div>
      <div className="flex h-[90vh] w-full justify-between rounded-3xl border-[2px] border-[#636365]">
        <div className="w-3/4 border-r-[2px] border-[#636365] font-cal dark:text-white">
          {/* bg-[radial-gradient(#646368_1px,transparent_1px)] */}
          {/* [background-size:24px_24px] */}
          <div className="z-10 relative h-full w-full rounded-l-3xl bg-black">
            <div className="flex w-full justify-center gap-8 pt-20">
              <div className="flex w-[20vw] cursor-pointer flex-col gap-8 rounded-lg border-[1px] border-[#636365] bg-white p-4 text-black">
                <div className="mt-4 flex justify-center font-semibold">
                  Log in or sign up
                </div>
                <div className="flex flex-col gap-2">
                  {showAuth && (
                    <>
                      <form onSubmit={handleLogin}>
                        <div className="mb-4">
                          <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="sarthak@example.com"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="******"
                            required
                          />
                        </div>
                        <div className="mb-4 flex items-center justify-between">
                          <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded-md bg-[#0f172a] px-4 py-2 text-white"
                          style={{
                            backgroundColor: selectedColors.accent,
                            color: "white",
                          }}
                        >
                          Login
                        </button>
                      </form>
                      <div className="my-4 flex items-center justify-center">
                        <div className="mr-3 flex-grow border-t border-gray-300"></div>
                        <span className="text-gray-500">OR</span>
                        <div className="ml-3 flex-grow border-t border-gray-300"></div>
                      </div>
                      <div className="flex w-full flex-wrap items-center justify-center">
                        <div className="flex flex-wrap items-center gap-4">
                          {Object.keys(authOptions).map(
                            (option) =>
                              authOptions[option as keyof AuthOptions] && (
                                <button
                                  key={option}
                                  onClick={() => handleSocialLogin(option)}
                                  className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-black bg-white text-white"
                                >
                                  {authIcons[option as keyof AuthOptions]}
                                </button>
                              ),
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  {showWallets && walletOptions.external && (
                    <>
                      <div className="my-4 flex items-center justify-center">
                        <div className="mr-3 flex-grow border-t border-gray-300"></div>
                        <span className="text-gray-500">OR</span>
                        <div className="ml-3 flex-grow border-t border-gray-300"></div>
                      </div>
                      <div className="flex items-center justify-center rounded-md bg-[#0f172a] px-4 py-2 text-white">
                        <div className="flex items-center gap-2">
                          <WalletCardsIcon />
                          Continue with a wallet
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute flex gap-2 items-center bottom-4 right-4">
              <Explore />
              <Export />
              <Whitelabel />
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
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(authOptions).map((option) => (
              <label
                key={option}
                className="flex items-center gap-4 rounded-md p-2"
              >
                <input
                  type="checkbox"
                  className="bg-transparent checked:border-[1px] checked:border-transparent checked:bg-transparent checked:text-black"
                  checked={authOptions[option as keyof AuthOptions]}
                  onChange={() =>
                    handleAuthOptionChange(option as keyof AuthOptions)
                  }
                  disabled={!showAuth}
                />
                <div className="flex items-center gap-2 rounded-full bg-white p-1">
                  {authIcons[option as keyof AuthOptions]}
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
                className="flex w-full items-center gap-4 rounded-md"
              >
                <input
                  type="checkbox"
                  className="bg-transparent checked:border-[1px] checked:border-transparent checked:bg-transparent checked:text-black"
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
