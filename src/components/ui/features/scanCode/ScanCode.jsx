import Image from "next/image";
import React from "react";

const ScanCode = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="padding-2 mx-8 mb-20 box-border text-center">
        <Image
          className="block w-40 mx-auto shadow-lg ring-1 ring-slate-300 rounded"
          src="/assets/ScanCode/mpd_logo_zs.jpg"
          alt="Scan Code 1"
          width={160}
          height={160}
        />
        <p className="mt-4">关注公众号，获取更多论文技巧</p>
      </div>
      <div className="w-40 padding-2 mx-8 mb-20 box-border text-center">
        <Image
          className="block shadow-lg ring-1 ring-slate-300 rounded"
          src="/assets/ScanCode/aipp_wx_group_0220.png"
          alt="Scan Code 2"
          width={160}
          height={160}
        />
        <p className="mt-4">扫码加入交流群</p>
      </div>
    </div>
  );
};

export default ScanCode;
