"use client";
import { ClipboardCheckIcon } from "lucide-react";
import React, { useState } from "react";

export const Export: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative cursor-pointer rounded-lg p-1">
      <div className="relative">
        <button
          className="mt-4 flex items-center space-x-1 rounded-lg border border-white/50 p-1 text-sm hover:bg-[#000000]/40"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span>Copy to Clipboard</span>
          <span>
            <ClipboardCheckIcon className="h-4 w-4" />
          </span>
        </button>
        {showTooltip && (
          <div className="absolute left-1/2 top-[calc(-100%-50px)] w-64 -translate-x-1/2 transform rounded-md bg-white px-2 py-1 text-center text-black opacity-100">
            This will copy the config file you require for your Stellock
            Integration
          </div>
        )}
      </div>
    </div>
  );
};
