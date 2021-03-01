import aboutImg from "../../images/aboutme.svg";
import educateImg from "./../../images/educate.svg";
import skillImg from "./../../images/skill.svg";
import contactImg from "./../../images/contact.svg";

//about me
export const homeObjOne = {
  id: "about",
  lightBg: false,
  topline: "",
  headline: "About Me",
  description:
    "   My name is Kittikon. I am new graduate(2020). I am looking for a job as a web developer.",
  buttonLabel: "See more",
  imgStart: false,
  img: aboutImg,
  alt: "about me",
  primary: true,
  darkText: false,
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
};

//my skills
export const homeObjThree = {
  id: "skills",
  lightBg: false,
  topline: "",
  headline: "My Skills",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "See more",
  imgStart: false,
  img: skillImg,
  alt: "my skills",
  primary: true,
  darkText: false,
};

//contact
export const homeObjFour = {
  id: "contact",
  lightBg: false,
  topline: "",
  headline: "Contact",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Contact Now",
  imgStart: false,
  img: contactImg,
  alt: "contact",
  primary: true,
  darkText: false,
  dark: false,
};
