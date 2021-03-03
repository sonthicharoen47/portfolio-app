import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
  HeroImgWrap,
  HeroImg,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import img from "../../images/profile.jpg";
const HeroSection = (primary) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroImgWrap>
          <HeroImg src={img} />
        </HeroImgWrap>
        <HeroH1>Welcome to My Website</HeroH1>
        <HeroP>Hi!, My Name is Kittikon Sonthicharoen. :D</HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary={primary ? 1 : 0}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Contact Now! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
