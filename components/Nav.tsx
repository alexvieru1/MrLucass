"use client";
import Link from "next/link";
import {  ArrowLeftIcon } from "@heroicons/react/24/solid";


const Nav = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("etape");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-85 ">
      <div className="flex flex-wrap items-center justify-start mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-3xl text-white font-semibold hover:text-[#cda370]"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <Link href={"/etape"} onClick={handleClick} className=" text-3xl ml-8 font-semibold hover:text-[#cda370]">
          <span className="text-[#cda370] "> Mr.</span> Lucass
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
