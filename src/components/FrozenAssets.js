import React, { Component } from "react";

class FrozenAssets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }
  render() {
    return (
      <div>
        <h3>FrozenAssets</h3>
      </div>
    );
  }
}

export default FrozenAssets;