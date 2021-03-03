import React from "react";
import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectCard,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from "./ProjectElements";
import Icon1 from "../../images/project/project-1.svg";
import Icon2 from "../../images/project/project-2.svg";
import Icon3 from "../../images/project/project-3.svg";

const Project = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectH1>My Projects</ProjectH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectIcon src={Icon1} />
            <ProjectH2>Grudate Project</ProjectH2>
            <ProjectP>Machine learning</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Icon2} />
            <ProjectH2>Portfolio Web</ProjectH2>
            <ProjectP>This Website</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Icon3} />
            <ProjectH2>Tutorial</ProjectH2>
            <ProjectP>Todo App</ProjectP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;
