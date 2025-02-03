import React from "react";
import SocialLinks from "../components/SocialLinks";
import Data from "../components/Data";

const Home = () => {
  return (
    <section className="section" id="home">
      <div className="container grid">
        <div
          className="grid grid-cols-[116px_repeat(2,1fr)] items-center gap-x-8 
            pt-24 max-lg:grid-cols-[100px_repeat(2,1fr)] max-lg:gap-x-6
            max-md:grid-cols-[0.5fr,3fr] max-md:pt-0"
        >
          <SocialLinks />
          <div
            className="w-[300px] h-[300px] bg-[url('src/assets/profile.jpg')] bg-cover 
                order-1 bg-center bg-no-repeat justify-self-center 
                  shadow-[inset_0_0_0_9px_rgb(255_255_255/30%)] animate-profile-animate
                   max-lg:w-[250px] max-lg:h-[250px] 
                   max-lg:shadow-[inset_0_0_0_8px_rgb(255_255_255/30%)]
                   max-md:order-[initial] max-md:justify-self-[initial]
                   max-md:shadow-[inset_0_0_0_6px_rgb(255_255_255/30%)]
                   max-md:w-[200px] max-md:h-[200px] 
                   max-xs:w-[180px] max-xs:h-[180px]"
                   
          ></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
