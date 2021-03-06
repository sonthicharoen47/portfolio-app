import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrap = styled.div`
  display: grid;
  z-index: 1;
  height: 720px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 420px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #32cd32;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#000" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 550px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ContactForm = styled.form`
  width: 100%;
  margin-left: 10px;
`;

export const ContactLabel = styled.label`
  color: #ffa500;
  display: block;
  width: 10%;
  align-items: center;
`;

export const ContactInput = styled.input`
  color: #000;
  border: none;
  width: 60%;
  height: 80%;
  margin-left: 16px;
  font-size: 16px;
  padding-left: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const ContactMessage = styled.textarea`
  padding: 6px;
  width: 100%;
  height: 150px;
  font-size: 16px;
  color: #000;
  margin-bottom: 16px;
  margin-top: 10px;
  border-radius: 25px;
`;

export const ContactBtn = styled.input`
  border-radius: 50px;
  background: #ffa500;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #6a5acd;
    color: #ffa500;
    -webkit-text-stroke: 1px #ffa500;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  height: 32px;
`;

export const ContactMessageWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: block;
  width: 80%;
  text-align: center;
`;
