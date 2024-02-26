import React from "react";

const CustomGradiants = () => {
  return (
    <div className="flex fixed -z-[1] -top-96 -left-full md:-left-1/2">
      <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] "></div>
      <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
    </div>
  );
};

export default CustomGradiants;
