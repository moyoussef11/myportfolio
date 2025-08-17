import TechCard from "../components/Cards/TechCard";
import {
  education,
  experience,
  projects,
  slide1,
  slide2,
  slide4,
  slide5,
  techs,
} from "../assets/data";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import LightRays from "../components/UI/LightRays";
import { BsPersonRaisedHand } from "react-icons/bs";
import { IoIosMailUnread } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import DotGrid from "../components/UI/DotGrid";
import ProjectCard from "../components/Cards/ProjectCard";
import { MdWork } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import ExperienceCard from "../components/Cards/ExperienceCard";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {
  FaPhoneAlt,
  FaPhone,
  FaLinkedin,
  FaWhatsapp,
  FaLocationArrow,
} from "react-icons/fa";
import { FaLockOpen, FaGithub } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <main
        id="#"
        className="w-full min-h-screen flex flex-col items-center justify-center px-5 relative"
      >
        <img src={slide1} alt="slide1" className="absolute left-0 top-0" />
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#184fc6"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col relative z-10 mt-[130px] sm:mt-0 items-center justify-center"
        >
          <div className="text-center max-w-4xl">
            <h4 className="text-2xl sm:text-5xl font-black capitalize text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent">
                Mohamed Youssef
              </span>
            </h4>
            <ReactTyped
              className="text-4xl font-semibold block my-5 bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent"
              strings={[
                "MERN Stack developer",
                "Frontend developer",
                "Backend developer",
              ]}
              typeSpeed={80}
              backSpeed={30}
              loop
            />
            <p className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              I’m a skilled MERN Stack developer with expertise in JavaScript,
              React, Node.js, Express, and MongoDB. I excel in building dynamic,
              scalable, and user-friendly web applications. A quick learner and
              problem-solver, I collaborate closely with clients to deliver
              efficient solutions that meet their business needs. Let’s create
              something exceptional together!
            </p>
          </div>
          <div className="flex items-center gap-5 my-5 flex-wrap justify-center">
            <a
              href="#projects"
              className="block text-center capitalize bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-800 hover:text-gray-200 hover:scale-95 duration-300"
            >
              view my work
            </a>
            <a
              href="#contact"
              className="block text-center capitalize bg-black border border-gray-600 text-white px-4 py-3 rounded-xl hover:bg-white/20 hover:text-gray-200 hover:scale-95 duration-300"
            >
              contact me
            </a>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/1a_A5pwtCfQNV83uh1HLwaxmWGLO_gDN6/view?usp=sharing"
              className="block text-center capitalize bg-black border border-gray-600 text-white px-4 py-3 rounded-xl hover:bg-white/20 hover:text-gray-200 hover:scale-95 duration-300"
            >
              CV / resume
            </a>
          </div>
          <div>
            <h5 className="text-center my-3">Tech I work with:</h5>
            <div
              id="skills"
              className="techs flex gap-3 flex-wrap items-center justify-center max-w-2xl"
            >
              {techs.map((tech) => (
                <TechCard key={tech.id} logo={tech.logo} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <section id="about" className="py-14 relative overflow-hidden">
        <img src={slide5} alt="slide" className="absolute left-0 z-0" />
        <img
          src={slide2}
          alt="slide"
          className="absolute bottom-0 right-0 z-0"
        />
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#0f1d32"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="text-center relative z-10">
          <h4 className="text-6xl capitalize text-white font-bold w-fit mx-auto relative">
            about <span className="text-blue-600">me</span>
            <span className="bg-red-300 w-full h-[5px] my-2 block bg-gradient-to-r from-blue-600 to-gray-800"></span>
          </h4>
          <span className="text-[18px]">
            Get to know the person behind the code
          </span>
        </div>
        <div className="bg[#0e1622] relative z-10 px-5 md:px-10 py-10 my-20">
          <h2 className="text-white font-bold text-3xl">
            {" "}
            MERN Stack Developer
            <span className="block bg-blue-600 h-[5px] w-[150px] my-2"></span>
          </h2>
          <div className="w-full flex flex-col md:flex-row overflow-hidden">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <p className="textP">
                I'm <span className="textSpecial">Mohamed Youssef</span>, a
                passionate{" "}
                <span className="textSpecial">MERN Stack Developer</span> with
                over <span className="textSpecial">3 years</span> of experience
                crafting modern, scalable, and user-friendly web applications.
                My core expertise lies in{" "}
                <span className="textSpecial">React.js</span>, and I specialize
                in translating <span className="textSpecial">Figma</span>{" "}
                designs into <span className="textSpecial">responsive</span>,
                pixel-perfect user interfaces using{" "}
                <span className="textSpecial">Tailwind CSS</span>,{" "}
                <span className="textSpecial">Bootstrap</span>, and{" "}
                <span className="textSpecial">clean</span>, reusable code.
              </p>
              <p className="textP">
                Throughout my career, I've worked on a variety of{" "}
                <span className="textSpecial">full-stack</span>
                projects — from building{" "}
                <span className="textSpecial">admin dashboards</span> to
                creating dynamic content platforms. I enjoy tackling complex UI
                <span className="textSpecial">challenges</span> and{" "}
                <span className="textSpecial">transforming</span> them into
                intuitive user experiences with excellent{" "}
                <span className="textSpecial">performance</span> and{" "}
                <span className="textSpecial">accessibility</span> in mind.
              </p>
              <p className="textP">
                I'm deeply committed to writing{" "}
                <span className="textSpecial">clean</span>, maintainable, and
                well-structured code. I prioritize seamless user experiences{" "}
                <span className="textSpecial">(UX)</span>, follow
                component-based architecture, and implement{" "}
                <span className="textSpecial">performance</span> optimization
                techniques such as{" "}
                <span className="textSpecial">lazy loading</span>,
                <span className="textSpecial">debouncing</span>, and state
                management with{" "}
                <span className="textSpecial">Redux Toolkit.</span>
              </p>
              <p className="textP">
                In addition to <span className="textSpecial">frontend</span>{" "}
                development, I have hands-on experience with{" "}
                <span className="textSpecial">backend</span> technologies like
                <span className="textSpecial">Node.js</span>,{" "}
                <span className="textSpecial">Express.js</span>, and{" "}
                <span className="textSpecial">MongoDB</span>. I’ve built and
                integrated RESTful APIs, implemented{" "}
                <span className="textSpecial">authentication</span> with{" "}
                <span className="textSpecial">JWT</span>, and managed complex
                data models. This{" "}
                <span className="textSpecial">full-stack</span> knowledge allows
                me to understand the entire web development
                <span className="textSpecial">lifecycle</span> and build
                complete, <span className="textSpecial">scalable</span>{" "}
                applications from the ground up.
              </p>
              <p className="textP">
                I'm always <span className="textSpecial">learning</span> and
                staying up to date with the latest{" "}
                <span className="textSpecial">trends</span> in the{" "}
                <span className="textSpecial">JavaScript</span> ecosystem.
                Whether it's exploring the newest features of{" "}
                <span className="textSpecial">React</span>
                or improving <span className="textSpecial">
                  performance
                </span>{" "}
                with <span className="textSpecial">server-side rendering</span>
                and <span className="textSpecial">APIs</span>, I strive to bring
                the best possible solutions to every project I build.
              </p>
              <p className="textP">
                Outside of coding, I enjoy helping others — whether through tech
                <span className="textSpecial">communities</span>, content
                creation, or <span className="textSpecial">mentorship</span>. I
                believe in continuous improvement,
                <span className="textSpecial">collaboration</span>, and sharing
                knowledge to grow both
                <span className="textSpecial">personally</span> and{" "}
                <span className="textSpecial">professionally</span>.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="bg[#0f1c31] p-5 my-5 border border-gray-700 rounded-2xl w-fit h-fit"
            >
              <h2 className="text-white font-bold text-2xl my-3">
                Personal Info
              </h2>
              <div className="info flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <BsPersonRaisedHand
                    className="bg-[#112546] p-2 text-yellow-500 rounded-full"
                    size={40}
                  />
                  <div>
                    <span className="capitalize">name</span>
                    <h4 className="text-white">Mohamed Youssef</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IoIosMailUnread
                    className="bg-[#112546] p-2 text-white rounded-full"
                    size={40}
                  />
                  <div>
                    <span className="capitalize">Email</span>
                    <h4 className="text-white">mohmedyoussef472@gmail.com</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapLocationDot
                    className="bg-[#112546] p-2 text-pink-600 rounded-full"
                    size={40}
                  />
                  <div>
                    <span className="capitalize">Location</span>
                    <h4 className="text-white">Giza, Egypt</h4>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FcSearch
                    className="bg-[#112546] p-2 text-pink-600 rounded-full"
                    size={40}
                  />
                  <div>
                    <span className="capitalize">Status</span>
                    <h4 className="text-white">Open to opportunities</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg[#0e141d] p-6 rounded-xl border border-gray-700 w-full md:w-[75%] my-5"
          >
            <h2 className="text-white text-xl font-semibold mb-6">
              Development Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>Write clean, maintainable, and scalable code</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>Optimize performance from the early stages</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>Build reusable, component-based architecture</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>Prioritize accessibility and inclusive design</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>Ensure consistent UX across all screen sizes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>
                  Follow best practices in API integration and data handling
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>Embrace continuous learning and growth</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-lg">✓</span>
                <span>
                  Focus on meaningful UI that balances aesthetics and usability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-14 relative overflow-hidden">
        <img src={slide1} alt="slide1" className="absolute top-0 left-0" />
        <img src={slide2} alt="slide2" className="absolute top-0 right-0" />
        <img src={slide4} alt="slide4" className="absolute bottom-0 left-0" />
        <img src={slide2} alt="slide5" className="absolute bottom-0 right-0" />
        <div className="text-center relative z-10">
          <h4 className="text-5xl capitalize text-white font-bold w-fit mx-auto relative">
            My <span className="text-blue-600">Projects</span>
            <span className="bg-red-300 w-full h-[5px] my-2 block bg-gradient-to-r from-blue-600 to-gray-800"></span>
          </h4>
          <span className="text-[18px]">
            Explore my collection of projects showcasing different technologies
            and solutions I've built.
          </span>
        </div>
        <div className="projects my-10 grid grid-cols-1 sm:grid-cols-2 gap-7 px-5 relative z-10">
          {projects.map((project) => (
            <ProjectCard
              name={project.title}
              id={project.id}
              pic={project.image}
              key={project.id}
              desc={project.desc}
              demo={project.demo}
              repo={project.repo}
              skills={project.skills}
            />
          ))}
        </div>
      </section>
      <section
        id="experience"
        className="py-14 relative overflow-hidden px-5 md:px-10"
      >
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#0f1d32"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="text-center relative z-10">
          <h4 className="text-4xl  text-white font-bold w-fit mx-auto relative">
            Experien<span className="text-blue-600">ce & Ed</span>ucation
            <span className="bg-red-300 w-full h-[5px] my-2 block bg-gradient-to-r from-blue-600 to-gray-800"></span>
          </h4>
          <span className="text-[18px]">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </span>
        </div>
        <div className="mt-10 z-10 relative py-4 flex gap-2 items-baseline flex-col md:flex-row">
          <div id="Experience">
            <div className="title flex items-center gap-3 mb-10">
              <MdWork size={35} className="text-blue-600" />
              <span className="text-white capitalize text-3xl font-semibold">
                Work Experience
              </span>
            </div>
            <div>
              {experience.map((item) => (
                <ExperienceCard
                  key={item.id}
                  title={item.title}
                  todo={item.todo}
                  workPlace={item.workPlace}
                  location={item.location}
                  date={item.date}
                  details={item.details}
                />
              ))}
            </div>
          </div>
          <div id="Education">
            <div className="title flex items-center gap-3 mb-10">
              <img src={education} alt="educationLogo" className="h-20" />
              <span className="text-white capitalize text-3xl font-semibold">
                Education{" "}
              </span>
            </div>
            <div
              data-aos="fade-left"
              className="card w-full pb-10 flex flex-col gap-2 relative border-l-2 border-l-blue-600/50 pl-10"
            >
              <span className="bg-blue-600 h-3 w-3 rounded-full block absolute -left-2 top-2"></span>
              <h4 className="text-white text-2xl capitalize font-semibold">
                Bachelor's Degree of Science in Computer Science{" "}
              </h4>
              <span className="text-blue-600 font-semibold">
                High Institute for Information Systems and Computer Science{" "}
              </span>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span className="capitalize">October, Giza</span>
                </div>
                <div className="flex items-center gap-2">
                  <CgCalendarDates />
                  <span className="capitalize">2021 – 2025</span>
                </div>
              </div>
              <ul className="list-disc list-inside font-semibold">
                <li>Graduation Year: 2025</li>
                <li>Overall Grade: Very Good</li>
                <li>
                  Graduation Project: AI-powered Food Picking for Charity –
                  <span className="text-white"> Grade: Excellent</span>
                </li>
                <li>
                  Worked on the frontend part of the project using React.js,
                  focusing on building responsive and interactive user
                  interfaces.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-14 relative overflow-hidden">
        <img src={slide5} alt="slide" className="absolute left-0 z-0" />
        <img
          src={slide2}
          alt="slide"
          className="absolute bottom-0 right-0 z-0"
        />{" "}
        <div className="text-center relative z-10">
          <h4 className="text-5xl capitalize text-white font-bold w-fit mx-auto relative">
            Let's <span className="text-blue-600">Connect</span>
            <span className="bg-red-300 w-full h-[5px] my-2 block bg-gradient-to-r from-blue-600 to-gray-800"></span>
          </h4>
          <span className="text-[18px]">
            Have a project in mind or want to discuss opportunities? <br /> I'm
            always open to talking about creative ideas and new projects.
          </span>
        </div>
        <div className="max-w-5xl relative mx-auto border border-gray-600 rounded-2xl mt-10 p-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-7 w-full md:w-1/2">
            <h4 className="text-2xl text-white font-bold">
              Contact Information
            </h4>
            <div className="flex gap-5 bg-[#0d1117] p-4 hover:bg-blue-600/20 duration-300 border border-gray-600 rounded-2xl">
              <FaLocationDot
                size={40}
                className="text-blue-600 p-2 rounded-full bg-[#0d1117]"
              />
              <div className="flex flex-col gap-2">
                <h6 className="capitalize text-white font-semibold">
                  Location
                </h6>
                <span>Giza, Egypt</span>
              </div>
            </div>
            <div className="flex gap-5 bg-[#0d1117] p-4 hover:bg-blue-600/20 duration-300 border border-gray-600 rounded-2xl">
              <IoMail
                size={40}
                className="text-blue-600 p-2 rounded-full bg-[#0d1117]"
              />
              <div className="flex flex-col gap-2">
                <h6 className="capitalize text-white font-semibold">Email</h6>
                <span className="text-sm">mohmedyoussef472@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-5 bg-[#0d1117] p-4 hover:bg-blue-600/20 duration-300 border border-gray-600 rounded-2xl">
              <FaPhoneAlt
                size={40}
                className="text-blue-600 p-2 rounded-full bg-[#0d1117]"
              />
              <div className="flex flex-col gap-2">
                <h6 className="capitalize text-white font-semibold">Phone</h6>
                <span>+201146646254</span>
              </div>
            </div>
            <div className="flex gap-5 bg-[#0d1117] p-4 hover:bg-blue-600/20 duration-300 border border-gray-600 rounded-2xl">
              <FaLockOpen
                size={40}
                className="text-blue-600 p-2 rounded-full bg-[#0d1117]"
              />
              <div className="flex flex-col gap-2">
                <h6 className="capitalize text-white font-semibold">
                  Availability
                </h6>
                <span className="text-sm">Open for opportunities</span>
              </div>
            </div>
            <div>
              <h6 className="text-white text-xl capitalize font-semibold">
                Contact Me Directly
              </h6>
              <div className="flex items-center gap-5 flex-wrap mt-5">
                <a
                  href="mailto:mohmedyoussef472@gmail.com"
                  className="text-white bg-blue-600 flex items-center gap-3 py-2 px-4 rounded-2xl w-fit hover:scale-105 hover:opacity-85 duration-300"
                >
                  <IoMail />
                  <span className="text-white capitalize">Email me</span>
                </a>
                <a
                  href="tel:+201146646254"
                  className="text-white bg-green-600 flex items-center gap-3 py-2 px-4 rounded-2xl w-fit hover:scale-105 hover:opacity-85 duration-300"
                >
                  <FaPhone />
                  <span className="text-white capitalize">Call me</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl text-white capitalize font-bold">
                Social Media
              </h4>
              <p>
                Follow me on social platforms to see my latest work and
                projects.
              </p>
            </div>
            <div className="">
              <div className="btns mt-5 grid grid-cols-2 gap-5">
                <a
                  href="https://github.com/moyoussef11"
                  className="text-white text-center flex items-center justify-center p-3 rounded-2xl hover:bg-blue-600 duration-300 gap-3 border border-gray-600"
                  target="_blank"
                >
                  <FaGithub />
                  <span className="font-semibold">Github</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-youssef11/"
                  className="text-white text-center flex items-center justify-center p-3 rounded-2xl hover:bg-blue-600 duration-300 gap-3 border border-gray-600"
                  target="_blank"
                >
                  <FaLinkedin />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=201146646254&app=facebook&entry_point=page_cta"
                  className="text-white text-center flex items-center justify-center p-3 rounded-2xl hover:bg-blue-600 duration-300 gap-3 border border-gray-600"
                  target="_blank"
                >
                  <FaWhatsapp />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
              <div className="mt-10 bg-blue-600/20 p-5 rounded-2xl mx-auto text-center flex flex-col items-center gap-3 justify-center">
                <FaLocationArrow size={40} className="text-blue-600" />
                <span className="text-white capitalize text-xl">
                  Have a Project Idea?
                </span>
                <p>Send me a message and I'll get back to you ASAP</p>
                <a
                  href="mailto:mohmedyoussef472@gmail.com"
                  className="bg-blue-600 py-2 px-4 text-[18px] rounded-2xl text-white hover:opacity-85 capitalize duration-300"
                >
                  start conversation
                </a>
              </div>
            </div>
          </div>
          <span className="bg-gray-600 h-full w-[1px] absolute inset-0 z-0 left-[50%] hidden md:block"></span>
        </div>
      </section>
    </>
  );
};

export default Home;
