import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ service, title, icon, index }) => {
  return (
    <Tilt className={"xs:w-[250px] w-full"}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={
          "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        }
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} index={idx} {...service} />
        
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-[30px]`} >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate software engineer with a knack for developing
        innovative web applications that stand out for their performance and
        user experience. My expertise lies in a multitude of full-stack
        technologies, where I bring ideas to life through efficient and elegant
        code. Throughout my career, I’ve worked on a wide range of projects,
        from building responsive web applications to creating npm packages that
        solve unique challenges. I thrive in collaborative environments, working
        closely with cross-functional teams to deliver high-quality products
        that drive business growth. I also have experience mentoring junior
        developers, ensuring they grasp complex concepts and contribute
        effectively to projects. For me, software engineering is more than just
        a profession—it's an ongoing journey of learning and problem-solving,
        where I continuously seek opportunities to expand my skills and make a
        tangible impact through technology.
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, 'about');
