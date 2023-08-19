import React from "react";
import Logo from "../img/Logo.PNG";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/">
          <img src={Logo} className="w-32 h-auto" alt="Logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Gallery</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
      <div className="mr-4 w-32 flex justify-between">
        <a
          href="https://www.instagram.com/bbq_withdrew/"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/pages/Drews-Beaver-Dam-BBQ/112089630337460"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  background: rgba(27, 27, 27, 0.7);
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  backdrop-filter: saturate(180%) blur(20px);
  #logo {
    font-size: 1.5rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 2rem 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    #logo {
      display: block;
      margin: 1rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #edc491;
  position: absolute;
  max-width: 7rem;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default Nav;
