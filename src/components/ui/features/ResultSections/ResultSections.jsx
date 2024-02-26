import ResultOutline from "./ResultOutline";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import pen from "../../../../assets/svg/emptyPen.svg";
import Image from "next/image";

const ResultSections = ({
  selectedSubject,
  paperTitleText,
  isGenerated,
  regenerate,
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (isGenerated) {
      const countDown = async () => {
        for (let i = 0; i < 102; i++) {
          setPercentage(i);
          await delay(50);
        }
      };
      countDown();
    }
  }, [regenerate, isGenerated]);

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  return (
    <section className="flex flex-col items-center">
      <div className="text-center">
        <h2 className="inline-flex text-center items-center rounded-full px-4 py-1 text-main font-bold ring-inset ring-main">
          <span data-v-40e3685a="" className="text-base">
            {" "}
            编辑大纲，生成全文初稿{" "}
          </span>
        </h2>
      </div>
      <p className="mt-4 text-center text-gray-600">
        🔔 可增加、删减章节，修改章节内容{" "}
      </p>

      {isGenerated && (
        <div>
          {selectedSubject && paperTitleText.length ? (
            <div>
              <p className="mx-auto mt-8 text-center text-xl">
                {" "}
                题目： {paperTitleText}
              </p>
              <p className="mx-auto mt-4 text-center text-base">
                科目： {selectedSubject}
              </p>
            </div>
          ) : (
            <div className="py-10 flex flex-col items-center gap-5 opacity-50">
              <Image width={60} height={60} src={pen} alt="write" />
              <p>输入论文标题生成大纲</p>
            </div>
          )}
        </div>
      )}

      {/* Actual Result Page */}
      {isGenerated && (
        <div>
          {percentage < 101 ? (
            <div className="w-40 h-40 my-12 flex justify-center items-center">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
          ) : (
            <div className="w-[690px] mt-8 flex p-5 rounded-xl shadow-md border-[1px]">
              <ResultOutline />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ResultSections;
