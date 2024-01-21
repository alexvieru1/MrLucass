"use client"
// NavLink.tsx
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, setNavbarOpen }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: "smooth",
      });
    }
    setNavbarOpen(false);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-yellow-900"
    >
      {title}
    </a>
  );
};

export default NavLink;

