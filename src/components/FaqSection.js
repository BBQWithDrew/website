import React from "react";
import styled from "styled-components";
import BBQSign from "../img/BBQSign.png";
import { About } from "../styles";
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";
import { AnimateSharedLayout } from "framer-motion";

import { scrollReval } from "../Animation";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReval}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Email or Phone</p>
            <p>
              Check out the contact us page for more information. We will get
              back to you typically within 24 hours.
            </p>
          </div>
        </Toggle>
        <Toggle title="Photography you say?">
          <div className="answer">
            <p>Professional Photos</p>
            <p>
              Like the photos on the website? Our photgpher can accompany the
              cook and take photos of the event for you as well.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are the payment mehtods?">
          <div className="answer">
            <p>Accepting of many payments methonds</p>
            <p>Check, paypal, cashapp, venmo, or just some good ol' cash</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
