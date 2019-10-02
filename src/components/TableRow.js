import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

  render() {
    return <tr>{this.props.data.amount}</tr>;
  }
}

export default TableRow;
