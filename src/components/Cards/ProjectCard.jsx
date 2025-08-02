import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({ id, pic, name, desc, demo, repo, skills }) => {
  return (
    <div
      data-aos={`${id % 2 == 0 ? "zoom-in-left" : "zoom-in-right"}`}
      className="project border border-gray-700 rounded-lg group overflow-hidden hover:-translate-y-3 duration-300"
    >
      <div className="w-full h-[200px] relative overflow-hidden">
        <img
          src={pic}
          className="w-full h-full transition-transform duration-500 object-center group-hover:scale-110"
          alt={name}
        />
        <span className="w-full h-full bg-black/30 absolute left-0 top-0"></span>
      </div>
      <div className="flex flex-col my-3 px-5">
        <div className="flex items-center justify-between">
          <h6 className="text-white capitalize text-2xl font-bold">{name}</h6>
          <div className="flex items-center gap-3">
            {repo && (
              <a href={repo} target="_blank" className="block">
                <FaGithub
                  size={20}
                  className="hover:text-blue-600 duration-300 text-white"
                />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" className="block">
                <FaEye
                  size={20}
                  className="hover:text-blue-600 duration-300 text-white"
                />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 my-3">
          <p className="text-sm">{desc}</p>
          <ul className="skills flex items-center gap-3 flex-wrap">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="text-blue-600 capitalize text-[13px] font-semibold bg-[#0f1a2d] w-fit py-1 px-3 rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
