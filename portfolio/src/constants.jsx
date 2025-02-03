import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { PiProjectorScreenChart } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { SiSpring } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import LiClone from "./assets/projects/linked-in.png";
import Blog from "./assets/projects/blog.png";
import Portfolio from "./assets/projects/portfolio.png";

export const NAV_LINKS = [
  {
    path: "#home",
    text: "Home",
    icon: <FiHome />,
  },
  {
    path: "#projects",
    text: "Projects",
    icon: <PiProjectorScreenChart />,
  },
  {
    path: "#about",
    text: "About",
    icon: <AiOutlineUser />,
  },
  // {
  //   path: "#contact",
  //   text: "Contact",
  //   icon: <VscSend />,
  // },
];

export const SKILLS_LIST = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Spring",
    icon: <SiSpring />,
  },
  {
    name: "ReactJs",
    icon: <FaReact />,
  },
  {
    name: "AWS",
    icon: <FaAws />,
  },
  {
    name: "MySQL",
    icon: <DiMysql />,
  },
];

export const HERO_CONTENT = `Full stack developer with 3 years of experience in React, 
Java, AWS, and databases like MySQL, and MongoDB, 
focused on building scalable web apps and driving business growth.`;

export const PROJECTS = [
  {
    title: "LinkedIn Clone",
    image: LiClone,
    description: "Full Stack clone with React and Java",
    githubLink: "/",
    previewLink: "/",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    githubLink: "/",
    previewLink: "/",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: Blog,
    githubLink: "/",
    previewLink: "/",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
];

export const CONTACT = {
  address: "Coimbatore, India ",
  email: "harishsanjay012@gmail.com",
};
