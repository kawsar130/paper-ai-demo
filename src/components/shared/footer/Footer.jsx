import footerLinksData from "@/dummy/footerLinksData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-8">
        <div className="md:flex flex-wrap mt-8">
          {/* ONe */}
          <div className="flex-1 mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              {" "}
              官方博客{" "}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerLinksData.slice(0, 6).map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/article/${link.id}`}
                    target="_blank"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Two */}
          <div className="flex-1 mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              {" "}
              官方博客{" "}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerLinksData.slice(6, 12).map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/article/${link.id}`}
                    target="_blank"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* three */}
          <div className="mr-20 mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              {" "}
              友情链接{" "}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="https://openai.com/"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  OpenAI
                </Link>
              </li>
              <li>
                <Link
                  href="https://yiyan.baidu.com/"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  文心一言
                </Link>
              </li>
              <li>
                <Link
                  href="https://chatglm.cn/"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  智谱清言
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aigc.cn/"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  AIGC导航
                </Link>
              </li>
              <li>
                <Link
                  href="https://openi.cn/"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  OpenI - AI时代
                </Link>
              </li>
              <li>
                <Link
                  href="https://hao.logosc.cn/"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  神器集
                </Link>
              </li>
            </ul>
          </div>
          {/* four */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              {" "}
              使用帮助{" "}
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link
                  href="/article/faq"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  常见问题FAQ🔥
                </Link>
              </li>
              <li>
                <Link
                  href="/article/intro"
                  target="_blank"
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  如何使用AIPaperPass
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8">
          <div className="md:flex text-xs leading-5 text-gray-500">
            <div className="flex flex-wrap items-center">
              © 2024 AIPaperPass
              <Link href="/about" className="ml-2">
                {" "}
                关于我们{" "}
              </Link>
              <Link
                className="ml-2"
                href="https://beian.miit.gov.cn"
                target="_blank"
              >
                京ICP备2024042149号
              </Link>
            </div>
            <div className="flex items-center">
              <Image
                className="w-4 h-4 md:ml-2"
                src="/assets/footer/police.jpg"
                alt=""
                width={16}
                height={16}
              />
              <Link
                className="ml-1"
                href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802043865"
                rel="noreferrer"
                target="_blank"
              >
                京公网安备11010802043865
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
