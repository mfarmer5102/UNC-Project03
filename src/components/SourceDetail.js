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
    var cards = allItems.map(item => <TableRow data={item} />);
    //Render
    return (
      <div>
        <h3>Source Detail</h3>
        <div>{cards}</div>
      </div>
    );
  }
}

export default SourceDetail;
