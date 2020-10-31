import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { StyledProjectLinks } from "./Project.styled";

const ProjectLinks = () => {
  return (
    <StyledProjectLinks>
      <FaGithub />
      <FiExternalLink />
    </StyledProjectLinks>
  );
};

export default ProjectLinks;
