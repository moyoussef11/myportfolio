import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

const ExperienceCard = ({
  title,
  todo,
  workPlace,
  location,
  date,
  details,
}) => {
  return (
    <div
      data-aos="fade-right"
      className="card w-full pb-10 flex flex-col gap-2 relative border-l-2 border-l-blue-600/50 pl-10"
    >
      <span className="bg-blue-600 h-3 w-3 rounded-full block absolute -left-2 top-2"></span>
      <h4 className="text-white text-2xl capitalize font-semibold">{title}</h4>
      <span className="text-white text-sm">{todo}</span>
      <span className="text-blue-600 uppercase font-semibold">{workPlace}</span>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <span className="capitalize">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <CgCalendarDates />
          <span className="capitalize">{date}</span>
        </div>
      </div>
      <ul className="list-disc list-inside">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
