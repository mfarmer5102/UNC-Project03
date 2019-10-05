import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Container from "./Container";

var noPadding = {
  padding: "0px"
};

const floatingContainerStyle = {
  position: "relative",
  backgroundImage:
    'url("https://www.toptal.com/designers/subtlepatterns/patterns/white-waves.png")'
};

const floatingContentStyle = {
  position: "fixed",
  bottom: "0px",
  left: "10px",
  zIndex: "999"
};

function Main() {
  return (
    <Router>
      <div className="container-fluid full-height" style={noPadding}>
        <div className="row full-height" style={floatingContainerStyle}>
          <div className="animated slideInLeft" style={floatingContentStyle}>
            <Navbar />
          </div>
          <div className="col-12">
            <Container />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
