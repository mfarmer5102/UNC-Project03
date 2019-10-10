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

  handleDelete = id => {
    console.log("attempting to delete");
    let url = `/api/entries/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <tr style={rowStyle}>
        <td>{this.props.data.entry_date}</td>
        <td>${this.props.data.amount}</td>
        <td>{this.props.data.comments}</td>
        <td>
          <btn onClick={() => this.handleDelete(this.props.data.id)}>
            Delete
          </btn>
        </td>
      </tr>
    );
  }
}

export default TableRow;
