// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import daisyUILogo from './assets/tech_logo/daisyUILogo.png'

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import nsitLogo from './assets/education_logo/nsitLogo.png';
import polytechnicLogo from './assets/education_logo/polytecnicLogo.png';

// Project Section Logo's
import youTube from './assets/work_logo/youTube.png';
import weather from './assets/work_logo/weather.png';
import leetMatrix from './assets/work_logo/leetMatrix.png';
import toDo from './assets/work_logo/toDo.png';
import calculator from './assets/work_logo/calculator.png';
import omniFood from './assets/work_logo/omniFood.png';
import Ecomzy from './assets/work_logo/Ecomzy.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Daisy UI', logo: daisyUILogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: nsitLogo,
      school: "Netaji Subhas Institute of Technology, Patna",
      date: "Sept 2023 - July 2026",
      grade: "8.6 CGPA",
      desc: "Pursuing B.Tech in Computer Science and Engineering at Netaji Subhas Institute of Technology, Patna, under Bihar Engineering University (Session 2023–2026), where I am building a strong foundation in software development, data structures, and full-stack web technologies. Throughout my academic journey, I have been actively involved in hands-on projects, especially focusing on the MERN stack, and continuously enhancing my problem-solving skills and practical knowledge to develop scalable, real-world applications.",
      degree: "B.Tech in Computer Science and Engineering",
    },
    {
      id: 1,
      img: polytechnicLogo,
      school: "Government Polytechnic Munger",
      date: "Sept 2020 - Aug 2023",
      grade: "8.4 CGPA",
      desc: "Completed Diploma in Electrical Engineering from Government Polytechnic Munger under the Department of Science and Technology, Bihar, during the session 2020–2023. During this period, I gained a solid understanding of electrical systems, circuit design, and industrial applications, along with practical experience through lab work and technical training, which helped me develop a strong analytical and problem-solving mindset.",
      degree: "Diploma in Electrical Engineering",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "E-Commerce Web Application",
      description:
        "This is a fully responsive e-commerce frontend web application built using React.js, showcasing a modern and user-friendly UI with product listings, filtering, and navigation features. Designed to mimic a real-world shopping experience, this project highlights my skills in building visually appealing, component-driven interfaces using React, along with clean code structure and performance-optimized layouts. It demonstrates my ability to create scalable and interactive UI designs suitable for integration with backend services.",
      image: Ecomzy,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "API"],
      github: "https://github.com/Satyambhardwaj59/react_E-commerce",
      webapp: "https://react-e-commerce-two-gules.vercel.app/",
    },
    {
      id: 1,
      title: "YouTube Clone",
      description:
        "This is a YouTube-inspired frontend application built using React and Tailwind CSS, focused on delivering a smooth and responsive user experience. It integrates the YouTube Data API to provide efficient video search with live suggestions, optimized API calls, and interactive features like nested comments, like buttons, and shimmer UI for loading states. The project highlights my skills in building real-world, API-driven interfaces with performance and user experience in mind. (Currently not live.)",
      image: youTube,
      tags: ["React JS", "ReduxJS", "Tailwind-CSS", "JavaScript"],
      github: "https://github.com/Satyambhardwaj59/youTube",
      webapp: "",
    },
    {
      id: 2,
      title: "LeetCode Stats Tracker",
      description:
        "This is a frontend web application built using JavaScript, HTML, and CSS that fetches and displays LeetCode user statistics through their public API. By entering a username, users can view how many coding problems they've solved, categorized by difficulty levels (Easy, Medium, Hard). The project features a clean, responsive UI and demonstrates effective API integration, DOM manipulation, and real-time data presentation. It highlights my ability to create practical and interactive tools using core web technologies.",
      image: leetMatrix,
      tags: [ "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyambhardwaj59/leetMatrix",
      webapp: "https://leet-matrix-two.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A responsive weather app built with JavaScript, HTML, and CSS that uses the OpenWeather API to provide real-time weather data. Users can search cities to view current temperature, humidity, and conditions. The project highlights API integration, asynchronous data fetching, and a clean, user-friendly interface.",
      image: weather,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Satyambhardwaj59/WeatherApp",
      webapp: "https://weather-app-beta-ten-87.vercel.app/",
    },
    {
      id: 4,
      title: "To Do App",
      description:
        "A simple and intuitive To-Do app built with JavaScript, HTML, and CSS that allows users to add, edit, and delete tasks. It features local storage to save tasks persistently, helping users manage their daily activities efficiently with a clean and responsive user interface.",
      image: toDo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Satyambhardwaj59/doList",
      webapp: "https://to-do-list-satyam-kumars-projects-4080f490.vercel.app/",
    },
    {
      id: 5,
      title: "Calculator",
      description:
        "A functional calculator app built using JavaScript, HTML, and CSS that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean and responsive design with intuitive buttons, showcasing skills in DOM manipulation, event handling, and user interface development.",
      image: calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyambhardwaj59/Basic_Calculator",
      webapp: "https://basic-calculator-teal.vercel.app/",
    },
    {
      id: 6,
      title: "Responsive OmniFood",
      description:
        "This is a responsive landing page for a fictional AI-powered meal subscription service, built using HTML and CSS. The design emphasizes modern aesthetics and user experience, featuring a clean layout with sections for meal plans, testimonials, and pricing. The project demonstrates proficiency in creating visually appealing, mobile-friendly websites suitable for showcasing subscription-based services",
      image: omniFood,
      tags: ["HTML5", "CSS3"],
      github: "https://github.com/Satyambhardwaj59/Responsive-omniFood",
      webapp: "https://responsive-omni-food.vercel.app/",
    },
    
  ];  




  // {
  //     id: 2,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2017 - March 2018",
  //     grade: "78%",
  //     desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //     degree: "CBSE(XII) - PCM with Computer Science",
  //   },
  //   {
  //     id: 3,
  //     img: vpsLogo,
  //     school: "Vatsalya Public School Govardhan, Mathura",
  //     date: "Apr 2015 - March 2016",
  //     grade: "87.5%",
  //     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //     degree: "CBSE(X), Science with Computer Application",
  //   },