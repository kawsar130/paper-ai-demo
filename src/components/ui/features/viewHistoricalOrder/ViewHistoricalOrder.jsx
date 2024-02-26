import React from "react";

const ViewHistoricalOrder = () => {
  return (
    <section>
      <div className="mt-14 flex justify-center items-center text-main text-center text-sm hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="mr-1 iconify iconify--ph"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m68-84a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12V72a12 12 0 0 1 24 0v44h44a12 12 0 0 1 12 12"
          ></path>
        </svg>{" "}
        查看历史订单{" "}
      </div>

      <div
        className="mx-8 md:max-w-[40rem] md:mx-auto mt-12 mb-12 text-[13px] bg-[rgba(0,0,0,.05)] p-[10px] round-[8px] font-[#999] rounded-lg"
        data-v-fd5e8757=""
      >
        <p className="mb-[5px]" data-v-fd5e8757="">
          {" "}
          🔔 AIPaperPass保护论文隐私安全，采用阿里云安全储存，加密传输，
          <span className="text-main" data-v-fd5e8757="">
            不泄漏任何论文信息
          </span>
          。{" "}
        </p>
        <p className="mb-[5px]" data-v-fd5e8757="">
          {" "}
          🔔 AIPaperPass保留论文24小时，
          <span className="text-main" data-v-fd5e8757="">
            生成24小时后自动删除，请及时下载保存，下载后您可以手动删除
          </span>
          。{" "}
        </p>
        <p className="mb-[5px]" data-v-fd5e8757="">
          {" "}
          🔔
          所有生成的论文模板只可用作格式参考，不允许抄袭、代写、直接挪用等行为。{" "}
        </p>
      </div>
    </section>
  );
};

export default ViewHistoricalOrder;
