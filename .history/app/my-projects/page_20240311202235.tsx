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
      {/* Title for the projects */}
      <h2 className="text-5xl text-white font-bold mb-8">My Projects</h2>

      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%] overflow-auto">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            // Make sure to include the `url` field in your Projects array
            url={project.url || "#"} // Fallback to '#' if `url` is not present
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
