import React from "react";
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../Animation";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <div className="text-white sm:w-[500px] xs:w-full">
      <Description variants={fade}>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Bringing you the</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              best <span>BBQ</span> in
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>WI</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
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
