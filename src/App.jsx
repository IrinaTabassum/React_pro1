import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contuct from "./Contuct";
import Navebar from "./Navebar";

 import { Switch, Route, Redirect} from "react-router-dom";

const App = () => {
  return (
    <>
     <Navebar/>
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/about" component = {About} /> 
      <Route exact path = "/service" component = {Service} /> 
      <Route exact path = "/contuct" component = {Contuct} />
      <Redirect to = "/" />      
      
    </Switch>
    </>
  );
};

export default App;
