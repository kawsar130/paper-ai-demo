import React from "react";

const Banner = () => {
  return (
    <section className="overflow-hidden md:px-5">
      <div className="mx-auto max-w-[60rem] md:pt-12 md:px-3">
        <div className="pt-16 md:col-span-7 md:pt-0">
          <div className="mx-auto sm:px-6 md:max-w-2xl">
            <h1 className="md:mt-16 font-display text-5xl md:text-5xl font-extrabold text-center font-sans">
              {" "}
              AI PaperPass{" "}
            </h1>
            <h1 className="mt-6 font-display text-lg text-center text-[#333]">
              {" "}
              AI一键智造 助你PaperPass{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
