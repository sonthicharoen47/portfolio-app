import React from "react";
//import img1 from "../../images/hobby/hobby-1.svg";
import {
  AboutContainer,
  AboutWrap,
  CardContainer,
  CardItem,
  CardIcon,
  CardH2,
  CardWrap,
  TopLine,
  Subtitle,
} from "./AboutElements";
import img1 from "../../images/hobby/hobby-1.svg";
import img2 from "../../images/hobby/hobby-2.svg";
import img3 from "../../images/hobby/hobby-3.svg";

const About = (lightBg) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id="aboutmore">
        <AboutWrap>
          <Subtitle>
            I'm 23 years old. I lived in Samutsakhon. I got the military
            exemption.
          </Subtitle>
          <CardContainer>
            <TopLine>Hobby</TopLine>
            <CardWrap>
              <CardItem>
                <CardIcon src={img1} />
                <CardH2>Games</CardH2>
              </CardItem>
              <CardItem>
                <CardIcon src={img3} />
                <CardH2>Football</CardH2>
              </CardItem>
              <CardItem>
                <CardIcon src={img2} />
                <CardH2>Reading</CardH2>
              </CardItem>
            </CardWrap>
          </CardContainer>
        </AboutWrap>
      </AboutContainer>
    </>
  );
};

export default About;
