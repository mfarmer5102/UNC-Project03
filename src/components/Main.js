import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

var noPadding = {
  padding: '0px'
}

function Main() {
  return (
    <div className="container-fluid full-height" style={noPadding}>
      <div className="row full-height">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-9">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default Main;
