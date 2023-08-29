import React from "react";
//import icons

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import DrewWinter from "../img/DrewWinter.png";
import { Reveal } from "./reveal";

//Styled
import styled from "styled-components";

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
          <div className="flex xs:flex-col xs:items-center lg:justify-normal lg:w-2/3">
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={clock} alt="clock" />
                  <div className="bg-white text-black p-4 ms-3 text-lg rounded-lg drop-shadow-[-2px_3px_5px_#EDC491]">
                    Any Time of Year
                  </div>
                </div>
                <p>Winter, Spring, Summer, Fall</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={teamwork} alt="team work" />
                  <div className="bg-white text-black p-4 ms-3 text-lg rounded-lg drop-shadow-[-2px_3px_5px_#EDC491]">
                    Caterring for any ocassion
                  </div>
                </div>
                <p>Weddings, corprate events, family gatherings etc.</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={money} alt="money" />
                  <div className="bg-white text-black p-4 ms-3 text-lg rounded-lg drop-shadow-[-2px_3px_5px_#EDC491]">
                    Affordable options
                  </div>
                </div>
                <p>For any size event</p>
              </Card>
            </Reveal>
            <Reveal>
              <Card>
                <div className="icon">
                  <img src={diaphragm} alt="diaphragm" />
                  <div className="bg-white text-black p-4 ms-3 text-lg rounded-lg drop-shadow-[-2px_3px_5px_#EDC491]">
                    Optional phtography service
                  </div>
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
