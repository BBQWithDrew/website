import React, { useEffect } from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//animation
import { AnimatePresence } from "framer-motion"; // when the component leaves the react tree say something.

//pages
import AboutBBQ from "./pages/AboutBBQ";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import EventDetail from "./pages/EventDetail";

//router
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(1, 0);
    }, 2);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutBBQ />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/work/:id" exact element={<EventDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
