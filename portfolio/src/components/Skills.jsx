import React from "react";
import { SKILLS_LIST } from "../constants";
import { GrTechnology } from "react-icons/gr";
import ToolTip from "./ToolTip";
import { FaDownload } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="my-6 mx-2">
      <div className="flex gap-x-4 items-center">
        <GrTechnology className="text-xl" />
        <h4 className="text-xl font-semibold max-md:text-lg">Tech Stack</h4>
      </div>
      <ul className="flex items-center w-full mt-4">
        {SKILLS_LIST.map((skill, index) => {
          return (
            <li key={index} className="p-2 mx-2 text-2xl relative group">
              {skill.icon}
              <p
                className="text-sm mt-3 bg-slate-800 hidden rounded-md px-2 py-1 text-white group-hover:block absolute 
              before:w-2 before:h-2 before:-top-1 before:left-2 before:bg-inherit before:absolute before:rotate-45"
              >
                {skill.name}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="mt-10">
        <a href="/src/assets/HARISH_RESUME.pdf" download="harish-resume">
          <button className="button-flex button" type="button">
            Download CV
            <FaDownload className="button-icon text-sm" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Skills;
