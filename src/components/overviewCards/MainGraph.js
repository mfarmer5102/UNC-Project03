import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";

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
    let myLabelsArr = ["2019-09-05", "2019-09-28", "2019-10-10"];
    let assetDataPointsArr = [400, 800, 550];
    let liabilityDataPointsArr = [600, 300, 590];
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
          label: "Assets",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(81, 184, 37, 0.4)",
          borderColor: "rgba(81, 184, 37, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(81, 184, 37, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(81, 184, 37, 1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: assetDataPointsArr.reverse()
        },
        {
          label: "Liabilities",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(235, 64, 52, 0.4)",
          borderColor: "rgba(235, 64, 52, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(235, 64, 52, 0.1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: liabilityDataPointsArr.reverse()
        }
      ]
    };

    let cardContent = (
      <Line
        data={data}
        options={{
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
        height={250}
        width={500}
      />
    );

    return (
      <div className="col-md-12 col-sm-12 mb-4">
        <div className="card shadow rounded" onClick={this.handleClick}>
          <div className="card-header">
            <div className="float-left">Historical Analysis</div>
            <div className="float-right"></div>
          </div>
          <div className="card-body text-center">{cardContent}</div>
        </div>
      </div>
    );
  }
}

export default AssetBreakdown;
