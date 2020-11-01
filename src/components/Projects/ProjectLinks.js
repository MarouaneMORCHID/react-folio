import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { StyledProjectLinks } from "./Project.styled";

const ProjectLinks = () => {
  return (
    <StyledProjectLinks>
      <a href="hoog.com">
        <FaGithub size={24} style={{ cursor: "pointer" }} />
      </a>
      <a href="link.com">
        <FiExternalLink size={24} />
      </a>
    </StyledProjectLinks>
  );
};

export default ProjectLinks;
