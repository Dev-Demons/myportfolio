import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponents";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 rounded-[40px] object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >

        As a highly skilled, versatile, and experienced full-stack developer,
        I am an experienced software engineer with deep knowledge of backend systems, databases, data warehousing, data engineering, and
        building data-driven products and services, and a skilled Java/Kotlin, native mobile, Flutter, and React web developer with the ability to
        build web-scale, high-performance, full-stack systems ahead of schedule.
        <br />I have been involved in projects ranging from quick MVP creation to solid development and developed successful applications through multiple iterations over the years.
        I pride myself on my attention to detail and finding simple, practical solutions to problems.
        <br />I'm interested in algorithmic-level efficiency on software development and have experience with front-end and back-end technologies and frameworks.
        I love learning anything, especially if it helps me improve my skills.
        <br />With a keen eye for detail and a passion for delivering high quality work, I'm able to create dedicated to creating beautiful, user-friendly experiences that delight our users.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
