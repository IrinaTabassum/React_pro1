import React from "react";
import Comon from "./Comon";
import web from "../src/images/img.png";



const Home = () => {
  return (
    <>
     <Comon
     name = ' Home '
     imgsrc = {web}
     visit="/service"
     btname="Got Started"
     />
    </>
  );
};

export default Home;
