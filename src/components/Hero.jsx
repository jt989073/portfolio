import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-20 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I'm <span className={`text-[#915eff] `}>James</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a software engineer specializing in developing
            innovative web applications with a multitude of full-stack technologies.
            <br className="sm:block hidden"/>
            <br className="sm:block hidden"/>
            Currently, I teach at App Academy, empowering students to master
            software development. My passion lies in leveraging technology to
            create impactful solutions.
          </p>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  );
};

export default Hero;
