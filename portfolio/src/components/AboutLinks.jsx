import React, { useState } from "react";

const buttonClases =
  "py-[10px] w-full rounded-full transition ease-out duration-500 text-md";
const activeButtonClasses = "bg-[var(--title-color)] text-white";

const AboutLinks = ({ setSelectedTab }) => {
  const [activeLink, setActiveLink] = useState("personal");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setSelectedTab(link);
  };

  return (
    <div className="flex border-[rgb(50, 50, 50)] border-2 rounded-full items-center justify-evenly max-sm:flex-col
    max-sm:border-none max-sm:w-[60%] max-sm:mx-auto">
      <button
        type="button"
        onClick={() => {
          handleSetActiveLink("personal");
        }}
        className={` ${buttonClases} ${
          activeLink === "personal" && activeButtonClasses
        }`}
      >
        Personal Info
      </button>
      <button
        type="button"
        onClick={() => {
          handleSetActiveLink("qualifications");
        }}
        className={` ${buttonClases} ${
          activeLink === "qualifications" && activeButtonClasses
        }`}
      >
        Qualifications
      </button>
      <button
        type="button"
        onClick={() => {
          handleSetActiveLink("skills");
        }}
        className={` ${buttonClases} ${
          activeLink === "skills" && activeButtonClasses
        }`}
      >
        Skills
      </button>
    </div>
  );
};

export default AboutLinks;
