import Image from "next/image";
import React from "react";

const FreePaperGenerator = () => {
  return (
    <div className="md:p-8 flex min-h-screen bg-gray-200">
      <div className="flex-1">
        <div className="p-8 bg-white md:mr-8 shadow-lg rounded-md">
          <p className="mb-4 text-sm text-gray-700 text-right">
            <a href="/article/306" target="_blank">
              点击立即使用 AIPaperPass🚀
            </a>
          </p>
          <h1 className="text-2xl text-center mb-4 text-gray-700">
            网页版论文生成器（该网站是免费的）
          </h1>
          <p className="text-center text-gray-400 text-sm">
            2024-02-26 20:19:15
          </p>
          <p className="mt-6 text-gray-600 text-sm ml-8">
            关键词：论文生成器、AI自动写作工具、获取AI、AI写作免费、草图网络
          </p>
          <article className="mt-4 leading-8">
            <p style={{ textAlign: "left" }}>
              这里有几个可以免费自动生成毕业论文的网站：
            </p>

            <ol className="list-decimal list-inside ml-8">
              <li>
                <strong>AIPaperPass</strong>:
                这是一个智能写作工具，可以快速生成满足用户需求的文本内容。它拥有丰富的写作模板，可以帮助用户轻松撰写文章、新闻报道、广告文案等。
              </li>
              <li>
                <strong>小冰写作</strong>:
                这是专为写作科学研究论文设计的AI工具。它可以根据实验数据和结果自动生成论文的方法、结果和讨论部分。
              </li>
              <li>
                <strong>Adu写作</strong>:
                这是一个智能写作助手，可以帮助用户快速生成论文的大纲和段落。用户只需输入关键词和主题，它将自动生成相关段落和论据。
              </li>
              <li>
                <strong>小爱写作</strong>:
                这是专为学术写作设计的AI写作工具，可以帮助用户生成论文的引言、方法、结果和讨论部分。
              </li>
              <li>
                <strong>触点站</strong>:
                这是一个综合性的AI人工智能内容生成平台，结合了AI绘画和AI文章自动生成。它提供多种功能，如AI绘画、AI原创文章、AI视频、AI设计、AI声音等，可以满足各种内容创作需求。用户只需输入关键词或主题，即可快速生成高质量的文章、设计或视频。
              </li>
            </ol>
            <p style={{ textAlign: "left" }}>
              请注意，虽然这些工具可以辅助论文写作，但它们生成的内容可能不完全符合学术规范和标准。因此，建议在使用这些工具时，用户仍需仔细审查和修改生成的内容，以确保论文的质量和原创性。
            </p>
          </article>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="w-72 sticky top-4">
          <a href="/article/306" target="_blank">
            <Image
              width={200}
              height={200}
              src="https://aijar-content.yyjjtech.com/poster_half.png"
              alt="aipaperpass"
              className="rounded shadow-lg hover:shadow-none"
            />
          </a>
          <div className="mt-8 mb-4 p-4 rounded bg-white">
            <h4 className="mb-4 font-bold text-gray-700">特色文章</h4>
            <div>
              <p className="mb-4 text-sm text-gray-600 hover:underline">
                <a href="/article/306" target="_blank">
                  AI写作助手易于使用吗？ gpt人工智能写作论文
                </a>
              </p>
              {/* 在这里添加更多特色文章 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePaperGenerator;
