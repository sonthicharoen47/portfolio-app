import React from "react";
import {
  AboutContainer,
  AboutWrap,
  AboutHeading,
  AboutItems,
  AboutH1,
  AboutP,
  CardWrap,
  CardItems,
  CardImg,
  CardP,
} from "./AboutElements";
import Navbar from "../Navbar";

import img1 from "./../../images/svg-1.svg";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <AboutWrap>
          <AboutHeading>About Me</AboutHeading>
          <AboutItems>
            <AboutH1>Intro</AboutH1>
            <AboutP>
              Hi' my name is kittikon Sonthicharoen. I'm 23 years old. I lived
              in Samutsakhon. I am new graduate. I'm looking for a job as web
              developer.
            </AboutP>
          </AboutItems>
          <AboutItems>
            <AboutH1>My Hobby</AboutH1>
            <CardWrap>
              <CardItems>
                <CardImg src={img1} />
                <CardP>Hello</CardP>
              </CardItems>
              <CardItems>
                <CardImg src={img1} />
                <CardP>Hello</CardP>
              </CardItems>
              <CardItems>
                <CardImg src={img1} />
                <CardP>Hello</CardP>
              </CardItems>
            </CardWrap>
          </AboutItems>
        </AboutWrap>
      </AboutContainer>
    </>
  );
};

export default About;
