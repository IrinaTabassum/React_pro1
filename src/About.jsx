import React from "react";
import Comon from "./Comon";
import web from "../src/images/img1.png";


const About = () => {
  return (
    <>
      <Comon 
      name = ' About '
      imgsrc = {web}
      visit="/contuct"
      btname="Contuct Now"
      />
    </>
  );
};

export default About;
