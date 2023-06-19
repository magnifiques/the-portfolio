import { styles } from "../styles";
import Cafe from "./canvas/Cafe";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] lg:top-[10px] mx-auto grid lg:grid-cols-2 justify-items-center items-center gap-2 lg:gap-4`}
      >
        <div>
          {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 bg-blue-400" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-400 to-blue-950" />
          </div> */}
          <h1 className={`${styles.heroHeadText}`}>
            Hello, My name is <span className="text-amber-400">Arpit</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I create web apps, <br className="sm:block hidden" />
            3D models and user interfaces.
          </p>
        </div>

        <Cafe />
      </div>
      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
