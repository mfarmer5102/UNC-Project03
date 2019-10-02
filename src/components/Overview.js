import React, { Component } from "react";

class Overview extends Component {
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
    let url = "/api/alluserentries/HU5Caw6T9zcdgpxK82ly8CVrAkk1";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          allUserEntries: response
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Overview</h3>
      </div>
    );
  }
}

export default Overview;