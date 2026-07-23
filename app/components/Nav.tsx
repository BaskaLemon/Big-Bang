import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-6 text-white px-12">
      <Link href={"/"} className="text-3xl font-extrabold font-bigbang">
        Big Bang
      </Link>
      <div className="flex space-x-5 text-gray-300 text-md font-medium items-center">
        <button className="flex items-center gap-2 bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-full border border-neutral-700">
          <span className="w-2 h-2 rounded-full bg-[#f5c52a]" />
          <span>All</span>
          <span className="text-[#f5c52a] font-semibold">52</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400 ml-0.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <Link href={"/"} className="hover:text-white">
          Home
        </Link>
        <Link href={"/maps"} className="hover:text-white">
          Maps
        </Link>
        <Link href={"/event"} className="hover:text-white">
          Event
        </Link>
        <Link href={"/suggest"} className="hover:text-white">
          Suggest
        </Link>
        <Link href={"/about"} className="hover:text-white">
          About
        </Link>
        <div className="flex items-center bg-neutral-800 rounded-full border border-neutral-700">
          <button className="px-2.5 py-1.5 text-sm font-semibold text-neutral-400 rounded-full">
            MN
          </button>
          <button className="px-2.5 py-1.5 text-sm font-semibold text-neutral-400 rounded-full">
            EN
          </button>
        </div>
        <Link
          href={"/signin"}
          className="border border-neutral-700 px-3 py-1.5 rounded-3xl ml-5 text-gray-50"
        >
          Sign in
        </Link>
        <Link
          href={"/profile"}
          className="rounded-full bg-[#f5c52a] px-3 py-1.5 text-black"
        >
          B
        </Link>
      </div>
    </div>
  );
};

export default Nav;
