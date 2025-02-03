import React from "react";
import { FaAngleDoubleRight, FaBookMedical, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "P.S.G College of Technology",
        qualification: "B.E (Automobile)",
        years: "2018 - 2022",
      },
      {
        university: "Dr. V. Genguswamy Naidu Matric HS School",
        qualification: "Secondary",
        years: "2016 - 2018",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Zuci Systems",
        position: "Senior Software Engineer",
        years: "2024 - Present",
      },
      {
        company: "Wipro Technologies",
        position: "Project Engineer",
        years: "2022 - 2024",
      },
    ],
  },
];

const getEducationData = () => {
  return qualificationData[0];
};

const getExperienceData = () => {
  return qualificationData[1];
};

const Qualifications = () => {
  return (
    <div className="my-5 mx-4 grid grid-cols-2 max-sm:grid-cols-1 w-full 
     max-md:mx-3 max-sm:mx-auto">
      <div>
        <div className="flex gap-x-4 items-center mb-6">
          <FaBriefcase className="text-md" />
          <h4 className="text-xl font-semibold max-md:text-lg">{getExperienceData().title}</h4>
        </div>
        <div className="flex flex-col gap-y-8">
          {getExperienceData().data.map((data, index) => {
            const { company, position, years } = data;
            return (
              <div key={index} className="flex flex-row gap-x-6 group">
                <div className="w-[1.6px] h-[80px] bg-slate-400 ml-2 relative">
                  <div className="w-[11px] h-[11px] absolute rounded-full bg-black -left-1 
                  group-hover:translate-y-[80px] transition-all duration-500"></div>
                </div>
                <div>
                  <div className="font-medium text-lg leading-none mb-3 max-lg:text-md">
                    {company}
                  </div>
                  <div className="text-md leading-none mb-2 max-lg:text-sm">{position}</div>
                  <div className="max-lg:text-sm">{years}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-sm:mt-5">
        <div className="flex gap-x-4 items-center mb-6">
          <FaGraduationCap className="text-xl " />
          <h4 className="text-xl font-semibold max-md:text-lg">{getEducationData().title}</h4>
        </div>
        <div className="flex flex-col gap-y-8">
          {getEducationData().data.map((data, index) => {
            const { university, qualification, years } = data;
            return (
              <div key={index} className="flex flex-row gap-x-6 group">
                <div className="w-[1.6px] h-[80px] bg-slate-400 ml-2 relative">
                  <div className="w-[11px] h-[11px] absolute rounded-full bg-black -left-1 
                  group-hover:translate-y-[80px] transition-all duration-500"></div>
                </div>
                <div>
                  <div className="font-medium text-lg leading-none mb-3 max-lg:text-md">
                    {university}
                  </div>
                  <div className="text-md leading-none mb-2 max-lg:text-sm">{qualification}</div>
                  <div className="text-md max-lg:text-sm">{years}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
