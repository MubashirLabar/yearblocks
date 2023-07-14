import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import routes from "routes";

export interface HeaderType {
  title: string;
  link: string;
}

const headerLink: HeaderType[] = [
  {
    title: "My YearBlocks",
    link: routes.myYearBlock,
  },
  {
    title: "My DigiSigs",
    link: routes.myDigiSigs,
  },
  {
    title: "Sign a YearBlock",
    link: routes.signYearBlock,
  },
  {
    title: "About Us",
    link: routes.aboutUs,
  },
];

function Header() {
  const [expend, setExpend] = useState(false);
  return (
    <>
      <div className="bg-white w-full sticky left-0 right-0 top-0 hidden lg:flex justify-center h-20 border-solid border-b-[1px] border-gray-900/10 z-[999]">
        <div className="w-full max-w-8xl margins flex items-center">
          <div className="flex-1 flex items-center gap-x-4 xl:gap-x-8">
            <Link href={routes.home} className="-ml-7">
              <Image
                src="/images/logo.svg"
                width={224}
                height={224}
                alt="Logo"
              />
            </Link>
            <div className="flex items-center gap-x-6 xl:gap-x-8">
              {headerLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="animation text-base font-semibold text-service-900 hover:text-primary-700"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-6 xl:gap-x-8">
            <Link
              href={routes.login}
              className="animation text-base font-semibold text-service-900 hover:text-primary-700"
            >
              Login
            </Link>
            <Link href={routes.createYearBlock} className="buttonPrimary">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Small Header */}
      <div className="bg-white w-full sticky left-0 right-0 top-0 flex lg:hidden justify-center h-20 border-solid border-b-[1px] border-gray-900/10 z-[999]">
        <div className="w-full max-w-8xl margins flex items-center">
          <div className="flex-1 flex items-center gap-x-4 xl:gap-x-8">
            <Link href={routes.home} className="-ml-7">
              <Image
                src="/images/logo.svg"
                width={200}
                height={200}
                alt="Logo"
              />
            </Link>
          </div>
          <button
            className="text-[34px] text-service-900 cursor-pointer"
            onClick={() => setExpend(!expend)}
          >
            <IoIosMenu />
          </button>
        </div>
      </div>

      {/* For Tablet | Mobile Screen */}
      <Sidebar expend={expend} setExpend={setExpend} headerLink={headerLink} />
    </>
  );
}

export default Header;
