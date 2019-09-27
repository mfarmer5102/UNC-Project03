import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";

function Main() {
  return (
    <div className="container-fluid">
      <div className="row">
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
