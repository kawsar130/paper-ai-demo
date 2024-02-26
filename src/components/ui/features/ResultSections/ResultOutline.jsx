import resultData from "@/dummy/resultData";
import Image from "next/image";
import document from "../../../../assets/svg/document.svg";
import pen from "../../../../assets/svg/pen.svg";
import bin from "../../../../assets/svg/bin.svg";
import arrowRight from "../../../../assets/svg/arrow-right.svg";
import { useEffect, useState } from "react";

const ResultOutline = () => {
  const [openedChapters, setOpenedChapters] = useState([]);

  const { chapters } = resultData;

  useEffect(() => {
    setOpenedChapters(chapters.map((chapter) => chapter.title));
  }, [chapters]);

  const handleChapterExpansion = (chapter) => {
    if (openedChapters.includes(chapter)) {
      let updatedChapters = openedChapters.filter((item) => item !== chapter);
      setOpenedChapters(updatedChapters);
    } else {
      setOpenedChapters([...openedChapters, chapter]);
    }
  };

  return (
    <section className="flex flex-col gap-1 w-full text-gray-700">
      {chapters.map((chapter) => (
        <div key={chapter.title} className="transition-all duration-500">
          <div className="p-2.5 hover:bg-gray-100 w-full transition-all duration-300 flex justify-between items-center">
            {/* Chapter title */}
            <div className="flex items-center gap-3">
              <Image
                onClick={() => handleChapterExpansion(chapter.title)}
                src={arrowRight}
                alt="expand"
                className={`transition-transform duration-300 ${
                  openedChapters.includes(chapter.title)
                    ? "rotate-90"
                    : "rotate-0"
                }`}
              />
              <p className="font-bold">{chapter.title}</p>
            </div>

            {/* Action button group */}
            <div className="flex items-center gap-1.5">
              <Image title="Add chapter" src={document} alt="Add" />
              <Image title="Edit chapter name" src={pen} alt="Edit" />
              <Image title="Delete chapter" src={bin} alt="Delete" />
            </div>
          </div>

          {/* Chapters Section */}
          <div
            className={`transition-all ease-linear overflow-hidden relative duration-300 max-h-0 ${
              openedChapters.includes(chapter.title) && "max-h-[500px]"
            }`}
          >
            {chapter.sections.map((section, index) => (
              <div key={section.number} className="transition-all duration-500">
                <div className="p-2.5 hover:bg-gray-100 w-full transition-all duration-300 flex justify-between items-center pl-12">
                  {/* section title */}
                  <div className="flex flex-col gap-2 w-10/12">
                    <div className="flex items-center gap-2 font-bold">
                      <p>{index + 1}.</p>
                      <p className="font-bold">{section.title}</p>
                    </div>

                    <div className="text-gray-500 text-sm">
                      <p>{section.summary}</p>
                    </div>
                  </div>

                  {/* Action button group */}
                  <div className="flex items-center gap-1.5">
                    <Image title="Add" src={document} alt="Add" />
                    <Image title="Edit" src={pen} alt="Edit" />
                    <Image title="Delete" src={bin} alt="Delete" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResultOutline;
