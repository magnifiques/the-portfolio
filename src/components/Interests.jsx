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
              className={`text-[35px] lg:text-[50px] ${
                isActive === text ? "text-yellow-500" : "text-white"
              } font-bold text-white select-none lg:hover:text-gray-400 
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
        <div className="text-[15px] lg:text-[20px] bg-gray-300 text-black-100 p-6 lg:p-12 rounded-xl">
          {currentIndex === 0 ? (
            <p>
              I create <span className="text-pink-700">web applications</span>{" "}
              and <span className="text-pink-700">UI/UX designs</span> with a
              strong focus on both world class design and ensuring the end
              product is a commercial success
            </p>
          ) : currentIndex === 1 ? (
            <p>
              I design eye-catching and exquisite{" "}
              <span className="text-pink-700">
                Illustrations, visual effects
              </span>{" "}
              and <span className="text-pink-700">animations</span> using the
              adobe suite applications such as After Effects, Illustrator,
              Premiere Pro and Photoshop
            </p>
          ) : currentIndex === 2 ? (
            <p>
              I build <span className="text-pink-700">2D</span> as well as{" "}
              <span className="text-pink-700">
                3D assets, characters, animations
              </span>{" "}
              and <span className="text-pink-700">renderings</span> using
              Blender and Krit
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
                className="text-pink-700"
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
