import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { HERO_CONTENT } from "../constants";

const iconStyles = "fill-[var(--title-color)] text-xl";
const iconTextContainer =
  "flex items-center justify-start gap-x-3 my-3 max-md:text-md";

const infoData = [
  {
    icon: <FaRegUser className={iconStyles} />,
    text: "Harish Sanjay",
  },
  {
    icon: <MdOutlineEmail className={iconStyles} />,
    text: "harishsanjay012@gmail.com",
  },
  {
    icon: <GoHome className={iconStyles} />,
    text: "Coimbatore, India",
  },
];

const PersonalInfo = () => {
  return (
    <div className="m-5 max-md:mx-3 max-sm:mx-auto">
      <h4 className="text-xl font-semibold max-md:text-lg mb-4">
        Professional Web developer
      </h4>
      <p className="text-md">{HERO_CONTENT}</p>
      <ul className="mt-2">
        {infoData.map((info, index) => {
          return (
            <li className="flex gap-x-3 items-center h-9" key={index}>
              {info.icon}
              <p className={iconTextContainer}>{info.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonalInfo;
