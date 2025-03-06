import React from "react";

import TvSvg from "./svg/TvSvg";
import DLoadSvg from "./svg/DLoadSvg";
import Light from "./svg/Light";
import KidsSvg from "./svg/KidsSvg";

const svgClass = "w-16 h-16 max-lg:w-14 max-lg:h-14";
const REASONS = [
  {
    title: "Enjoy on your TV",
    subtitle:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    text: "TV",
    svg: <TvSvg className={svgClass} />,
  },
  {
    title: "Download your shows to watch offline",
    subtitle: "Save your favourites easily and always have something to watch.",
    text: "Download",
    svg: <DLoadSvg className={svgClass} />,
  },
  {
    title: "Watch everywhere",
    subtitle:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    text: "Light",
    svg: <Light cclassName={svgClass} />,
  },
  {
    title: "Create profiles for kids",
    subtitle:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    text: "Kids",
    svg: <KidsSvg className={svgClass} />,
  },
];
const Reasons = () => {
  return (
    <section className="container section mt-6">
      <h2 className="section-title">More reasons to join</h2>
      <ul
        className="grid grid-flow-col grid-cols-4 w-full gap-x-3 
      max-xl:grid-cols-2 max-xl:grid-rows-2 max-xl:gap-y-3
      max-md:grid-cols-1 max-md:grid-rows-4 max-md:gap-y-2"
      >
        {REASONS.map((reason, index) => {
          return (
            <li
              className="reason-card rounded-xl px-4 py-5 relative min-h-[270px] max-xl:py-4 max-xl:min-h-[200px] 
              max-md:min-h-[170px] max-md:py-2"
              key={index}
            >
              <h3 className="text-2xl font-medium mb-5 max-xl:mb-3 ">
                {reason.title}
              </h3>
              <p className="text-[14px] text-gray-300">{reason.subtitle}</p>
              <div className="flex items-center justify-end mt-2 absolute bottom-2 right-3">
                {reason.svg}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reasons;
