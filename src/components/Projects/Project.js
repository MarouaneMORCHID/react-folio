import React from "react";
import { CgGames } from "react-icons/cg";
import {
  ProjectAbstract,
  ProjectCategory,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectTools,
  StyledProject,
  Tool,
} from "./Project.styled";
import ProjectLinks from "./ProjectLinks";

const Project = ({ pair, category, title, abstract, tools, git, link }) => {
  return (
    <StyledProject>
      <ProjectInfo pair={pair}>
        <ProjectCategory>
          <CgGames size={32} />
          <span> Unity Game Development</span>
        </ProjectCategory>
        <ProjectTitle> Third Person Biodiversity Game</ProjectTitle>
        <ProjectAbstract>
          This project Eu magna esse cupidatat consectetur laborum excepteur
          fugiat tempor sunt incididunt Lorem laborum cupidatat. Eiusmod ut duis
          reprehenderit excepteur reprehenderit sit fugiat dolor. Duis officia
          veniam excepteur min
        </ProjectAbstract>
        <ProjectTools>
          <Tool>React</Tool>
          <Tool>GraphQL</Tool>
          <Tool>Java</Tool>
          <Tool>Java</Tool>
          <Tool>Java</Tool>
        </ProjectTools>
        <ProjectLinks />
      </ProjectInfo>
      <ProjectImage src="profil.png" alt="leke" />
    </StyledProject>
  );
};

export default Project;
