import React from "react";
//import icons

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import DrewWinter from "../img/DrewWinter.png";
import { useScroll } from "./useScroll";
import { scrollReval } from "../Animation";

//Styled
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReval}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Image>
        <img src={DrewWinter} alt="" />
      </Image>
      <Description>
        <h2>
          Amazing <span>Service</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Any Time of Year</h3>
            </div>
            <p>Winter, Spring, Summer, Fall</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="team work" />
              <h3>Caterring for any ocassion</h3>
            </div>
            <p>Weddings, corprate events, family gatherings etc.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable options</h3>
            </div>
            <p>For any size event</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Optional phtography service</h3>
            </div>
            <p>
              Needing a photographer? We can help there too. Keep scrolling for
              the faq section.
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  background-image: none;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      padding: 1rem;
      color: black;
    }
  }
`;
export default ServicesSection;
