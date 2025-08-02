const TechCard = ({ logo, name }) => {
  return (
    <div className="tech w-fit flex items-center gap-2 border border-gray-600 py-1 px-3 rounded-full hover:text-white duration-300 bg-gray-700/40 capitalize">
      <img src={logo} className="h-4" alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default TechCard;
