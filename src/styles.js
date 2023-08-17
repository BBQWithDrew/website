import styled from "styled-components";

import { motion } from "framer-motion";
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  color: white;
  background-size: cover;

  @media (max-width: 700px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled(motion.div)`
  padding: 2rem;
  font-weight: lighter;
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
