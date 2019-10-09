import React, { Component } from "react";
import { Link } from "react-router-dom";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Prep

    //Render
    return (
      <div className="animated fadeInUpBig">
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h3>Overview</h3>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-12 text-left">Hi</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
