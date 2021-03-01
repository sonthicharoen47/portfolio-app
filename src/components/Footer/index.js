import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
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
                exosit © {new Date().getFullYear()}All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="//https://brittanychiang.com/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Github">
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
