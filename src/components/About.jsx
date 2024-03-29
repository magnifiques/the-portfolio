/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import Shoe from "./canvas/shoe/Shoe";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="grid grid-row-2 lg:grid-cols-2 gap-4 justify-items-center items-center mt-8"
        >
          <Shoe />
          <div>
            <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js, and
              Three.js. I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
            <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
              My Socials:
              <a
                className="font-bold pl-4 text-red-500"
                href="https://github.com/magnifiques"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithubAlt} /> Github
              </a>
              <a
                className="font-bold pl-4 text-blue-500"
                href="https://www.linkedin.com/in/arpit-vaghela"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
