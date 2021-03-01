import React from "react";
import { Button } from "./../HeroSection/HeroElements";
import {
  EducationContainer,
  EducationWrap,
  EducationH1,
  EducationBtnWrap,
} from "./educationElements";

const Education = () => {
  return (
    <>
      <EducationContainer>
        <EducationWrap>
          <EducationH1>
            Please do not hesitate to contact me if you have further questions.
          </EducationH1>
          <EducationBtnWrap>
            <Button
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact Now
            </Button>
          </EducationBtnWrap>
        </EducationWrap>
      </EducationContainer>
    </>
  );
};

export default Education;
