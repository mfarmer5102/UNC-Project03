import React, { Component } from "react";

class GraphCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-6 col-sm-12">
        <div className="card">
          <div className="card-header">{this.props.data.source_name}</div>
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
}

export default GraphCard;
