import React, { Component } from "react";

class GraphCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "HU5Caw6T9zcdgpxK82ly8CVrAkk1",
      sourceUUID: this.props.data.uuid
    };
  }
  handleClick = () => {
    localStorage.setItem("activeUserUUID", this.state.loggedInUser);
    localStorage.setItem("activeSourceUUID", this.state.sourceUUID);
  };
  render() {
    return (
      <div className="col-md-6 col-sm-12">
        <div className="card" onClick={this.handleClick}>
          <div className="card-header">{this.props.data.source_name}</div>
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
}

export default GraphCard;
