import React from "react";
import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className="max-w-3/4 mx-auto px-16 space-y-8 flex flex-col items-center">
      {[...projects].reverse().map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
