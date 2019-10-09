import React, { Component } from "react";

class DeleteSourceButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.deleteCorrespondingSource()}>
        <a>Delete</a>
      </div>
    );
  }
}

export default DeleteSourceButton;
