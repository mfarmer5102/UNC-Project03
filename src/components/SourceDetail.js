import React, { Component } from "react";
import TableRow from "./TableRow";

class SourceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

  componentDidUpdate() {
    this.grabAllUserEntries();
  }

  componentWillMount() {
    this.grabAllUserEntries();
  }

  grabAllUserEntries() {
    let loggedInUser = localStorage.getItem("activeUserUUID");
    let sourceUUID = localStorage.getItem("activeSourceUUID");

    let url = `/api/sourcedetail/${loggedInUser}/${sourceUUID}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          allUserEntries: response
        });
      });
  }

  render() {
    // Prep
    var allItems = this.state.allUserEntries;
    var rows = allItems.map(item => <TableRow data={item} />);
    //Render
    return (
      <div className="animated bounceInUp">
        <h3>Source Detail</h3>
        <table className="table table-striped">
          <thead>
            <th>Date</th>
            <th>Amount</th>
            <th>Source UUID</th>
            <th>Comments</th>
          </thead>
          {rows}
        </table>
      </div>
    );
  }
}

export default SourceDetail;
