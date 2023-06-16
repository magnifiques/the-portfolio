import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/animations";
import { about } from "../constants/texts";
import { styles } from "../styles";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import { useState } from "react";

const Interests = () => {
  const [interest, setInterest] = useState("");
  const [isActive, setIsActive] = useState("Web Development");
  const [currentIndex, setIndex] = useState(0);

  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What do I do?</p>
      <h2 className={styles.sectionHeadText}>My Interests</h2>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 grid lg:grid-cols-2 justify-items-center items-center gap-6"
      >
        <div>
          {about.map((text, index) => (
            <p
              className={`text-[50px] ${
                isActive === text ? "text-yellow-500" : "text-white"
              } font-bold text-white select-none hover:text-gray-400 
              cursor-pointer`}
              key={index}
              onClick={() => {
                setIsActive(text);
                setInterest(text);
                setIndex(index);
              }}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="text-[20px] bg-gray-500 text-black-100 p-8 rounded-xl">
          {currentIndex === 0 ? (
            <p>
              I create web applications and UI/UX designs with a strong focus on
              both world class design and ensuring the end product is a
              commercial success
            </p>
          ) : currentIndex === 1 ? (
            <p>
              I design eye-catching and exquisite Illustrations, visual effects
              and animations using the adobe suite applications such as After
              Effects, Illustrator, Premiere Pro and Photoshop
            </p>
          ) : currentIndex === 2 ? (
            <p>
              I build 2D as well as 3D assets, characters, animations and
              renderings using Blender and Krit
            </p>
          ) : (
            <p>
              I write music reviews of music albums, which are mostly hip-hop,
              electronic, classic rock, pop, grunge and contemporary rock. You
              can check them out on{" "}
              <a
                href="https://www.albumoftheyear.org/user/toxx/"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-500"
              >
                Album of The Year
              </a>
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Interests, "");
