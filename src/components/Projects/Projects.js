import React from "react";
import Project from "./Project";
import { ProjectsContainer } from "./Project.styled";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project pair />
      <Project />
      <Project pair />
      <Project />
      <Project pair />
      <Project />
    </ProjectsContainer>
  );
};

export default Projects;
