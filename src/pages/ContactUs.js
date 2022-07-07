import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Animation";
import styled from "styled-components";
import family3 from "../img/Family3.png";
import { Image } from "../styles";
const EMAIL_KEY = process.env.REACT_APP_EMAIL_KEY;
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1hl34te", "template_efrk56x", form.current, EMAIL_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ display: "flex" }}>
      <Contact
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Send Us A Message</h2>
            </Social>
            <Info variants={titleAnim}>
              <h1>Call or text at ###-###-####</h1>
            </Info>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2>Send Us A Email</h2>
            </Social>
            <Info variants={titleAnim}>
              <form ref={form} onSubmit={sendEmail}>
                <FormDiv>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Message</label>
                  <textarea name="message" required />
                  <button type="submit" value="Send">
                    Submit
                  </button>
                </FormDiv>
              </form>
            </Info>
          </Hide>
        </div>
      </Contact>
      <Image>
        <img src={family3} alt="" />
      </Image>
    </div>
  );
};
const Info = styled(motion.div)`
  label {
    font-size: 17px;
    color: white;
  }
  input {
    margin-bottom: 1rem;
    height: 2.5rem;
    border-radius: 5px;
    border: 1px solid black;
  }
  textarea {
    height: 70px;
    margin-bottom: 1rem;
  }
  h1 {
    color: #ecc491;
    margin-left: 5rem;
  }
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: #232323;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 2rem;
  color: #ecc491;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: white;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: white;
`;
export default ContactUs;
