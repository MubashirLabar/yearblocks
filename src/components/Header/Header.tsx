import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

export interface HeaderType {
  title: string;
  link: string;
}

const headerLink: HeaderType[] = [
  {
    title: "Mint YearBlock",
    link: "/",
  },
  {
    title: "Create DigiSig",
    link: "/",
  },
  {
    title: "Sign In",
    link: "/",
  },
];

function Header() {
  return (
    <div className="bg-white sticky left-0 right-0 top-0 flex items-center px-6 h-20 border-solid border-b-[1px] border-gray-200 z-[99]">
      <div className="flex-1 flex items-center gap-x-10">
        <div className="font-[600] text-2xl text-black">YearBlocks</div>
        <div className="flex items-center gap-x-10">
          {headerLink.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-base text-service-800"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="/"
          className="text-xl text-service-900 px-5 py-2 border-l-[1px] border-gray-500"
        >
          <FaSearch />
        </Link>
        <Link
          href="/"
          className="text-xl text-service-900 pl-5 py-2 border-l-[1px] border-gray-500"
        >
          <FaShoppingBag />
        </Link>
      </div>
    </div>
  );
}

export default Header;
