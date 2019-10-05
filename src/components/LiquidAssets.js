import React, { Component } from "react";
import GraphCard from "./GraphCard";

class LiquidAssets extends Component {
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
    let url = "/api/liquidassets/HU5Caw6T9zcdgpxK82ly8CVrAkk1";
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
    var cards = allItems.map((item, index) => (
      <GraphCard key={index} data={item} />
    ));
    //Render
    return (
      <div className="animated fadeInUpBig">
        <div className="container">
          <h3>Liquid Assets</h3>
          <hr></hr>
          <div className="row">{cards}</div>
        </div>
      </div>
    );
  }
}

export default LiquidAssets;
