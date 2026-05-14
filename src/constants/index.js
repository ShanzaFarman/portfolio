import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  expressjs,
  nodejs,
  mongodb,
  jobit,
  tripguide,
  chatapp,
  lab,
  pro,
  fa,
  swift
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
];

const experiences = [
  {
    title: "WordPress Designer ",
    company_name: "ProSoftic ",
    icon: pro,
    iconBg: "white",
    date: "Oct 2025 - March 2026 ",
    points: [
      "Worked as a WordPress Designer at ProSoftic, where I designed and developed responsive, user-friendly websites tailored to client requirements. Gained hands-on experience in customizing themes, optimizing website performance, and ensuring SEO-friendly structures. Collaborated with team members to deliver high-quality projects on time while maintaining strong attention to detail and modern design standards",
      "Designed and developed responsive, user-friendly websites using WordPress, focusing on performance, usability,and modern UI/UX principles. Customized themes and plugins to meet client requirements, ensuring functionalityand scalability. Collaborated with cross-functional teams to gather requirements, implement design changes, andoptimize website performance. Managed website content, performed basic SEO optimization, and ensured cross-browser compatibility and mobile responsiveness.",
      "Developed responsive layouts that enhanced user experience and engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
  "Working with Shanza as a WordPress Designer at ProSoftic was a great experience. She delivered clean, responsive, and visually appealing websites with strong attention to detail and user experience.",
name: "Waqas Ahmad",
designation: "CEO",
company: "ProSoftic",
image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
   testimonial:
  "Shanza consistently delivered clean, responsive WordPress websites with a focus on user-friendly design and performance.",
name: "Waqas Ahmad",
designation: "CEO",
company: "ProSoftic",
image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
  testimonial:
  "Her ability to create visually appealing and user-friendly WordPress designs helped improve the overall quality of our web projects.",
name: "Waqas Ahmad",
designation: "CEO",
company: "ProSoftic",
image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    names: "Computer Science Department website",
    description:
      " Developed a responsive Computer Science Department website using WordPress with custom HTML, CSS, and JavaScript enhancements. The project provides a structured and user-friendly platform for students and faculty to access academic resources, announcements, and departmental information. Focused on clean UI design, smooth navigation, and optimized performance to ensure a professional and seamless experience across all devices.",



    tags: [
      {
        names: "WordPress",
        color: "blue-text-gradient",
      },
      {
        names: "HTML",
        color: "green-text-gradient",
      },
      {
        names: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    live_link: "https://sarim-chat-apps.onrender.com",
    source_code_link: "https://github.com/sarim-alis/sarim-chat-app",
  },
  {
   
    names: "Quiz App",
description:
  "A fully interactive and responsive Quiz Application developed using React and JavaScript, built to provide an engaging, educational, and seamless user experience. The app presents users with a structured set of multiple-choice questions where each question is dynamically rendered using reusable React components for better scalability and maintainability. Users can select answers, navigate through questions smoothly, and receive instant feedback based on their selections, which enhances learning and interactivity in real time..",
tags: [
  {
    names: "react",
    color: "blue-text-gradient",
  },
  {
    names: "javascript",
    color: "green-text-gradient",
  },
 {
        names: "CSS",
        color: "green-text-gradient",
      },
      
],
    image: swift,
    live_link: "https://swift-buy-gray.vercel.app",
    source_code_link: "https://github.com/sarim-alis/swift-buy",
  },
  {
    names: "Amazon-style eCommerce ",
    description:
      "A responsive Amazon-style eCommerce clone developed using HTML, CSS and JavaScript.The project replicates the core UI and user experience of an online shopping platform, including product listings, navigation bar, search functionality and interactive product cards. It focuses on building a clean and structured front-end layout with modern design principles, ensuring a smooth shopping experience for users.",
    tags: [
     {
        names: "HTML",
        color: "green-text-gradient",
      },
      {
        names: "JavaScript",
        color: "pink-text-gradient",
      },
       {
        names: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    live_link: "https://stay-villa.vercel.app",
    source_code_link: "https://github.com/sarim-alis/stay-villa",
  },
];

export { services, technologies, experiences, testimonials, projects };
