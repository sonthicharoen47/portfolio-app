import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ToggleContainer,
} from "./InfoElements";
import { Button } from "../ButtonElements";
import useVisibility from "./useVisibility";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topline,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  tagId,
  tag,
}) => {
  const [Component, toggleVisibility] = useVisibility(tag, false);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={200}
                    primary={primary ? 1 : 0}
                    onClick={toggleVisibility}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        <ToggleContainer id={tagId}>{Component}</ToggleContainer>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
