import styled from "styled-components";

export const AboutContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  display: flex;
  flex-direction: column;
  height: 400px;
`;

export const AboutWrap = styled.div`
  display: grid;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  justify-content: center;
`;

export const CardContainer = styled.div`
  z-index: 1;
  color: #000;
  display: block;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;
`;

export const CardWrap = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`;

export const CardIcon = styled.img`
  max-width: 200px;
  height: 150px;
  justify-content: center;
  align-items: center;
  padding: 12px 12px 0 12px;
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  color: #6a5acd;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const CardItem = styled.div`
  background: #faebd7;
  border-radius: 50px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TopLine = styled.h1`
  font-size: 2rem;
  color: #01bf71;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
`;
