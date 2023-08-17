import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { EventState } from "../eventState";

//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const EventDetail = () => {
  const url = useLocation();
  const { id } = useParams();
  const [events] = useState(EventState);
  const [event, setEvent] = useState({ awards: [] });

  useEffect(() => {
    const currentEvent = events.filter((sm) => sm.url === url.pathname);
    setEvent(currentEvent[0]);
  }, [events]);

  console.log(id);
  return (
    <Details
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Headline>
        <h2>{event.title}</h2>
        <img src={event.mainImg} alt="movie" />
      </Headline>
      <Awards>
        {event.awards.map((a) => (
          <Award title={a.title} discr={a.description} key={a.title} />
        ))}
      </Awards>
      <ImageDisplay>
        <img src={event.secondaryImg} alt="" />
      </ImageDisplay>
    </Details>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 72vh;
    object-fit: cover;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    margin: 2rem 2rem;
    display: block;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const Award = ({ title, discr }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{discr}</p>
    </AwardStyle>
  );
};

export default EventDetail;
