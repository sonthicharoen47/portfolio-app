import styled from "styled-components";

export const SkillContainer = styled.div`
  height: 400px;
`;

export const SkillWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const SkillCard = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50px;
  margin-left: 50px;
  margin-right: 50px;
  background: #000;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillH1 = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #fff;
  height: 15%;
  margin-top: 10px;
`;

export const SkillH2 = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  width: 15%;
  color: #fff;
  height: 20%;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  height: 80px;
`;

export const SkillProcess = styled.div`
  width: 60%;
  background: #fff;
  height: 20%;
  margin-left: 16px;
  border-radius: 50px;
`;
export const SkillValue = styled.div`
  width: ${({ value }) => (value ? `${value}%` : "0%")};
  background: #ffa500;
  height: 100%;
  border-radius: 50px;
`;

export const SkillPercent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 20%;
  font-size: 20px;
`;

export const PercentP = styled.h2`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  display: flex;
`;
