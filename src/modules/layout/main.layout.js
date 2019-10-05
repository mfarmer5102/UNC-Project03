import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Routes from "./routes/routes.component";

var noPadding = {
  padding: "0px"
};

function Main() {
  return (
    <Router>
      <div className="container-fluid full-height" style={noPadding}>
        <div className="row full-height">
          <div className="col-3">
            <Navbar />
          </div>
          <div className="col-9">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
