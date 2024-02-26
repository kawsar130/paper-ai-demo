import React from "react";

const CustomGrandiantMobile = () => {
  return (
    <div className="md:hidden flex justify-center p-2 px-4 bg-[rgba(0,0,0,.1)] rounded text-center">
      <div>
        <p className="text-slate-800"> 今日大纲 </p>
        <p className="font-bold text-[#dc8447] text-xl">3996 </p>
      </div>
      <div className="ml-16">
        <p className="text-slate-800"> 今日论文 </p>
        <p className="font-bold text-[#dc8447] text-xl">354 </p>
      </div>
    </div>
  );
};

export default CustomGrandiantMobile;
