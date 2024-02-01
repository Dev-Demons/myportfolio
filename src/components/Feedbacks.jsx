import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../HigherOrderComponents";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1 ">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
        </div>
        <a href={link}><img src={image} alt={`feedback by ${name}`} className="w-10 h-10 rounded-full object-cover "/></a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-[20px] min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>        
      </motion.div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-col rounded-[20px] flex-wrap gap-2 bg-tertiary`}>
        <p className={'sm:text-[24px] text-[20px] text-white  tracking-wider'}>Bachelor of Science in Computer Science</p>
        <p className={'sm:text-[24px] text-[20px] text-secondary  tracking-wider'}> Simon Fraser University</p>
        <p className={'sm:text-[24px] text-[20px] text-secondary  tracking-wider'}>05/2012 - 07/2015</p>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
