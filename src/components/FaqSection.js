import React from "react";
import styled from "styled-components";
import BBQSign from "../img/BBQSign.png";
import { About } from "../styles";
import { Reveal } from "./reveal";
import { useScroll } from "./useScroll";
//import { AnimateSharedLayout } from "framer-motion";

import { scrollReval } from "../Animation";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReval} initial="show" ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Reveal>
        <div className="xs:ms-24">
          <h2>How do I start</h2>
        </div>
      </Reveal>
      <Reveal>
        <div className="answer">
          <p>Email or Phone</p>
          <p>
            Check out the contact us page for more information. We will get back
            to you typically within 24 hours.
          </p>
        </div>
      </Reveal>
      <div className="faq-line"></div>
      <Reveal>
        <h2>Photography offered for your event</h2>
      </Reveal>

      <Reveal>
        <div className="answer">
          <p>Professional Photos</p>
          <p>
            Like the photos on the website? Our photographer can accompany the
            cook to photograph the event.
          </p>
        </div>
      </Reveal>
      <div className="faq-line"></div>
      <Reveal>
        <h2>What are the payment mehtods</h2>
      </Reveal>

      <Reveal>
        <div className="answer">
          <p>
            Accepting of many payments methonds. Check, paypal, or just some
            good ol' cash
          </p>
        </div>
      </Reveal>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  background-image: none;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
