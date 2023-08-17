import React from "react";

//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import MeatCover from "../img/CoverMeat.png";
import WoodCover from "../img/CoverWood.png";
import drone from "../img/Drone.mp4";

//animations
import { motion, useScroll, useTransform } from "framer-motion";
import { pageAnimation } from "../Animation";
import { useRef } from "react";

const AboutBBQ = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ParallaxStuff />
    </motion.div>
  );
};
export default AboutBBQ;

const ParallaxStuff = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const afterVideo = useRef(null);
  const [scrollProgress] = useParalaxScroll(ref);
  const [scrollProgress2] = useParalaxScroll(ref2);
  const [scrollProgress3] = useParalaxScroll(afterVideo);

  const backgroundY = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);
  const sectionY = useTransform(scrollProgress, [0, 1], ["0%", "300%"]);
  const video = useTransform(scrollProgress2, [0, 1], ["-50%", "100%"]);
  const afterVid = useTransform(scrollProgress3, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div>
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative flex xs:justify-centern md:justify-start items-start"
      >
        <motion.div
          style={{ y: sectionY }}
          className="relative sm:mt-64 xs:mt-44 z-20"
        >
          <AboutSection />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${MeatCover})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div
          className="absolute inset-0 z-30 bg-cover bg-center"
          style={{
            backgroundImage: `url(${WoodCover})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>
      <motion.div
        ref={ref2}
        style={{ y: video }}
        className="relative z-0 lg:h-[45rem]"
      >
        <video playsInline loop muted autoPlay>
          <source src={drone} type="video/mp4"></source>
        </video>
      </motion.div>

      <motion.div
        ref={afterVideo}
        style={{ y: afterVid }}
        className="relative z-30"
      >
        <ServicesSection />
      </motion.div>
      <motion.div style={{ y: afterVid }} className="relative z-30">
        <FaqSection />
      </motion.div>
    </motion.div>
  );
};

const useParalaxScroll = ({ ref }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return [scrollYProgress];
};
