import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #000;
`;

export const AboutWrap = styled.div`
  color: #000;
  display: block;
  margin-left: 50px;
  margin-right: 50px;
  padding: 25px;
`;

export const AboutHeading = styled.h1`
  text-align: center;
  font-size: 32px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 700px;
`;
export const AboutItems = styled.div`
  display: b;
  margin: 25px;
  margin-bottom: 25px;
  background: #01bf71;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AboutH1 = styled.h1`
  color: #000;
  font-size: 24px;
  outline: 1px solid #01fb71;
`;

export const AboutP = styled.p`
  color: #fff;
  font-size: 16px;
  max-width: 160px;
`;

export const CardWrap = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
`;

export const CardItems = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const CardImg = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const CardP = styled.p`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 16px;
`;
