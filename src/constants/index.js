import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const LEGEND_CONTENT = `A proficient Full-Stack Developer with over 3+ years of experience in creating robust and intuitive web applications, covering both front-end interfaces and back-end functionality. I’m skilled in a wide range of technologies, including Ruby on Rails, React, TypeScript, HTML/CSS, PostgreSQL, and MySQL, with a focus on delivering seamless user experiences and reliable, scalable backend systems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including Ruby on Rails, React, MySQL, and PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Nov. 2022 - Oct. 2024",
    role: "Full Stack Developer",
    company: "Edutech Global",
    description: `Designed, implemented, and tested API endpoints crucial to Studio’s mobile application`,
    technologies: ["Ruby", "Ruby on Rails", "Javascript", "React.js", "PostgreSQL"],
  },
  {
    year: "Dec. 2021 - Apr. 2024",
    role: "Code Reviewer",
    company: "Microverse (Part-Time)",
    description: `Helped over 980 students debug their codes and understand the technical concepts`,
    technologies: ["Ruby", "Ruby on Rails", "Javascript", "React.js", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Medical Clinic Website",
    image: project1,
    description:
      "A clinical website that consists of a receptionist portal & doctor portal which has a single login page for both portals, Receptionists can register a new patient & perform CRUD operations, and Doctors can view registered patients & view the graph that represents the number of patients registered vs days.",
    technologies: ["Ruby", "Ruby on Rails", "PostgreSQL"]
  },
  {
    title: "To-Do List App",
    image: project2,
    description:
      "A TO DO List App Using vanilla JavaScript, HTML and CSS. In this JavaScript Project I used the Local Storage to store the task list in the web browser, so that if you close and restart the browser it will still display your saved tasks.",
    technologies: ["Javascript", "HTML", "CSS"]
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Ruby", "Ruby on Rails", "Javascript", "React.js", "PostgreSQL"]
  },
  {
    title: "Real Estate Website",
    image: project4,
    description:
      "This is an apartment webapp that allows a user to sign up, log in, and make leases on particular apartments.",
    technologies: ["Ruby", "Ruby on Rails", "Javascript", "React.js", "Redux", "PostgreSQL"]
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  email: "digittolu25@gmail.com",
};
