"use client";

import { useRef, useState } from "react";
import ResultSections from "../ResultSections/ResultSections";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Switch } from "@headlessui/react";
import subjectData from "@/dummy/subjectData";

// Printing the populated data for demonstration
subjectData.forEach((subject) => {
  console.log(subject.title);
  console.log(subject.items);
});
const SwitchVersion = () => {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [paperTitleText, setPaperTitleText] = useState("");
  const [hoveredItem, setHoveredItem] = useState("");
  const [isGenerated, setIsGenerate] = useState(false);
  const [regenerate, setRegenerate] = useState(false);
  const resultRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setOpen(false);
  };

  const toggleSubmenu = (item) => {
    setHoveredItem(item);
  };

  const handleDropdownClick = () => {
    if (open) setHoveredItem("");
    setOpen(!open);
  };

  const generatePaper = () => {
    if (!isGenerated) setIsGenerate(true);
    else setRegenerate(!regenerate);
    scrollToResult();
  };

  const closeOpenDropdown = (e) => {
    if (open && !dropdownRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenDropdown);

  const scrollToResult = () => resultRef.current.scrollIntoView();

  return (
    <>
      <section className="scroll-mt-14 pb-10 select-none">
        <div className="mx-auto mt-16 md:mt-20 px-4 sm:px-6 md:max-w-[52rem] md:px-4">
          <div className="md:flex">
            <div className=" max-w-40 w-full mr-4 relative">
              <div
                onClick={handleDropdownClick}
                className="border flex items-center justify-between border-solid border-gray-200 px-3 py-2 text-sm"
              >
                <p className="truncate">{selectedSubject || "Select"}</p>
                <FaAngleDown />
              </div>
              {open && (
                <div
                  ref={dropdownRef}
                  className="absolute z-20 w-[400px] h-[220px]"
                >
                  <div className="relative">
                    <div className="absolute top-0">
                      <ul className="flex flex-col text-sm  overflow-y-auto h-[220px] w-[200px] bg-white shadow-xl overflow-x-visible z-50">
                        {/* For each list item, add onMouseEnter and onMouseLeave to toggle visibility */}
                        {subjectData.map((subject, index) => (
                          <li
                            key={subject.title}
                            className={`flex justify-between group items-center cursor-pointer py-2 px-3 ${
                              subject.title === hoveredItem && "bg-gray-200"
                            }`}
                            onMouseEnter={() => toggleSubmenu(subject.title)}
                            onMouseLeave={() => toggleSubmenu(subject.title)}
                          >
                            {(index + 1).toString().padStart(2, "0")}{" "}
                            {subject.title} <FaAngleRight />
                            {subject.title === hoveredItem && (
                              <ul
                                className={`absolute top-0 flex flex-col text-sm  overflow-y-auto h-[220px] w-[200px] bg-white shadow-xl overflow-x-visible z-50 left-[200px] ${
                                  hoveredItem === subject.title
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
                              >
                                {subject?.items?.map((item) => (
                                  <li
                                    onClick={() => handleSelectSubject(item)}
                                    className={`py-2 px-3 flex justify-between hover:bg-gray-100 ${
                                      item === selectedSubject && "bg-gray-100"
                                    }`}
                                    key={item}
                                  >
                                    <p className="truncate w-11/12">{item}</p>{" "}
                                    {item === selectedSubject && (
                                      <span className="text-main">
                                        &#10004;
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                  value={paperTitleText}
                  onChange={(event) => {
                    setPaperTitleText(event.target.value);
                  }}
                  placeholder="Please enter the complete paper title"
                  type="text"
                  className="w-full outline-0 px-3 "
                  maxLength={50}
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-14">
                  {/* Button for clearing Paper Title Text */}
                  <button
                    onClick={() => setPaperTitleText("")}
                    className="bg-gray-300 text-white rounded-full text-xs w-4 text-center hover:bg-gray-500 transition-all duration-500"
                  >
                    &#10006;
                  </button>
                </div>
                <div className="absolute top-1/2 right-5 -translate-y-1/2 text-xs">
                  {paperTitleText.length}/50
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
                <input
                  type="radio"
                  id="radio1"
                  value="1"
                  name="version"
                  defaultChecked
                />
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
              onClick={generatePaper}
              className={`bg-main transition-all duration-500 rounded-full text-white px-20 py-4 ${
                selectedSubject && paperTitleText
                  ? "bg-main"
                  : "bg-main-light cursor-not-allowed"
              }`}
              type="button"
              disabled={!(selectedSubject && paperTitleText)}
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
      <div ref={resultRef}>
        <ResultSections
          selectedSubject={selectedSubject}
          paperTitleText={paperTitleText}
          isGenerated={isGenerated}
          regenerate={regenerate}
        />
      </div>
    </>
  );
};

export default SwitchVersion;
