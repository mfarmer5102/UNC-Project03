import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import DeleteSourceEntry from "./DeleteSourceEntry";

class SourceDetail extends Component {
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
    let sourceUUID = localStorage.getItem("activeSourceUUID");
    let url = `/api/sourcedetail/${sourceUUID}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          allUserEntries: response
        });
      });
  }

  render() {
    // Prep
    var allItems = this.state.allUserEntries;
    var rows = allItems.map(item => <TableRow data={item} />);

    let tableContent;
    if (this.state.allUserEntries === undefined) {
      tableContent = (
        <div class="spinner-border text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else if (this.state.allUserEntries.length === 0) {
      tableContent = (
        <p className="p-2">No entries exist for this source yet.</p>
      );
    } else {
      tableContent = rows;
    }

    return (
      <div className="animated fadeInUpBig pl-5 pr-5">
        <div className="row">
          <div className="col-6 text-left">
            <h3>Source Detail</h3>
          </div>
          <div className="col-6 text-right">
            <Link to="/addnewentry">
              <button className="btn">
                <i class="fas fa-plus-circle fa-2x text-primary"></i>
              </button>
            </Link>
          </div>
        </div>
        <table className="table table-striped">
          <thead className="thead thead-light">
            <th>Date</th>
            <th>Amount</th>
            <th>Comments</th>
            <th className="text-right">Delete</th>
          </thead>
          {tableContent}
        </table>
      </div>
    );
  }
}

export default SourceDetail;
