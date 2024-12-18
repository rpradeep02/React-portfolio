import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import HelloText  from "./mobile";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>

      <motion.div  variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Skills</p> <br></br>
      </motion.div>
      
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 text-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
              <p className="mt-2 text-sm font-medium">{technology.name}</p>
          </div>
        ))}
        <HelloText />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");