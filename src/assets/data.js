import IBOX from "./I_BOX.png";
import BLOG from "./blog.png";
import DOCTOR from "./doctor.png";
import JOP from "./jops.png";
import ROOM from "./room.png";
import AMAZON from "./amazon .png";
import RESTAURANT from "./restaurant .png";
import SureFire from "./bio.png";
import atoz from "./atoz.png";
import emkan from "./emkan.png";
import SopDakt from "./SopDakt.png";
import Tharwah from "./tharwah.png";
import logo from "./logoEn-removebg-preview.png";
import typeScriptLogo from "./typeScript.png";
import javaScriptLogo from "./js.png";
import reactLogo from "./react-removebg-preview.png";
import nextLogo from "./next.png";
import nodeLogo from "./node-removebg-preview.png";
import tailwindLogo from "./tailwind-removebg-preview.png";
import bootstrapLogo from "./boot-removebg-preview.png";
import expressLogo from "./express-removebg-preview.png";
import viteLogo from "./vite-removebg-preview.png";
import mongoLogo from "./mongo-removebg-preview.png";
import reduxLogo from "./redux-removebg-preview.png";
import gitLogo from "./git-removebg-preview.png";
import gitHupLogo from "./githup-removebg-preview.png";
import postmanLogo from "./postman-removebg-preview.png";
import swaggerLogo from "./swagger-removebg-preview.png";
import restLogo from "./rest-api-icon-removebg-preview.png";
import socketLogo from "./socket.png";
import slide1 from "./Ellipse 6.png";
import slide2 from "./Ellipse 9.png";
import slide3 from "./Ellipse 5.png";
import slide4 from "./Ellipse 8.png";
import slide5 from "./Ellipse 10.png";
import education from "./edu.png";
import libraryNet from "./library net.png";
import business from "./business .png";
import bootstrapProject from "./bootstrap.png";

