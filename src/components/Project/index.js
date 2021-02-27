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
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/000.svg";

const Project = () => {
  return (
    <>
      <ProjectContainer id="myprojects">
        <ProjectH1>Our project</ProjectH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectIcon src={Icon1} />
            <ProjectH2>My grudate project</ProjectH2>
            <ProjectP>we help u</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Icon2} />
            <ProjectH2>My Project web</ProjectH2>
            <ProjectP>we help u</ProjectP>
          </ProjectCard>
          <ProjectCard>
            <ProjectIcon src={Icon3} />
            <ProjectH2>React+NodeJs</ProjectH2>
            <ProjectP>we help u</ProjectP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;
