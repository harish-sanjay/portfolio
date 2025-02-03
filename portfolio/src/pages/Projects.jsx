import React from "react";
import Carousel from "../components/Carousel";
import { PROJECTS } from "../constants";
import { DiGithub } from "react-icons/di";

const Projects = () => {
  return (
    <section className="container section max-md:px-8 px-4" id="projects">
      <div className="grid grid-flow-row justify-between grid-cols-[1fr_0.5fr] max-md:grid-cols-1 items-center w-full">
        <div>
          <Carousel
            items={PROJECTS.map((project, index) => {
              return (
                <div
                  className="relative rounded-lg border-2 shadow-md min-h-[40vh] "
                  key={index}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[90%] h-[400px] object-contain mx-auto"
                  />
                  <div className="absolute bg-slate-800/60 bottom-3 w-full mx-auto text-white py-2">
                    <h4 className="text-center font-medium text-xl w-full">
                      {project.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          />
        </div>
        <div className="flex items-center justify-center min-h-[40vh]">
          <h1 className="text-3xl text-center mb-6 max-lg:text-2xl align-middle">
            Latest Projects
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
