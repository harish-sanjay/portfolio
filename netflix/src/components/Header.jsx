import React from "react";
import NetflixLogo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center py-6">
        <img src={NetflixLogo} width={130} alt="netflix-logo" />
        <nav>
          <ul className="flex gap-x-3 items-center">
            <li>
              <a href="/">
                <button className="border-2 text-white px-5 py-[0.4rem] rounded-md text-sm">
                  English
                </button>
              </a>
            </li>
            <li>
              <a href="/">
                <button className="bg-primary border-primary border text-white px-5 py-[0.4rem] rounded-md text-sm">
                  Sign In
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
