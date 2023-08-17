import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hide } from "../styles";
//images
import weddingMirror from "../img/WeddingMirror.png";
import grillTrailer from "../img/GrillTrailor.png";
import family from "../img/Family.png";

//animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../Animation";
import { useScroll } from "../components/useScroll";

import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Event>
        <motion.h2 variants={fade}>
          Weddings, Corporate Events, Graduation Parties and More!
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/weddings">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={weddingMirror}
              alt="wedding in Mirror"
            />
          </Hide>
        </Link>
      </Event>
      <Event ref={element} variants={fade} animate={controls} initial="show">
        <h2>We got the grills</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/grills">
          <Hide>
            <motion.img variants={photoAnim} src={grillTrailer} alt="grills" />
          </Hide>
        </Link>
      </Event>
      <Event ref={element2} variants={fade} animate={controls2} initial="show">
        <h2>Like Family</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/family">
          <Hide>
            <motion.img variants={photoAnim} src={family} alt="family" />
          </Hide>
        </Link>
      </Event>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  background: white;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Event = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #905b45;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
