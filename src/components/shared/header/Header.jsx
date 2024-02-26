import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-12 fixed z-[1000] top-0">
      <header className="h-full flex justify-between items-center px-4 border-b border-gray-200 bg-[#fff]">
        <div className="flex-shrink-0 flex items-center hover:cursor-pointer">
          <Image
            src="/assets/header/logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <div className="text-gray-600 text-xl font-extrabold px-[5px] py-[2px]">
            AIPaperPass
            <span className="text-xs">.com</span>
            <span className="relative top-[-1px] ml-2 text-[0.9rem] font-normal">
              AI论文写作平台
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center">
            <div className="mr-6 hover:text-main cursor-pointer">范文样例</div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
