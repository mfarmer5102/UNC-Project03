import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";

class GraphCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "HU5Caw6T9zcdgpxK82ly8CVrAkk1",
      sourceUUID: this.props.data.uuid
    };
  }

  handleClick = () => {
    localStorage.setItem("activeUserUUID", this.state.loggedInUser);
    localStorage.setItem("activeSourceUUID", this.state.sourceUUID);
  };

  grabAllCorrespondingEntries = () => {
    let url = `/api/sourcedetail/${this.props.data.uuid}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          correspondingEntries: response
        });
      });
  };

  componentDidUpdate() {
    this.grabAllCorrespondingEntries();
  }

  render() {
    let myLabelsArr = [];
    let dataPointsArr = [];
    if (this.state.correspondingEntries) {
      for (var i = 0; i < this.state.correspondingEntries.length; i++) {
        dataPointsArr.push(this.state.correspondingEntries[i].amount);
        myLabelsArr.push(this.state.correspondingEntries[i].entry_date);
      }
    }

    const data = {
      labels: myLabelsArr,
      datasets: [
        {
          label: "Amount",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataPointsArr
        }
      ]
    };

    return (
      <div className="col-md-6 col-sm-12 mb-4">
        <Link to="/sourcedetail">
          <div className="card" onClick={this.handleClick}>
            <div className="card-header">{this.props.data.source_name}</div>
            <div className="card-body">
              <Line data={data} height={250} width={500} />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default GraphCard;
