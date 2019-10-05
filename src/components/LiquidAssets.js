import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    let loggedInUser = localStorage.getItem("activeUserUUID");
    let url = `/api/liquidassets/${loggedInUser}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
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
          <Link to="/addnewsource">
            <button className="btn btn-primary">Add Source</button>
          </Link>
          <hr></hr>
          <div className="row">{cards}</div>
        </div>
      </div>
    );
  }
}

export default LiquidAssets;
