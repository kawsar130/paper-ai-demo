const FixedTexttop = () => {
  return (
    <div className=" fixed top-20 left-4 md:flex p-1 px-4 bg-[rgba(0,0,0,.1)] rounded text-center">
      <div>
        <p className="text-slate-800"> 今日大纲 </p>
        <p className="font-bold text-[#dc8447] text-xl">5418 </p>
      </div>
      <div className="ml-4">
        <p className="text-slate-800"> 今日论文 </p>
        <p className="font-bold text-[#dc8447] text-xl">480 </p>
      </div>
    </div>
  );
};

export default FixedTexttop;
