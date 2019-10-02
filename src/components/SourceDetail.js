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
    let url =
      "/api/sourcedetail/HU5Caw6T9zcdgpxK82ly8CVrAkk1/b7ba9c42-8527-4dab-8e75-b526f47d2457 ";
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
      <div>
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
