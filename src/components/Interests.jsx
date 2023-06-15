import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/animations";
import { about } from "../constants/texts";
import { styles } from "../styles";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import { useState } from "react";
import Burger from "./canvas/burger/Burger";
import Shoe from "./canvas/shoe/Shoe";
import Cassette from "./canvas/cassette/Cassette";
import Flower from "./canvas/flower/Flower";
import CanvasLoader from "./CanvasLoader";

const Interests = () => {
  const [interest, setInterest] = useState("");

  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What do I do?</p>
      <h2 className={styles.sectionHeadText}>My Interests</h2>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="w-full mt-8 grid lg:grid-cols-2 justify-items-center items-center gap-2"
      >
        <div>
          {about.map((text, index) => (
            <p
              className="text-[50px] font-bold text-gray-100 hover:text-gray-400  cursor-pointer"
              key={index}
              onClick={() => setInterest(text)}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="h-full">
          {interest === "Web Development" ? (
            <Burger />
          ) : interest === "Graphic Design" ? (
            <Flower />
          ) : interest === "3D Modeling" ? (
            <Shoe />
          ) : (
            <Cassette />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Interests, "");
