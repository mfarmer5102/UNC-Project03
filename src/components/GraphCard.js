import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";
import DeleteSourceButton from "./DeleteSourceButton";

class GraphCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: localStorage.getItem("activeUserUUID"),
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
        this.setState({
          correspondingEntries: response
        });
      });
  };

  deleteCorrespondingSource = () => {
    console.log("attempting to delete");
    let url = `/api/sourcedetail/${this.props.data.uuid}`;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      console.log(response);
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

    let cardContent;
    if (this.state.correspondingEntries === undefined) {
      cardContent = (
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else if (this.state.correspondingEntries.length < 2) {
      cardContent = <p>Add more entries for this source to see trends.</p>;
    } else {
      cardContent = <Line data={data} height={250} width={500} />;
    }

    return (
      <div className="col-md-6 col-sm-12 mb-4">
        <div className="card shadow rounded" onClick={this.handleClick}>
          <div className="card-header">
            <div className="float-left">{this.props.data.source_name}</div>
            <div className="float-right">
              <DeleteSourceButton
                deleteCorrespondingSource={() => this.deleteCorrespondingSource}
                uuid={this.state.sourceUUID}
              />
            </div>
          </div>
          <Link to="/sourcedetail">
            <div className="card-body text-center">{cardContent}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default GraphCard;
