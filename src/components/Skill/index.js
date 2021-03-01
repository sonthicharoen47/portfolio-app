import React from "react";
import {
  SkillContainer,
  SkillWrap,
  SkillCard,
  SkillH1,
  SkillH2,
  CardItem,
  SkillProcess,
  SkillPercent,
  SkillValue,
  PercentP,
} from "./skillElements";
const Skill = (value) => {
  const data = {
    html: 40,
    css: 30,
    es6: 60,
    sql: 40,
    node: 60,
    react: 20,
    git: 40,
  };
  return (
    <>
      <SkillContainer>
        <SkillWrap>
          <SkillCard>
            <SkillH1>Programming Language</SkillH1>
            <CardItem>
              <SkillH2>HTML</SkillH2>
              <SkillProcess>
                <SkillValue value={data.html} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.html}%</PercentP>
              </SkillPercent>
            </CardItem>
            <CardItem>
              <SkillH2>CSS</SkillH2>
              <SkillProcess>
                <SkillValue value={data.css} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.css}%</PercentP>
              </SkillPercent>
            </CardItem>
            <CardItem>
              <SkillH2>ES6</SkillH2>
              <SkillProcess>
                <SkillValue value={data.es6} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.es6}%</PercentP>
              </SkillPercent>
            </CardItem>
            <CardItem>
              <SkillH2>SQL</SkillH2>
              <SkillProcess>
                <SkillValue value={data.sql} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.sql}%</PercentP>
              </SkillPercent>
            </CardItem>
          </SkillCard>
          <SkillCard>
            <SkillH1>Framework & Library</SkillH1>
            <CardItem>
              <SkillH2>NodeJs</SkillH2>
              <SkillProcess>
                <SkillValue value={data.node} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.node}%</PercentP>
              </SkillPercent>
            </CardItem>

            <CardItem>
              <SkillH2>React</SkillH2>
              <SkillProcess>
                <SkillValue value={data.react} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.react}%</PercentP>
              </SkillPercent>
            </CardItem>
            <CardItem>
              <SkillH2>Git</SkillH2>
              <SkillProcess>
                <SkillValue value={data.git} />
              </SkillProcess>
              <SkillPercent>
                <PercentP>{data.git}%</PercentP>
              </SkillPercent>
            </CardItem>
          </SkillCard>
        </SkillWrap>
      </SkillContainer>
    </>
  );
};

export default Skill;
