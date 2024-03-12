"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex flex-col items-center justify-center bg-center bg-cover"
    >
      <h2 className="text-5xl text-white font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] overflow-auto">
        {Projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <ProjectCard
              title={project.title}
              text={project.text}
              image={project.src}
            />
            {/* Button below the card */}
            <a
              href={project.url || "#"} // Fallback to '#' if `url` is not present
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
