//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import MeatCover from "../img/CoverMeat.png";
import WoodCover from "../img/CoverWood.png";
import drone from "../img/Drone.mp4";
import { useEffect, useState, React } from "react";

//animations
import { motion, useScroll, useTransform } from "framer-motion";
import { pageAnimation } from "../Animation";
import { useRef } from "react";

const AboutBBQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        localStorage.setItem("hasSeenModal", "true");
      }, 2000); // Delay of 2 seconds

      return () => clearTimeout(timer); // Clear timeout if component unmounts
    }
  }, []);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return isModalOpen ? (
    <Modal closeModal={closeModal} />
  ) : (
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
const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-50 text-black rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Thank you for visiting our site
        </h2>
        <p className="text-left text-white mb-6">
          With a growing family, we’ve decided to step away from the grill for a
          while. We’re so grateful to everyone who has helped us grow, and we’ll
          be back once our new grill masters are ready! Thank you so much for
          your support and patience.
        </p>
        <button
          onClick={closeModal}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};
