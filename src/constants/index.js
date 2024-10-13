import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import CAS from "../assets/company/CAS.png";
import NYU from "../assets/company/NYU_1.png";
import IVI from "../assets/company/IVI.png";
import DreamFlow from "../assets/company/DreamFlow.png";
import immersive from "../assets/project/immersive.png";
import techcompare from "../assets/project/techcompare.png";
import dramflow from "../assets/project/DreamFlow.png";
import old_web from "../assets/project/old_web.png";
import kaze from "../assets/project/watermark.mp4";

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
    title: "VR/AR Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Software Engineer Intern",
    company_name: "Chinese Academy of Sciences",
    icon: CAS,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - June 2021",
    points: [
      "Developed the mobile client using the Vue framework. Engaged in UI optimization, employing regular expressions for\n" +
      "automatic result highlighting and graphics plotting. Improved smoothness by over 50% with CSS animations.",
      "Implemented JWT token technology for login and identity authentication, custom interceptors for user authentication,\n" +
      "and ThreadLocal for token validation, determining user login status and resolving HTTP request statelessness.",
      "Used Nginx as an HTTP server, deployed static resources, reverse proxy, and load balancing.",
      "Solved data consistency issues with active updates and delayed deletion strategies to meet high data consistency\n" +
      "requirements.",
      "Enabled real-time updates for client order status and notifications through WebSocket. Utilized Spring Task for\n" +
      "scheduled order status processing, automatic order cancellation, and other timing functions.",
      "Solved Redis penetration issues with Bloom filters and null value control, and constructed distributed locks based on\n" +
      "Redis to handle concurrency issues.",
      "Utilized Redis and Lua scripts to build distributed locks, alleviating the issue of coupon overselling in high concurrency\n" +
      "environments.\n",
    ],
  },
  {
    title: "Full-stack Software Engineer",
    company_name: "Chinese Academy of Sciences",
    icon: CAS,
    iconBg: "#E6DEDD",
    date: "July 2021 - April 2023",
    points: [
      "Developed cross-platform mobile apps using React Native as a Full-Stack developer, integrated with Cesium and\n" +
      "Three.js libraries to leverage WebGL technology for delivering a Web 3.0 experience with immersive 3D graphics.",
      "Implemented critical performance optimizations by integrating C++ code as a shared library into Java code running in a\n" +
      "JVM via the CMake and Java Native Interface (JNI) to, achieving significant reductions in processing times.",
      "Employed Test-Driven Development (TDD) methodologies, using Swagger, Jest, Postman to ensure reliable and\n" +
      "maintainable code, which reduced the bug rate by up to 75% and a streamlined feature release cycle.",
      "Contributed to the development of a fuzzy search engine. Built a front-end framework that reduced the cost of\n" +
      "modifying frontend UI code by over 80%."
    ],
  },
  {
    title: "Web Developer",
    company_name: "New York University",
    icon: NYU,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2024",
    points: [
      "Implemented java micro-services architecture using Kafka for asynchronous messaging, " +
      "and utilized Kubernetes for scalable and resilient containerized deployment. Integrated Spring Cloud Gateway to manage API access.",
      "Utilized Tailwind CSS for responsive layouts and dark mode, Animate On Scroll Library for animations to enhance\n" +
      "user experience. Embedded Stripe form within app to simulate the checkout experience.",
      "Utilized PostgreSQL to keep data and implement transaction management using JDBC. Supporting Multi-Version\n" +
      "Concurrency Control (MVCC), which can provide better performance and consistency in high-concurrency environments.",
      "Utilized Amazon Cognito for User Authentication and Access Management. Configure Spring Cloud Gateway to\n" +
      "use the JSON Web Key Set(JWKS) form Cognito user pool to verify the JSON Web Token signature.",
      "Utilized Swagger for Manage the API document, which also offers the ability to debug RESTful APIs. And using\n" +
      "Vite.js to utilize Rollup for efficient bundling during production builds.",
      "Implemented Continuous Integration and Continuous Delivery (CI/CD) pipelines, ensuring seamless updates and\n" +
      "maintenance of the application with each new commit.",
      "Leveraged Google Cloud Run to manage the complete lifecycle of a web application by providing a Dockerfile, enabling\n" +
      "automated deployments through integration with a code repository.",
      "Utilized Firebase for mapping a domain as https://techcompare-leetcodebootcamp.web.app/ to enhance brand visibility.",
    ],
  },
  {
    title: "VR/AR Developer & Research Assistant",
    company_name: "IVI Lab @Georgia Institute of Technology",
    icon: IVI,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Conducted toolkit research. Developed an open-source .Net library in C# for Unity based on factory design pattern, aimed at\n" +
      "filling the gap in VR for thematic map visualization. Expected to produce a top-tier conference publication.",
      "Participated in VR/AR projects about enhancing storytelling. Expected to produce a top-tier conference publication.",
      "Streamlined maintenance operations by designing and implementing a JavaScript linear plotting library, which eliminates\n" +
      "the requirement of knowing how to manage temporary variables for algorithm designer when implementing new plotting\n" +
      "type, resulting in a substantial reduction in costs (from a team of 3 to a single maintenance personnel).",
    ],
  },
  {
    title: "Full-stack Software Engineer",
    company_name: "DreamFlow",
    icon: DreamFlow,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Utilized TypeScript and Next.js to develop a React website, with Django handling the business logic. Through UI optimization\n" +
      "by three.js and framer-motion, and performance improvements, successfully elevated the Product Hunt ranking from over 2700 to 78",
      "Integrated AI model to Django project and RPC for creating real-time AI-generated video live streaming. Worked with the\n" +
      "author of LCM and LCM-LoRA model, tuned AI model to increase the speed of generation by 10x than by mainstream models.",
      "Utilized Key-Value distributed database based on Raft algorithm to manage the meta, status, configure of Kubernetes."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Songhao is the best developer I ever worked with.",
    name: "Dunwen Wang",
    designation: "Team Leaders",
    company: "Chinese Academy of Sciences",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Songhao does.",
    name: "Simian Luo",
    designation: "Co-founder",
    company: "DreamFlow",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Throughout our collaboration, Songhao has consistently demonstrated exceptional skills and dedication to our VR/AR/HCI projects, making a lasting impression on me.!",
    name: "Yalong Yang",
    designation: "Professor",
    company: "Georgia Institute of Technology",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kaze",
    description:
      "AI-based comprehensive image processing toolkit website, offering features such as watermark removal, photo enhancement, portrait retouching, background replacement, and more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Machine learning",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    video: kaze,
    image: dramflow,
    source_code_link: "https://kaze.link/",
  },
  {
    name: "DreamFlow",
    description:
      "Leveraging the Generative AI to create Real-Time Video Streaming. Develop a website and use RPC for experiment with our Real-Time Video Streaming API for preliminary trial.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Machine learning",
        color: "green-text-gradient",
      },
      {
        name: "RabbitMQ",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
    ],
    image: dramflow,
    source_code_link: "https://dreamflow.art/",
  },
  {
    name: "Immersive Portfolio Website",
    description:
      "Web-based immersive portfolio website, providing good looking and enhancing storytelling aspect of the portfolio.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "vite.js",
        color: "pink-text-gradient",
      },
    ],
    image: immersive,
    source_code_link: "https://songhao-li.github.io/immersivePortfolio/",
  },
  {
    name: "Tech Compare",
    description:
      "Web application that allows users to search, compare, and review tech products using data from the Best Buy API. Integrate Stripe API for a simulated checkout experience.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "restful api",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
    ],
    image: techcompare,
    source_code_link: "https://techcompare.songhao-li.com/",
  },
  {
    name: "Personal Website - Old Version ",
    description:
      "My First Personal Website, which is out of use now.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: old_web,
    source_code_link: "https://blog.sohot.site/",
  },
];

export { services, technologies, experiences, testimonials, projects };
