import React, { Component } from "react";
import { Link } from "react-router-dom";
import GraphCard from "./GraphCard";

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
    let loggedInUser = localStorage.getItem("activeUserUUID");
    let url = `/api/liabilities/${loggedInUser}`;
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
    //Render
    return (
      <div className="animated fadeInUpBig">
        <div className="container">
          <h3>Liabilities</h3>
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

export default Liabilities;
