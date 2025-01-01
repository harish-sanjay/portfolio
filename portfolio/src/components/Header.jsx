import React, { useState } from "react";
import { NAV_LINKS } from "../constants";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-[100] bg-[var(--container-color)] w-full max-md:bottom-0 max-md:top-[initial]">
      <nav className="container flex justify-between items-center h-16 gap-x-4 max-md:h-12">
        <a href="index.html" className="text-[var(--title-color)] font-medium">
          Sanjay
        </a>
        <div className={`max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:bg-[var(--container-color)] 
        max-md:rounded-t-3xl max-md:pt-8 max-md:px-6 max-md:pb-16 max-md:shadow-[0_-1px_4px_rgba(0,0,0,0.2)] 
        max-xs:pt-8 max-xs:px-2 max-xs:pb-16 ${displayMenu ? 'max-md:block': 'max-md:hidden'}`}>
          <ul className="flex gap-x-8 max-md:grid max-md:grid-cols-3 gap-8">
            {NAV_LINKS.map((value, index) => {
              return (
                <li key={index}>
                  <a href={value.path} className="flex items-center flex-col gap-y-1 text-sm font-medium
                    text-[var(--title-color)] duration-300
                    hover:text-[var(--title-color-dark)] ">                  
                    <span className="hidden max-md:block max-md:text-lg">{value.icon}</span> {/* Icon */}
                    <span>{value.text}</span> {/* Text */}
                  </a>
                </li>
              );
            })}
          </ul>
          <button type="button" className={`md:hidden cursor-pointer max-md:absolute max-md:right-6 max-md:bottom-3 max-md:text-xl
            text-[var(--title-color)] hover:text-[var(--title-color-dark)]`} onClick={()=> {setDisplayMenu(false)}}>
            <LiaTimesSolid />
          </button>
        </div>
        <button type="button" className={`md:hidden cursor-pointer max-md:text-xl`} onClick={()=> {setDisplayMenu(true)}}>
          <AiOutlineAppstore />
        </button>
      </nav>
    </header>
  );
};

export default Header;
