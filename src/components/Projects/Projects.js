import React from "react";
import Project from "./Project";
import { ProjectsContainer } from "./Project.styled";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project />
      <Project />
      <Project />
    </ProjectsContainer>
  );
};

export default Projects;
