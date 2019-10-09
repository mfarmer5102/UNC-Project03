import React, { Component } from "react";
import { Link } from "react-router-dom";
import GraphCard from "./GraphCard";

class FrozenAssets extends Component {
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
    let url = `/api/frozenassets/${loggedInUser}`;
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
    var cards = allItems.map(item => <GraphCard data={item} />);

    var result;
    if (allItems.length === 0) {
      result = (<h2> "no data found" </h2>)
    } else {
      result = cards
    };

    //Render
    return (
      <div className="animated fadeInUpBig">
        <div className="container">
          <div className="row">
            <div className="col-6 text-left">
              <h3>Frozen Assets</h3>
            </div>
            <div className="col-6 text-right">
              <Link to="/addnewsource">
                <button className="btn">
                  <i class="fas fa-plus-circle fa-2x text-primary"></i>
                </button>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div className="row">{result}</div>
        </div>
      </div>
    );
  }
}

export default FrozenAssets;
