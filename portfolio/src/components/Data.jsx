import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";

const Data = () => {
  return (
    <div className="max-md:col-span-3 max-md:pt-8">
      <h1
        className="text-5xl mb-4 max-lg:text-[2.6rem] 
      max-md:text-4xl max-sm:text-3xl"
      >
        Harish Sanjay
      </h1>
      <h3
        className="pl-[75px] font-medium mb-4 relative text-xl
      before:w-16 before:h-[1px] before:absolute before:content-['']
       before:bg-slate-900
      before:left-0 before:top-3 max-lg:text-lg max-lg:mb-3 
      max-lg:before:w-14 max-lg:pl-16 text-md"
      >
        Full Stack Developer
      </h3>
      <p className="mb-11 max-lg:max-w-[initial] max-lg:mb-8">
        Creative Designer and Website developer
      </p>
      <a className="button button-flex">
        Say Hello
        <LiaTelegramPlane className="button-icon" />
      </a>
    </div>
  );
};

export default Data;
