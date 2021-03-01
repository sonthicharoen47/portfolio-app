import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">how it work</FooterLink>
                <FooterLink to="/signin">testimola</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinkContainer> */}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                exositz
              </SocialLogo>

              <WebsiteRights>
                exosit © {new Date().getFullYear()}. All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/sonthicharoen47"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/kittikon-sonthicharoen-03378b207/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/sonthicharoen47"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
