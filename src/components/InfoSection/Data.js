import aboutImg from "../../images/aboutme.svg";
import educateImg from "./../../images/educate.svg";
import skillImg from "./../../images/skill.svg";

import About from "./../About";
import Education from "./../Education";
import Skill from "./../Skill";

//about me
export const homeObjOne = {
  id: "about",
  lightBg: true,
  topline: "",
  headline: "About Me",
  description:
    "   My name is Kittikon. I am new graduate(2020). I am looking for a job as a web developer.",
  buttonLabel: "See more",
  imgStart: false,
  img: aboutImg,
  alt: "about me",
  primary: true,
  darkText: true,
  tagId: "aboutmore",
  tag: <About />,
};

//education
export const homeObjTwo = {
  id: "education",
  lightBg: false,
  topline: "",
  headline: "Education",
  description:
    "I graduated with bachelor's degree in Computer Engineering from Kasetsart University Kamphaeng Saen Campus.",
  buttonLabel: "See more",
  imgStart: true,
  img: educateImg,
  alt: "education",
  primary: false,
  darkText: false,
  tagId: "educationmore",
  tag: <Education />,
};

//my skills
export const homeObjThree = {
  id: "skills",
  lightBg: true,
  topline: "",
  headline: "My Skills",
  description:
    "My Skills are basic to middle, but i'm a fast learning and having continual improvement. ",
  buttonLabel: "See more",
  imgStart: false,
  img: skillImg,
  alt: "my skills",
  primary: true,
  darkText: true,
  tagId: "skillmore",
  tag: <Skill />,
};
