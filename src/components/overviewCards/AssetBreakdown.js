import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class AssetBreakdown extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loggedInUser: localStorage.getItem("activeUserUUID"),
    //   sourceUUID: this.props.data.uuid
    // };
  }

  // handleClick = () => {
  //   localStorage.setItem("activeUserUUID", this.state.loggedInUser);
  //   localStorage.setItem("activeSourceUUID", this.state.sourceUUID);
  // };

  // grabAllCorrespondingEntries = () => {
  //   let url = `/api/sourcedetail/${this.props.data.uuid}`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({
  //         correspondingEntries: response
  //       });
  //     });
  // };

  // deleteCorrespondingSource = () => {
  //   console.log("attempting to delete");
  //   let url = `/api/sourcedetail/${this.props.data.uuid}`;
  //   fetch(url, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" }
  //   }).then(response => {
  //     console.log(response);
  //   });
  // };

  // componentDidUpdate() {
  //   this.grabAllCorrespondingEntries();
  // }

  render() {
    let myLabelsArr = ["Frozen", "Liquid"];
    let dataPointsArr = [800, 400];
    // if (this.state.correspondingEntries) {
    //   for (var i = 0; i < this.state.correspondingEntries.length; i++) {
    //     dataPointsArr.push(this.state.correspondingEntries[i].amount);
    //     myLabelsArr.push(this.state.correspondingEntries[i].entry_date);
    //   }
    // }

    const data = {
      labels: myLabelsArr.reverse(),
      datasets: [
        {
          label: "Amount",
          fill: false,
          lineTension: 0.1,
          backgroundColor: ["rgba(214,28,96,0.4)", "rgba(101,194,174,0.4)"],
          borderColor: ["rgba(214,28,96,0.4)", "rgba(101,194,174,0.4)"],
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: ["rgba(214,28,96,0.4)", "rgba(101,194,174,0.4)"],
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: ["rgba(214,28,96,0.4)", "rgba(101,194,174,0.4)"],
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataPointsArr.reverse()
        }
      ]
    };

    let cardContent = (
      <Doughnut
        data={data}
        height={250}
        width={500}
      />
    );

    return (
      <div className="col-md-6 col-sm-12 mb-4">
        <div className="card shadow rounded" onClick={this.handleClick}>
          <div className="card-header">
            <div className="float-left">Asset Analysis</div>
            <div className="float-right"></div>
          </div>
          <div className="card-body text-center">{cardContent}</div>
        </div>
      </div>
    );
  }
}

export default AssetBreakdown;
