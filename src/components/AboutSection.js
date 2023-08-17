import React from "react";
import { motion } from "framer-motion";
import { Description, Hide } from "../styles";
import { titleAnim, fade } from "../Animation";

const AboutSection = () => {
  return (
    <div className="text-white sm:w-[500px] xs:w-[350px]">
      <Description variants={fade}>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Drews Beaver <span>Dam BBQ</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Bringing you the best BBQ
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>in WI</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade} className="text-white">
          Contact us for catering availablity.
        </motion.p>
        {/* <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link> */}
      </Description>
    </div>
  );
};

//Styled Component

export default AboutSection;
