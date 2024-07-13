import React from "react";
import Tag from "./tag";

const MainContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-10 p-20 px-40 pt-72 text-center font-jakarta">
      <Tag />
      <div className="flex flex-col items-start justify-center text-[58px] font-semibold">
        <div>
          Craft <span className="text-[#346bff]">magical</span>
        </div>{" "}
        <div>
          onchain <span className="text-[#346bff]">experiences.</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-3 font-semibold text-white hover:from-blue-500 hover:to-blue-700">
          Go to Github
        </button>
        <button className="rounded-lg bg-gray-200 hover:bg-gray-300 px-4 py-2 text-black flex items-center gap-2">
          <div className="bg-green-400 h-2 w-2 rounded-full" />
          View Live Demo
        </button>
      </div>
    </div>
  );
};

export default MainContent;
