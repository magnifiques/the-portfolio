import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import { technologies } from "../constants/texts";
import { motion } from "framer-motion";
import { textVariant } from "../utils/animations";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="grid grid-row-2 bg">
      <motion.div variants={textVariant()} className="mb-4">
        <h3 className={styles.sectionSubText}>How do I make my projects</h3>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
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
    </div>
  );
};

export default SectionWrapper(Tech);
