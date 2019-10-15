import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";

class NetWorth extends Component {
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
    let dataPointsArr = [];
    if (this.state.correspondingEntries) {
      for (var i = 0; i < this.state.correspondingEntries.length; i++) {
        let good =
          parseFloat(this.state.correspondingEntries[i].liquidsAccum) +
          parseFloat(this.state.correspondingEntries[i].frozensAccum);
        let bad = parseFloat(
          this.state.correspondingEntries[i].liabilitiesAccum
        );
        let net = good - bad;
        dataPointsArr.push(net);
        myLabelsArr.push(this.state.correspondingEntries[i].month);
      }
    }

    const data = {
      labels: myLabelsArr.reverse(),
      datasets: [
        {
          label: "Amount",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(54,106,179,0.4)",
          borderColor: "rgba(54,106,179,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(54,106,179,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(54,106,179,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataPointsArr.reverse()
        }
      ]
    };

    let cardContent = (
      <Bar
        data={data}
        options={{
          legend: {
            display: false
          },
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
      <div className="col-md-6 col-sm-12 mb-4">
        <div className="card shadow rounded" onClick={this.handleClick}>
          <div className="card-header">
            <div className="float-left">Networth Timeline</div>
            <div className="float-right"></div>
          </div>
          <div className="card-body text-center">{cardContent}</div>
        </div>
      </div>
    );
  }
}

export default NetWorth;
