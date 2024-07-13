import { PinRightIcon } from "@radix-ui/react-icons";
import React from "react";

export const Explore: React.FC = () => {
  return (
    <div className="relative rounded-lg p-1 cursor-pointer">
        <button className="mt-4 flex items-center space-x-1 rounded-lg border-[1px] border-white/50 p-1 text-sm hover:bg-[#000000]/40">
          <span>Explore the Docs</span>
          <span>
            <PinRightIcon className="h-4 w-4" />
          </span>
        </button>
    </div>
  );
};
