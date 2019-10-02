import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

  render() {
    return (
      <tr>
        <td>{this.props.data.entry_date}</td>
        <td>{this.props.data.amount}</td>
        <td>{this.props.data.source_uuid}</td>
        <td>{this.props.data.comments}</td>
      </tr>
    );
  }
}

export default TableRow;
