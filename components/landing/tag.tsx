import React from "react";

const Tag: React.FC = () => {
  return (
    <div className="border-[1px] border-black rounded-full w-64 px-2 py-1 text-sm flex justify-center">
      <button className="mr-2 rounded-lg">New SDKs ⚡️</button>
      <a href="#" className="text-black underline">
        Read more →
      </a>
    </div>
  );
};

export default Tag;
