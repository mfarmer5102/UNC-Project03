import React, { Component } from "react";

var rowStyle = {
  fontFamily: "Roboto"
};

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

  render() {
    return (
      <tr style={rowStyle}>
        <td>{this.props.data.entry_date}</td>
        <td>${this.props.data.amount}</td>
        <td>{this.props.data.comments}</td>
      </tr>
    );
  }
}

export default TableRow;