export const projects = [
  {
    id: 1,
    title: "SureFire Bio Website",
    image: SureFire,
    desc: "SureFire Bio landing page built with React.js and Tailwind CSS, featuring smooth scroll animations with Framer Motion and fully responsive, reusable components. Optimized for fast performance and mobile-first design.",
    demo: "https://dan-two-smoky.vercel.app/",
    repo: "https://github.com/moyoussef11/DAN",
    skills: ["React.js", "Tailwind CSS", "Framer Motion."],
  },
  {
    id: 2,
    title: "SopDakt Store",
    image: SopDakt,
    desc: "E-commerce store built from Figma design using React.js and Tailwind CSS, with pixel-perfect UI, animated transitions via Framer Motion, and a responsive, reusable component structure optimized for all devices.",
    demo: "https://sopdakt-eta.vercel.app/",
    repo: "https://github.com/moyoussef11/sopdakt",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "React icons"],
  },
  {
    id: 3,
    title: "Tharwah Academy Platform",
    image: Tharwah,
    desc: "Full-featured educational platform built from Figma design using React.js and Tailwind CSS, with dynamic content management, JWT-based authentication, and an admin dashboard for managing articles, questions, and library resources.",
    demo: "https://tharwah-acedemy-front.vercel.app/",
    repo: "https://github.com/moyoussef11/Tharwah-Acedemy",
    skills: [
      "React.js",
      "Node js",
      "Express js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "JWT",
      "cloudinary",
      "multer",
      "nodemailer",
    ],
  },
  {
    id: 4,
    title: "I_BOX E-commerce",
    image: IBOX,
    desc: "E-commerce platform built with React.js, Redux Toolkit, and Tailwind CSS, featuring secure user authentication, product/order management, and a full admin dashboard. Backend APIs were designed with JWT auth, modular structure, and complete CRUD operations for users, products, and categories.",
    demo: "https://eco-client-three.vercel.app/",
    repo: "https://github.com/moyoussef11/eco_client",
    skills: [
      "React.js",
      "Node js",
      "Express js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "JWT",
    ],
  },
  {
    id: 5,
    title: "Blog Application",
    image: BLOG,
    desc: "Full-stack blog application using React.js, Redux Toolkit, and Tailwind CSS with full CRUD functionality for posts, comments, and likes. Integrated MongoDB and Node.js backend with Axios for seamless API communication and dynamic user interaction.",
    demo: "https://blog-client-mu-dusky.vercel.app/",
    repo: "https://github.com/moyoussef11/blogClient",
    skills: [
      "React.js",
      "Node js",
      "Express js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "JWT",
    ],
  },
  {
    id: 6,
    title: "Doctor Apponitment",
    image: DOCTOR,
    desc: "Doctor appointment scheduling app built with React.js, Redux Toolkit, and Tailwind CSS, featuring secure JWT-based authentication and role management. Users can book, cancel, and manage appointments, while doctors can accept or decline requests through a well-structured API integrated via Axios.",
    demo: "https://doctor-appoinment-client.vercel.app/",
    repo: "hhttps://github.com/moyoussef11/doctor_appoinment_server",
    skills: [
      "React.js",
      "Node js",
      "Express js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "JWT",
    ],
  },
  {
    id: 7,
    title: "Jobs Application",
    image: JOP,
    desc: "Job application platform built with React.js, Redux Toolkit, and Tailwind CSS, featuring role-based access control and secure authentication. Includes full CRUD operations for job listings, with a Node.js/Express backend and MongoDB for managing users, jobs, and applications.",
    demo: "https://jops-app.vercel.app/",
    repo: "https://github.com/moyoussef11/jopsApp",
    skills: [
      "React.js",
      "Node js",
      "Express js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "JWT",
    ],
  },
  {
    id: 8,
    title: "Room Booking Application",
    image: ROOM,
    desc: "Room booking application built with React.js, Redux Toolkit, and Tailwind CSS, enabling users to book and manage reservations with role-based access. Integrated secure authentication via cookies, client-side routing with React Router, and full CRUD functionality using Axios.",
    demo: "https://room-booking-opal.vercel.app/",
    repo: "https://github.com/moyoussef11/room-booking",
    skills: ["React.js", "Redux Toolkit", "React Bootstrap", "fetchAPI"],
  },
  {
    id: 9,
    title: "amazon clone",
    image: AMAZON,
    desc: "Amazon clone built with React.js, React Hooks, Redux Toolkit, and Tailwind CSS, featuring dynamic routing with React Router and data fetching via Fetch API. Includes skeleton loading, product carousels, and a fully responsive UI replicating core Amazon features.",
    demo: "https://amazonclone-wine-one.vercel.app/",
    repo: "https://github.com/moyoussef11/amazonclone",
    skills: [
      "React.js",
      "Redux Toolkit",
      "react carousel",
      "fetchAPI",
      "react skeleton loading",
      "tailwind css",
    ],
  },
  {
    id: 10,
    title: "Restaurant Landing Page",
    image: RESTAURANT,
    desc: "Modern restaurant landing page built with React.js and Tailwind CSS, featuring a responsive, visually appealing design. Optimized for all devices and integrated with SEO tools to enhance online visibility and brand presence.",
    demo: "https://restaurants-olive-eight.vercel.app/",
    repo: "https://github.com/moyoussef11/Restaurants",
    skills: ["React.js", "tailwind css"],
  },
  {
    id: 11,
    title: "ATOZ (Next project)",
    image: atoz,
    desc: "The website is built using the Next.js , which is a server-side rendered (SSR) React framework. Next.js provides high capability in delivering a fast and interactive user experience.",
    demo: "https://next-app-atoz.vercel.app/",
    repo: "https://github.com/moyoussef11/next-app-Atoz",
    skills: ["Next.js", "React.js", "react icons", "fetch api", "CSS pure"],
  },
  {
    id: 12,
    title: "EMKAN website (company portfolio)",
    image: emkan,
    desc: "Emkan is a responsive company portfolio website built with React and Tailwind CSS. It showcases the company's services and information with modern UI/UX design.",
    demo: "https://emkan-azure.vercel.app/",
    repo: "https://github.com/moyoussef11/Emkan",
    skills: ["React.js", "tailwind css"],
  },
  {
    id: 13,
    title: "LibertyNFTMarket website",
    image: libraryNet,
    desc: "Liberty NFT Market is a professional front-end web template built with HTML, CSS, and JavaScript, using Bootstrap 5. It is designed specifically for NFT platforms to showcase, create, and sell digital assets.",
    demo: "https://liberty-nft-market-two.vercel.app/",
    repo: "https://github.com/moyoussef11/LibertyNFTMarket",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 14,
    title: "Bootstrap project",
    image: bootstrapProject,
    desc: "Bootstrap Learning Platform is a polished front-end template crafted using HTML, CSS, JavaScript, and Bootstrap. It features a clean and intuitive layout ideal for educational or tutorial websites.",
    demo: "https://bootstrapproject-gilt.vercel.app/",
    repo: "https://github.com/moyoussef11/bootstrapproject",
    skills: ["HTML", "CSS", "JAVASCRIPT", "Bootstrap"],
  },
  {
    id: 15,
    title: "Business Growth Template",
    image: business,
    desc: "Business Growth Template is a clean, modern front-end landing page built using HTML, CSS, and JavaScript. Designed to help business owners promote their services and generate leads, this template is visually appealing and user-friendly.",
    demo: "https://business-ebon-pi.vercel.app/",
    repo: "https://github.com/moyoussef11/Business",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
  },
];

