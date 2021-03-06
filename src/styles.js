import styled from "styled-components";
import MeatCover from "./img/CoverMeat.png";
import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  background-image: url(${MeatCover});
  color: white;
  background-size: cover;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  font-weight: lighter;
  border: 2px solid #edc491;
  max-width: 500px;
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }

  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
