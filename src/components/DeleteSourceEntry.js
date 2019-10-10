import React, { Component } from "react";

class DeleteSourceEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.deleteCorrespondingEntry()}>
        <a className="btn btn-outline-danger">Delete</a>
      </div>
    );
  }
}

export default DeleteSourceEntry;
