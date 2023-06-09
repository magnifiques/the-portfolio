import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/animations";
import { about } from "../constants/texts";
import { styles } from "../styles";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import { useState } from "react";
import Fridge from "./canvas/fridge/Fridge";
import Shoe from "./canvas/shoe/Shoe";
import Cassette from "./canvas/cassette/Cassette";
import Backpack from "./canvas/backpack/Backpack";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const Interests = () => {
  const [interest, setInterest] = useState("");

  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What do I do?</p>
      <h2 className={styles.sectionHeadText}>My Interests</h2>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="w-full grid grid-cols-2  items-center justify-items-center gap-4 mt-5"
      >
        <div className="mt-12 pt-8 pb-8">
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
        <div className="w-full h-full">
          {interest === "Web Development" ? (
            <Fridge />
          ) : interest === "Graphic Design" ? (
            <Backpack />
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
