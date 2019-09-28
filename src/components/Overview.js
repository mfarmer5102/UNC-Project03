import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUserEntries: []
    };
  }

//   componentDidUpdate() {
//     this.grabAllUserEntries();
//   }

//   componentWillMount() {
//     this.grabAllUserEntries();
//   }

//   grabAllUserEntries() {
//     let url = "/hit-db";
//     fetch(url)
//       .then(response => response.json())
//       .then(response => {
//         console.log(response)
//         this.setState({
//           allUserEntries: response
//         });
//       });
//   }

  render() {
    //Prep
    // var allItems = this.state.allUserEntries;
    // var activeKeywords = this.props.activeKeywords;
    // var queriedApps = allItems.filter(function(item) {
    //   let litmus = true;
    //   for (let i = 0; i < activeKeywords.length; i++) {
    //     if (item.keywords.includes(activeKeywords[i])) {
    //     } else {
    //       litmus = false;
    //     }
    //   }
    //   return litmus;
    // });

    //Render
    return (
      <div>
        <h3>Overview</h3>
      </div>
    );
  }
}

export default Overview;