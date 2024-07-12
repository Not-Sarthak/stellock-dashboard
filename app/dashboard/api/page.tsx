"use client";
import CreatePostButton from "@/components/create-post-button";
import { Copy, CopyCheck } from "lucide-react";
import React, { useState } from "react";

const Users: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const appIdInput = document.getElementById("app-id") as HTMLInputElement;
    if (appIdInput) {
      navigator.clipboard
        .writeText(appIdInput.value)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); 
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className="space-y-10 p-6 text-white">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">API Keys</h2>
        <div className="text-white/60">
          Use these values to initialize your Stellock clients.{" "}
          <span className="text-blue-500 hover:underline">Learn more</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">App ID</div>
        <div>
          The app ID is used to associate your Stellock client with this app.
        </div>
        <div className="flex items-center gap-2">
          <input
            id="app-id"
            placeholder="clybuj0xp06yzn7x7q9nng2wv"
            className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-1/2 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            onClick={copyToClipboard}
            className="rounded-md border-[0.5px] border-white/60 p-1"
          >
            {isCopied ? (
              <CopyCheck className="text-green-500 transition-transform duration-200" />
            ) : (
              <Copy className="text-white/60 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">App Secret</div>
        <div>
          Stellock does not store your app secret. Please be sure to store it
          somewhere safe.
        </div>
        <div className="flex items-center gap-2">
          <input
            placeholder="································································"
            className="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-1/2 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button className="rounded-md border-[0.5px] border-white/60 bg-red-100 p-1 px-2 text-red-500">
            Reset
          </button>
        </div>
      </div>
      <div className="h-[1px] w-3/4 bg-white/60" />
      <div className="flex flex-col gap-2">
        <div className="font-semibold">Clients</div>
        <div className="flex items-center">
          <div className="flex items-end gap-4">
            Create additional clients that share users with this app, but
            override the base app settings.
            <CreatePostButton />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-3/4 bg-white/60" />
    </div>
  );
};

export default Users;
