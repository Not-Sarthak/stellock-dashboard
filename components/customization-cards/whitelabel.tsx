import { PinRightIcon } from "@radix-ui/react-icons";
import React from "react";

export const Whitelabel: React.FC = () => {
  return (
    <div className="relative cursor-pointer rounded-lg p-[1px]">
      <button className="mt-4 flex items-center space-x-1 rounded-lg border-[1px] border-white/50 p-1 text-sm hover:bg-[#000000]/40">
        <span>Talk to sales</span>
        <span>
          <PinRightIcon className="h-4 w-4" />
        </span>
      </button>
    </div>
  );
};
