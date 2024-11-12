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
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        Full Stack Developer with a strong focus on delivering scalable and high-performance solutions for both e-commerce and general web applications. With expertise across the entire development stack, I specialize in crafting robust backends, interactive frontends, and seamless integrations that drive user engagement and business growth.
        <br />
        My experience spans across popular e-commerce platforms like <strong>Shopify</strong>, <strong>WooCommerce</strong>, and <strong>PrestaShop</strong>, where I have developed custom themes, apps, and plugins to meet unique business needs. Beyond e-commerce, I’ve built sophisticated web applications using modern JavaScript frameworks (<strong>React, Vue, Angular</strong>) and powerful backends (<strong>Node.js, NestJS, Laravel</strong>). I have a deep understanding of integrating third-party APIs, optimizing databases (<strong>MySQL, MongoDB, PostgreSQL</strong>), and implementing DevOps best practices for efficient deployment and scaling.
        <br />
        I thrive on solving complex problems and am passionate about creating user-centered solutions that not only look great but also perform exceptionally well. Whether it’s developing a custom Shopify app to streamline your sales process, implementing a secure payment gateway for your WooCommerce store, or building a dynamic frontend for a SaaS product, I bring a comprehensive, client-focused approach to every project.
        <br />
        Explore my portfolio to see a range of projects where I’ve delivered impactful results for clients across various industries. Let’s connect and discuss how I can help transform your ideas into innovative, scalable solutions that exceed expectations.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10" style={{justifyContent:'center'}}>
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
