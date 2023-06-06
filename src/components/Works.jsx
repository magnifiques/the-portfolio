/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/animations";
import { styles } from "../styles";
import { SectionWrapper } from "./wrapper/SectionWrapper";
import {
  ReactBasedProjects,
  WebsiteClones,
  vueBasedProjects,
  vanillaJavascriptProjects,
  threeJSBasedProjects,
} from "../constants/texts";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <>
      {/* <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}> */}
      <motion.div>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20">
        <p className={`${styles.sectionHeadText} mb-10`}>
          React Based Projects:
        </p>
        <div className="flex flex-wrap gap-7">
          {ReactBasedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <p className={`${styles.sectionHeadText} mt-10 mb-10`}>
          Website Clones:
        </p>
        <div className="flex flex-wrap gap-7">
          {WebsiteClones.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className={`${styles.sectionHeadText} mb-10`}>Vue Based Projects:</p>
        <div className="flex flex-wrap gap-7">
          {vueBasedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <p className={`${styles.sectionHeadText} mb-10`}>
          Vanilla JavaScript Projects:
        </p>
        <div className="flex flex-wrap gap-7">
          {vanillaJavascriptProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className={`${styles.sectionHeadText} mb-10`}>THREE.JS Projects:</p>
        <div className="flex flex-wrap gap-7">
          {threeJSBasedProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
