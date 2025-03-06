import React from "react";
import SignUp from "./SignUp";
import HeroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero-main-wrapper">
      <div className="hero-wrapper">
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute w-full h-full m-0">
            <div className="absolute inset-0 z-[2] hero-bg-gradient"></div>
            <img
              src={HeroImg}
              className="absolute h-auto w-full lg:h-auto lg:w-full"
            />
          </div>
        </div>
        <div className="flex-[1] flex-col z-[3]">
          <div
            className="xl:min-h-[min(80vh,50rem)] lg:min-h-[min(37rem)] min-h-[31rem] m-[-2rem_auto_0_auto] 
          flex flex-col w-full max-w-[120rem] justify-center p-[0_2rem_2rem_2rem]"
          >
            <div className="2xl:max-w-[41.75rem] xl:max-w-[36.75rem] lg:max-w-[31.75rem] md:max-w-[27rem] max-w-full flex flex-col mx-auto text-center self-center">
              <h1 className="w-full text-[2rem]/[125%] font-bold mb-2 xl:mb-4 2xl:mb-6 text-center lg:text-4xl/[125%] xl:text-[3rem]/[125%]">
                Unlimited movies, TV shows and more
              </h1>
              <p className="text-center text-lg xl:text-xl mb-4 lg:mb-6 xl:mb-8">
                Starts at ₹149. Cancel at any time.
              </p>
              <SignUp />
            </div>
          </div>
          <div className="overflow-x-hidden h-[6.25rem] z-[1] relative">
            <div>
              <div className="hero-curve lg:w-[150%] lg:left-[-25%] md:w-[180%] md:left-[40%] w-[200%] left-[50%]"></div>
            </div>
            <div className="lg:mt-5 md:mt-7 mt-[1.37em] relative z-[2] text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
