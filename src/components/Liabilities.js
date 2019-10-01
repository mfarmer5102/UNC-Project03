import React, { Component } from "react";
import GraphCard from './GraphCard';

class Liabilities extends Component {
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
    let url = "/api/liabilities/HU5Caw6T9zcdgpxK82ly8CVrAkk1";
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
    var cards = allItems.map(item => <GraphCard data={item} />);
    //Render
    return (
      <div>
        <h3>Liabilities</h3>
        <div>{cards}</div>
      </div>
    );
  }
}

export default Liabilities;