export const experience = [
  {
    id: 1,
    title: "Freelance Frontend Developer",
    todo: "convert figma design to code (SureFire Bio Website)",
    workPlace: "Upwork",
    location: "Remote",
    date: "2025",
    demo: "https://dan-two-smoky.vercel.app/",
    details: [
      "Developed a modern landing page for SureFire Bio using React.js and Tailwind CSS.",
      "Implemented smooth scroll animations and visual transitions using Framer Motion",
      "Built reusable and responsive components to ensure compatibility across devices.",
      "Optimized for fast loading, clean layout, and mobile-first responsiveness.",
    ],
  },
  {
    id: 2,
    title: "Freelance Frontend Developer",
    todo: "convert figma design to code (sopdakt Website)",
    workPlace: "Upwork",
    location: "Remote",
    date: "2025",
    demo: "https://sopdakt-eta.vercel.app/",
    details: [
      "Converted a complete Figma design into a fully responsive and modern e-commerce store using React.js and Tailwind CSS.",
      "Ensured pixel-perfect implementation matching the original Figma layout.",
      "Implemented animated transitions using Framer Motion to enhance user experience.",
      "Built a clean product layout with reusable components, responsive grid system, and mobile-first design.",
    ],
  },
  {
    id: 3,
    title: "Freelance Mern Stack Developer React js Node js",
    todo: "Convert Figma design into a full MERN Stack implementation for Thawrah Academy Platform, including Q&A system, resource library, admin dashboard, and email integration.",
    workPlace: "mostaql",
    location: "Remote",
    date: "2025",
    demo: "https://tharwah-acedemy-front.vercel.app/",
    details: [
      "Developed a full-featured Q&A and resource platform to browse articles, questions, and library files (PDFs, images, videos).",
      "Implemented debounced search and advanced filters by category for seamless user experience.",
      "Built an admin dashboard for managing all platform content, with email alerts via Nodemailer for user-submitted questions.",
      "Designed a responsive, user-friendly UI using Tailwind CSS and Ant Design to ensure accessibility across all devices.",
    ],
  },
];

export const techs = [
  {
    id: 1,
    logo: javaScriptLogo,
    name: "JS",
  },
  {
    id: 2,
    logo: typeScriptLogo,
    name: "TypeScript",
  },
  {
    id: 3,
    logo: reactLogo,
    name: "React.js",
  },
  {
    id: 4,
    logo: nextLogo,
    name: "Next.js",
  },
  {
    id: 5,
    logo: nodeLogo,
    name: "Node.js",
  },
  {
    id: 6,
    logo: expressLogo,
    name: "Express.js",
  },
  {
    id: 7,
    logo: tailwindLogo,
    name: "Tailwind CSS",
  },
  {
    id: 8,
    logo: bootstrapLogo,
    name: "Bootstrap CSS",
  },
  {
    id: 9,
    logo: viteLogo,
    name: "Vite",
  },
  {
    id: 10,
    logo: mongoLogo,
    name: "Mongo DP",
  },
  {
    id: 11,
    logo: reduxLogo,
    name: "redux toolkit",
  },
  {
    id: 12,
    logo: gitLogo,
    name: "Git",
  },
  {
    id: 13,
    logo: gitHupLogo,
    name: "Github",
  },
  {
    id: 14,
    logo: postmanLogo,
    name: "postman",
  },
  {
    id: 15,
    logo: swaggerLogo,
    name: "swagger",
  },
  {
    id: 16,
    logo: restLogo,
    name: "Rest API",
  },
  {
    id: 17,
    logo: socketLogo,
    name: "socket.io",
  },
];

export { logo, slide1, slide2, slide3, slide4, slide5, education };
