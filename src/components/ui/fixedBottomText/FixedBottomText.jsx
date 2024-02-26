import React from "react";

const FixedBottomText = () => {
  return (
    <div className="fixed bottom-8 right-4 p-1 text-center ring-gray-100 ring-1 rounded bg-[#fff]">
      <div className="p-0.5 text-xs cursor-pointer text-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="mx-auto text-3xl text-slate-500 iconify iconify--mingcute"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="currentColor"
              d="M5 9a7 7 0 0 1 14 0v1.035c1.696.243 3 1.702 3 3.465v.25c0 1.775-1.531 3.331-3.332 3.248c-.74 2.12-2.622 3.549-4.653 3.911c-.47.172-1.026.091-1.515.091a1.5 1.5 0 0 1 0-3c.793 0 1.671-.115 2.207.609C16.003 17.992 17 16.689 17 15V9A5 5 0 0 0 7 9v6.25A1.75 1.75 0 0 1 5.25 17A3.25 3.25 0 0 1 2 13.75v-.25a3.5 3.5 0 0 1 3-3.465z"
            ></path>
          </g>
        </svg>
        <p>咨询客服</p>
        <p>商务合作</p>
      </div>
    </div>
  );
};

export default FixedBottomText;
