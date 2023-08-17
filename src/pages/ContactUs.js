import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Animation";
import styled from "styled-components";
import family3 from "../img/Family3.png";
import { Image } from "../styles";
const EMAIL_KEY = process.env.REACT_APP_EMAIL_KEY;
export const ContactUs = () => {
  const [formSending, setFormSending] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormSending(true);
    emailjs
      .sendForm("service_1hl34te", "template_efrk56x", form.current, EMAIL_KEY)
      .then(
        (result) => {
          setFormSending(false);
          alert("thank you so much for you email, we will be in touch soon");
          setEmailInput("");
          setMessageInput("");
        },
        (error) => {
          alert(error.text);
          setFormSending(false);
          setEmailInput("");
          setMessageInput("");
        }
      );
  };

  return (
    <Container>
      <Contact
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <h2>Get In touch</h2>
            </Social>
            <Info variants={titleAnim}>
              <h1>Call, Text or Email</h1>
              <h1> 920-296-1361</h1>
              <h1>bbqwithdrew@gmail.com</h1>
            </Info>
          </Hide>
          <Hide>
            <Info variants={titleAnim}>
              <form ref={form} onSubmit={sendEmail}>
                <FormDiv>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                  />
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    required
                  />
                  <button type="submit" value="Send" disabled={formSending}>
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
    </Container>
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
  width: 50%;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
    width: 100%;
  }
`;
const Title = styled.div`
  margin-bottom: 2rem;
  color: #ecc491;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Container = styled.div`
  display: flex;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
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
