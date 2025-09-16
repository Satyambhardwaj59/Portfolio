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
import aagaaz from './assets/company_logo/aagaaz.jpeg';
import nielit from './assets/company_logo/nielit.jpeg';
import commusync from './assets/company_logo/commusync_logo.jpeg'

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
import portfolio from './assets/work_logo/portfolio.png';
import foodApp from './assets/work_logo/foodApp.png';
import prescripto from './assets/work_logo/prescripto-shot.png';
import devConnect from './assets/work_logo/devConnect.png';
import loginity from './assets/work_logo/loginity.png';

// Achivments Section Logo's
import bestCordinotor from './assets/achivments_logo/best-cordinator.jpeg';
import gpmRanker from './assets/achivments_logo/gpmRanker.jpeg';
import nsitRancker from './assets/achivments_logo/nsitRancker.jpg';
import javaScript from './assets/achivments_logo/javaScript.webp';
import htmlCss from './assets/achivments_logo/HTML-CSS.jpg';
import ReactCertificate from './assets/achivments_logo/React-Certificate.webp'
import nodeCertificate from './assets/achivments_logo/Node.js.webp'





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
      id: 2,
      img: commusync,
      role: "Fullstack Developer Intern",
      company: "CommuSync",
      date: "July 2025 - Present",
      desc: "At CommuSync, I contributed to building a scalable web platform by developing reusable and responsive UI components in React.js with TailwindCSS, improving cross-device performance and reducing page load time significantly. On the backend, I designed and integrated secure RESTful APIs using Node.js and Express.js, implemented efficient state management with React Hooks and Context API, and refactored server logic for modularity and reusability. My work improved API response time and streamlined data flow across the application, while collaborating closely with the team ensured faster feature delivery and consistent architecture across frontend and backend modules.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "Tailwind CSS",
        "Node JS",
        "MongoDb",
        "Express JS",
        "RESTful APIs",
        "Git & GitHub",
        "Postman",
        "React Hooks",
        "Context API",
      ],
    },
    {
      id: 0,
      img: aagaaz,
      role: "Fullstack Developer Intern",
      company: "Aagaaz Training Centre",
      date: "May 2025 - June 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "Tailwind CSS",
        "Node JS",
        "MongoDb",
        "Express JS",
      ],
    },
    {
      id: 1,
      img: nielit,
      role: "Data Science Intern",
      company: "NIELIT Patna",
      date: "Nov 2023 - Dec 2023",
      desc: "Completed a Data Science internship focused on Python programming, where I worked on real-world datasets, performed data cleaning, analysis, and built machine learning models using libraries like Pandas, NumPy, and Scikit-learn. Gained practical experience in data visualization, predictive modeling, and enhanced my skills in solving data-driven problems",
      skills: [
        "Python",
        "Data Science",
        "Data Analysis",
        "Data Visualization",
        "Machine Learning"
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
      id: 9,
      title: "Doctor Appointment Booking Web Application",
      description:
        "Doctor Appointment Booking Web Application – A feature-rich full-stack project built with the MERN stack and deployed on Render. Integrated Cloudinary for secure media management, Razorpay for seamless online payments, and RESTful APIs to ensure efficient backend communication. Implemented role-based access control for Admins, Doctors, and Patients with dynamic dashboards, enabling appointment scheduling, prescription management, user authentication, and real-time status updates. Optimized performance with lazy loading, modular architecture, and a fully responsive UI for cross-device compatibility.",
      image: prescripto,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "React Router", "Axios", "Toastify", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Razorpay", "Cloudinary", "Render", "Git & GitHub", "Postman", "Dotenv"],
      github: "https://github.com/Satyambhardwaj59/Doctor-Appointment-Booking",
      webapp: "https://doctor-appointment-booking-frontend-ec9x.onrender.com/",
    },
    {
      id: 12,
      title: "Loginity -- MERN Stack Authentication System",
      description:
        "Loginity (Authentication App) – A full-stack authentication platform built with the MERN stack, featuring secure login and signup using JWT stored in HttpOnly cookies, middleware-protected routes, and robust account recovery through email verification with OTP and password reset via Nodemailer. The app includes a responsive and modern TailwindCSS UI, achieving a 95+ Lighthouse accessibility score, and was deployed successfully as a reusable boilerplate for future MERN applications.",
      image: loginity,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "React Router", "Axios", "Toastify", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Vercel", "Git & GitHub", "Postman", "Dotenv"],
      github: "https://github.com/Satyambhardwaj59/Loginity",
      webapp: "https://loginity-auth-7y5t.vercel.app/",
    },
    {
      id: 11,
      title: "DevConnect",
      description:
        "Tinder-Inspired Social Matchmaking Web Application – Developed a full-stack web app using the MERN stack (MongoDB, Express.js, React.js, Node.js), deployed on AWS EC2 for high availability and scalability. Implemented swipe-based matching logic, real-time chat, and secure user authentication with HTTP-only cookies for session handling. Designed and built RESTful APIs for profile management, messaging, and user preferences. Delivered a fully responsive and mobile-friendly UI, optimized with React best practices, reusable components, and dynamic routing. Emphasized performance optimization, scalable backend architecture, and strong user experience design.",
      image: devConnect,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "React Router", "Axios", "Toastify", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cookies", "AWS", "Git & GitHub", "Postman", "Dotenv"],
      github: "https://github.com/Satyambhardwaj59/DevConnect-Backend",
      webapp: "http://13.235.82.40",
    },
    {
      id: 0,
      title: "Food Ordering Web App",
      description:
        "Built a food ordering web app using React, Tailwind CSS, and Redux Toolkit, inspired by Swiggy. The app was designed to fetch real-time restaurant and menu data via Swiggy’s live API, featuring dynamic routing with React Router, interactive UI with React Slick carousels, icons from React Icons, and toast notifications using React Hot Toast. Modular components were structured with modern React Hooks, and core functionality was tested using Jest. Although the project is well-structured and feature-rich, it is currently not live due to CORS policy restrictions on the Swiggy API.",
      image: foodApp,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "API"],
      github: "https://github.com/Satyambhardwaj59/React",
      webapp: "",
    },
    {
      id: 1,
      title: "E-Commerce Web Application",
      description:
        "This is a fully responsive e-commerce frontend web application built using React.js, showcasing a modern and user-friendly UI with product listings, filtering, and navigation features. Designed to mimic a real-world shopping experience, this project highlights my skills in building visually appealing, component-driven interfaces using React, along with clean code structure and performance-optimized layouts. It demonstrates my ability to create scalable and interactive UI designs suitable for integration with backend services.",
      image: Ecomzy,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS", "API"],
      github: "https://github.com/Satyambhardwaj59/react_E-commerce",
      webapp: "https://react-e-commerce-two-gules.vercel.app/",
    },
    {
      id: 2,
      title: "YouTube Clone",
      description:
        "This is a YouTube-inspired frontend application built using React and Tailwind CSS, focused on delivering a smooth and responsive user experience. It integrates the YouTube Data API to provide efficient video search with live suggestions, optimized API calls, and interactive features like nested comments, like buttons, and shimmer UI for loading states. The project highlights my skills in building real-world, API-driven interfaces with performance and user experience in mind. (Currently not live.)",
      image: youTube,
      tags: ["React JS", "ReduxJS", "Tailwind-CSS", "JavaScript"],
      github: "https://github.com/Satyambhardwaj59/youTube",
      webapp: "",
    },
    {
      id: 3,
      title: "Persnol Portfolio website",
      description:
        "Built a responsive personal portfolio website using React and Tailwind CSS to showcase my skills, projects, and achievements. The site features smooth navigation, modern design, and mobile-friendly layout, demonstrating my proficiency in frontend development and creating engaging user experiences.",
      image: portfolio,
      tags: ["React JS", "Tailwind-CSS"],
      github: "https://github.com/Satyambhardwaj59/Portfolio",
      webapp: "https://portfolio-satyam-kumars-projects-4080f490.vercel.app/",
    },
    {
      id: 10,
      title: "Prescripto – A Modern Healthcare App",
      description:
        "Prescription App UI is a responsive healthcare interface built with React , React Router, Redux and Tailwind CSS  using Vite for fast bundling. It features user-friendly pages for doctor listings, login/signup, appointments, and prescription viewing. The app is optimized for seamless navigation and mobile responsiveness, showcasing clean UI design and efficient component structuring ready for backend integration.",
      image: prescripto,
      tags: ["Tailwind-CSS", "JavaScript", "React JS", "ReduxJS"],
      github: "https://github.com/Satyambhardwaj59/prescripto-UI",
      webapp: "https://prescripto-ui.vercel.app/",
    },
    {
      id: 4,
      title: "LeetCode Stats Tracker",
      description:
        "This is a frontend web application built using JavaScript, HTML, and CSS that fetches and displays LeetCode user statistics through their public API. By entering a username, users can view how many coding problems they've solved, categorized by difficulty levels (Easy, Medium, Hard). The project features a clean, responsive UI and demonstrates effective API integration, DOM manipulation, and real-time data presentation. It highlights my ability to create practical and interactive tools using core web technologies.",
      image: leetMatrix,
      tags: [ "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyambhardwaj59/leetMatrix",
      webapp: "https://leet-matrix-two.vercel.app/",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "A responsive weather app built with JavaScript, HTML, and CSS that uses the OpenWeather API to provide real-time weather data. Users can search cities to view current temperature, humidity, and conditions. The project highlights API integration, asynchronous data fetching, and a clean, user-friendly interface.",
      image: weather,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Satyambhardwaj59/WeatherApp",
      webapp: "https://weather-app-beta-ten-87.vercel.app/",
    },
    {
      id: 6,
      title: "To Do App",
      description:
        "A simple and intuitive To-Do app built with JavaScript, HTML, and CSS that allows users to add, edit, and delete tasks. It features local storage to save tasks persistently, helping users manage their daily activities efficiently with a clean and responsive user interface.",
      image: toDo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Satyambhardwaj59/doList",
      webapp: "https://to-do-list-satyam-kumars-projects-4080f490.vercel.app/",
    },
    {
      id: 7,
      title: "Calculator",
      description:
        "A functional calculator app built using JavaScript, HTML, and CSS that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean and responsive design with intuitive buttons, showcasing skills in DOM manipulation, event handling, and user interface development.",
      image: calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyambhardwaj59/Basic_Calculator",
      webapp: "https://basic-calculator-teal.vercel.app/",
    },
    {
      id: 8,
      title: "Responsive OmniFood",
      description:
        "This is a responsive landing page for a fictional AI-powered meal subscription service, built using HTML and CSS. The design emphasizes modern aesthetics and user experience, featuring a clean layout with sections for meal plans, testimonials, and pricing. The project demonstrates proficiency in creating visually appealing, mobile-friendly websites suitable for showcasing subscription-based services",
      image: omniFood,
      tags: ["HTML5", "CSS3"],
      github: "https://github.com/Satyambhardwaj59/Responsive-omniFood",
      webapp: "https://responsive-omni-food.vercel.app/",
    },
    
  ];  

  export const achivments = [
    {
      id: 0,
      title: "Best event Cordinator in Collage Annual Tech-fest",
      description:
        "I'm incredibly grateful to have received the Best Coordinator Award at our college's Annual Tech Fest. Organizing this event alongside such a passionate and talented team was a truly rewarding experience. From planning sessions to late-night troubleshooting, every moment was a learning opportunity and a memory to cherish.",
      image: bestCordinotor,
      tags: ["Leader Ship", "Cordinator", "Event Planning"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "3rd Rank in B.Tech",
      description:
        "Secured 3rd rank in the previous semester of B.Tech, reflecting strong academic performance and dedication to consistent excellence.",
      image: nsitRancker,
      tags: [""],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "1st Rank in Diploma ",
      description:
        "Achieved 1st rank in Diploma in Electrical Engineering, demonstrating academic excellence and strong subject proficiency.",
      image: gpmRanker,
      tags: [""],
      github: "",
      webapp: "",
    },
  ];

  export const certificate = [
    {
      id: 2,
      title: "Node.js Certification — NamasteDev.com",
      description:
        "Certified in Node.js Development from NamasteDev.com by Akshay Saini, showcasing skills in building scalable backend apps using Node.js, Express, MongoDB, and Mongoose. Covered integrations with AWS, Amazon SES, Razorpay, WebSocket, and automation using cron jobs, reflecting practical knowledge of modern backend systems.",
      image: nodeCertificate,
      tags: ["Node.js", "Express", "Mongoose", "AWS", "Razorpay", "WebSocket", "REST API", "Postman", "etc.."],
    },
    {
      id: 0,
      title: "React Certification — NamasteDev.com",
      description:
        "Earned React Certification from Namaste React by Akshay Saini at NamasteDev.com. Gained hands-on expertise in React Hooks, Redux, Routing, State Management, Performance Optimization, and Live Projects—building scalable, maintainable, and production-ready Single Page Applications using modern React practices.",
      image: ReactCertificate,
      tags: ["ReactJS", "Redux", "Tailwind CSS", "JEST", "React Testing Library", "JSX", "Babel", "Bundlers"],
    },
    {
      id: 1,
      title: "JavaScript Certification — NamasteDev.com",
      description:
        "Completed an in-depth JavaScript course taught by Akshay Saini, covering foundational to advanced topics including execution context, closures, hoisting, event loop, asynchronous JS, promises, and more. Strengthened core JavaScript skills with practical coding exercises and real-world concepts.",
      image: javaScript,
      tags: ["JavaScript"],
    },
    {
      id: 2,
      title: "HTML, CSS, and Responsive Web Design Certification",
      description:
        "Platform: Udemy ,  Completed a detailed course focused on building modern, responsive websites using HTML5 and CSS3. Gained hands-on experience with layout techniques like Flexbox and Grid, media queries, and responsive design principles to ensure seamless performance across devices. Built real-world projects to solidify frontend development skills.",
      image: htmlCss,
      tags: ["HTML", "CSS", "Responsive Web Design"],
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