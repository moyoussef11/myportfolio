import { logo } from "../../assets/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail, IoIosClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full fixed  z-50 bg-[#0d1117] flex items-center justify-between px-5 md:px-10">
      <div>
        <img src={logo} className="h-[80px]" alt="logo" />
      </div>
      <div className="hidden sm:block">
        <ul className="flex items-center gap-7">
          <li>
            <a className="capitalize hover:text-blue-600 duration-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#about"
            >
              about
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#skills"
            >
              skills
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#contact"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <ul className="flex items-center gap-3">
          <li>
            <a href="https://github.com/moyoussef11" target="_blank">
              {" "}
              <FaGithub
                size={20}
                className="hover:text-blue-600 duration-300"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-youssef11/"
              target="_blank"
            >
              {" "}
              <FaLinkedin
                size={20}
                className="hover:text-blue-600 duration-300"
              />
            </a>
          </li>
          <li>
            <a href="mailto:mohmedyoussef472@gmail.com">
              <IoMdMail
                size={20}
                className="hover:text-blue-600 duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:hidden z-[100]" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <IoIosClose size={30} className="hover:text-red-600 cursor-pointer" />
        ) : (
          <CiMenuFries
            size={30}
            className="hover:text-blue-600 cursor-pointer"
          />
        )}
      </div>
      <div
        className={`py-2 sm:hidden bg-white/10 backdrop-blur-2xl absolute ${
          toggle ? "top-[80px]" : "top-[-800px]"
        } w-full left-0 z-50 duration-300`}
      >
        <ul className="flex items-center flex-col gap-3">
          <li>
            <a
              onClick={() => setToggle(false)}
              className="capitalize hover:text-blue-600 duration-300"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#about"
              onClick={() => setToggle(false)}
            >
              about
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#skills"
              onClick={() => setToggle(false)}
            >
              skills
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#projects"
              onClick={() => setToggle(false)}
            >
              projects
            </a>
          </li>
          <li>
            <a
              className="capitalize hover:text-blue-600 duration-300"
              href="#contact"
              onClick={() => setToggle(false)}
            >
              contact
            </a>
          </li>
          <div className="flex gap-3">
            <li>
              <a
                onClick={() => setToggle(false)}
                href="https://github.com/moyoussef11"
                target="_blank"
              >
                {" "}
                <FaGithub
                  size={20}
                  className="hover:text-blue-600 duration-300"
                />
              </a>
            </li>
            <li>
              <a
                onClick={() => setToggle(false)}
                href="https://www.linkedin.com/in/mohamed-youssef11/"
                target="_blank"
              >
                {" "}
                <FaLinkedin
                  size={20}
                  className="hover:text-blue-600 duration-300"
                />
              </a>
            </li>
            <li>
              <a
                onClick={() => setToggle(false)}
                href="mailto:mohmedyoussef472@gmail.com"
              >
                <IoMdMail
                  size={20}
                  className="hover:text-blue-600 duration-300"
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
