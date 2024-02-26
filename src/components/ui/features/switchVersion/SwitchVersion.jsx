"use client";

import { useState } from "react";
import ResultSections from "../ResultSections/ResultSections";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Switch } from "@headlessui/react";

const SwitchVersion = () => {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [hoveredItem, setHoveredItem] = useState('');

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setOpen(false);
  };

  const toggleSubmenu = (item) => {
    setHoveredItem(item === hoveredItem ? '' : item);
  };

  return (
    <>
      <section className="scroll-mt-14 pb-10">
        <div className="mx-auto mt-16 md:mt-20 px-4 sm:px-6 md:max-w-[52rem] md:px-4">
          <div className="md:flex">
            <div className=" max-w-40 w-full mr-4 relative">
              <div
                onClick={() => setOpen(!open)}
                className="border flex items-center justify-between border-solid border-gray-200 px-3 py-2 text-sm"
              >
                {selectedSubject || 'Select'}
                <FaAngleDown />
              </div>
              {open && (
                <div
                  className={`absolute top-full bg-white shadow-xl h-[200px] rounded-lg px-3 py-5 w-full`}
                >

                  <ul className="flex flex-col gap-3 text-sm ">
                    {/* For each list item, add onMouseEnter and onMouseLeave to toggle visibility */}
                    <li
                      className="flex justify-between relative group items-center cursor-pointer"
                      onMouseEnter={() => toggleSubmenu('math')}
                      onMouseLeave={() => toggleSubmenu('')}
                    >
                      數學 <FaAngleRight />
                      <ul className={`absolute bg-white border-l border-solid border-gray-400 ${hoveredItem === 'math' ? 'opacity-100' : 'opacity-0'
                        } -right-[145px] -top-5 shadow-xl h-[200px] rounded-lg px-3 py-5`}>
                        <li>0101 高等數學</li>
                        <li>0101 中等數學</li>
                        <li>0101 低等數學</li>
                      </ul>
                    </li>

                  </ul>
                </div>
              )}

            </div>

            <div className="relative mt-2 md:mt-0 flex-1">
              <div className="flex items-center gap-2 absolute -top-8 right-0 text-[#d4a11c] text-sm">
                <GoArrowSwitch />
                <p>Switch to version 4.0</p>
                <AiFillQuestionCircle />
              </div>
              <div className="border relative border-solid border-gray-200 py-2  text-sm">
                <input
                  placeholder="Please enter the complete paper title"
                  type="text"
                  className="w-full outline-0 px-3 "
                />
                <div className="absolute top-1/2 right-5 -translate-y-1/2 text-xs">
                  5/50
                </div>
              </div>
            </div>
          </div>

          {/* Radio Buttons for Version Selection */}
          <div
            className="text-sm"
            style={{
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "flex-start",
              gap: "8px 12px",
              marginTop: "1rem",
            }}
          >
            <div className="">
              <label htmlFor="radio1">
                <input type="radio" id="radio1" value="1" name="version" />
                <span className="inline-block ml-3">专科/本科(约1万字)</span>
              </label>
            </div>
            <div className="">
              <label htmlFor="radio2">
                <input type="radio" id="radio2" value="2" name="version" />
                <span className="inline-block ml-3"> 本科(约2万字) </span>
              </label>
            </div>
            <div className="">
              <label htmlFor="radio3">
                <input type="radio" id="radio3" value="3" name="version" />
                <span className="inline-block ml-3"> 研究生(约3万字) </span>
              </label>
            </div>
            <div className="">
              <label htmlFor="radio4">
                <input type="radio" id="radio4" value="4" name="version" />
                <span className="inline-block ml-3">
                  {" "}
                  在职(约3万字*2个版本){" "}
                </span>
              </label>
            </div>
            <div className="">
              <label htmlFor="radio5">
                <input type="radio" id="radio5" value="5" name="version" />
                <span className="inline-block ml-3"> 期刊论文(约5千字) </span>
              </label>
            </div>
          </div>

          {/* Button for generating outline */}
          <div className="mt-12 mx-auto relative text-center">
            <button
              className="bg-main rounded-full text-white px-20 py-4"
              type="button"
              disabled
            >
              生成大纲
            </button>
            <div className="flex items-center justify-center mt-4">
              <div
                role="switch"
                aria-checked="false"
                className="n-switch n-switch--round n-switch--rubber-band"
                tabIndex="0"
              >
                {/* Switch toggle */}
              </div>
              <div className="flex items-center hover:cursor-pointer">
                <div>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-6 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
                <span className="ml-1 text-[#666]">使用三级大纲</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="ml-1 text-base text-[#999] hover:cursor-pointer iconify iconify--material-symbols"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  {/* SVG icon */}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result sections */}
      <ResultSections />
    </>
  );
};

export default SwitchVersion;
