import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";

class MainGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correspondingEntries: []
    };
  }

  grabAllCorrespondingEntries = () => {
    let url = `/api/timeline/${localStorage.getItem("activeUserUUID")}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          correspondingEntries: response
        });
      });
  };

  componentDidMount() {
    this.grabAllCorrespondingEntries();
  }

  render() {
    let myLabelsArr = [];
    let assetDataPointsArr = [];
    let liabilityDataPointsArr = [];
    if (this.state.correspondingEntries) {
      for (var i = 0; i < this.state.correspondingEntries.length; i++) {
        let good =
          parseFloat(this.state.correspondingEntries[i].liquidsAccum) +
          parseFloat(this.state.correspondingEntries[i].frozensAccum);
        let bad = parseFloat(
          this.state.correspondingEntries[i].liabilitiesAccum
        );
        assetDataPointsArr.push(good);
        liabilityDataPointsArr.push(bad);
        myLabelsArr.push(this.state.correspondingEntries[i].month);
      }
    }

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

export default MainGraph;
