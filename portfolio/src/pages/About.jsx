import React, { useState } from "react";

import AboutLinks from "../components/AboutLinks";
import PersonalInfo from "../components/PersonalInfo";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";

const About = () => {
  const [selectedTab, setSelectedTab] = useState("personal");

  return (
    <section className="container section max-md:px-8 px-4" id="about">
      <div className="grid grid-flow-row grid-cols-[0.5fr_1fr] max-md:grid-cols-1 justify-center  w-full">
        <div className="flex items-center justify-center min-h-[40vh]">
          <h1 className="text-3xl text-center mb-6 max-lg:text-2xl align-middle">
            About Me
          </h1>
        </div>
        <div>
          <AboutLinks setSelectedTab={setSelectedTab} />
          {selectedTab === "personal" && <PersonalInfo />}
          {selectedTab === "qualifications" && <Qualifications />}
          {selectedTab === "skills" && <Skills />}
        </div>
      </div>
    </section>
  );
};

export default About;
