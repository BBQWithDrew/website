import React from "react";
//import icons

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import DrewWinter from "../img/DrewWinter.png";
import { Reveal } from "./reveal";
import { scrollReval } from "../Animation";

//Styled
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <div className="lg:flex xs:flex-column bg-secondary lg:justify-center">
      <div className="overflow-hidden lg:ml-[5rem] lg:mr-[10rem]">
        <img
          className="w-full xs:object-cover  xs:object-top xs:h-96 sm:h-[45rem] lg:h-full"
          src={DrewWinter}
          alt=""
        />
      </div>
      <div className="text-white xs:text-center lg:text-left sm:ml-20 lg:w-[50rem]">
        <h2 className="">
          Amazing <span>Service</span>
        </h2>
        {
          <div className="flex flex-wrap xs:justify-center lg:justify-normal lg:w-2/3">
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={clock} alt="clock" />
                  <h3>Any Time of Year</h3>
                </div>
                <p>Winter, Spring, Summer, Fall</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={teamwork} alt="team work" />
                  <h3>Caterring for any ocassion</h3>
                </div>
                <p>Weddings, corprate events, family gatherings etc.</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={money} alt="money" />
                  <h3>Affordable options</h3>
                </div>
                <p>For any size event</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={diaphragm} alt="diaphragm" />
                  <h3>Optional phtography service</h3>
                </div>
                <p>
                  Needing a photographer? We can help there too. Keep scrolling
                  for the faq section.
                </p>
              </Card>
            </Reveal>
          </div>
        }
      </div>
    </div>
  );
};

const Card = styled.div`
  flex-basis: 20rem;
  max-width: 20rem;
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
