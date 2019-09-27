import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

function Main() {
  return (
    <div className="row">
      <div className="col-3">
        <Navbar />
      </div>
      <div className="col-9">
        <Container />
      </div>
    </div>
  );
}

export default Main;
