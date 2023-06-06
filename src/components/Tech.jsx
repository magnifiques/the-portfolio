import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import { technologies } from "../constants/texts";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-40 h-40 flex flex-col items-center"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} name={technology.name} />
          <p className="font-bold text-gray-200">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
