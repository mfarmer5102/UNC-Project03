import React, { Component } from "react";

class DeleteSourceEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.deleteCorrespondingEntry()}>
        <a>Delete</a>
      </div>
    );
  }
}

export default DeleteSourceEntry;
