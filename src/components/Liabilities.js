import React, { Component } from "react";

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

    //Render
    return (
      <div>
        <h3>Liabilities</h3>
      </div>
    );
  }
}

export default Liabilities;
