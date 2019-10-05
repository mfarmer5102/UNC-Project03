import React, { Component } from "react";

const cardStyle = {
  width: "300px"
};

const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class AddNewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_uuid: localStorage.getItem("activeUserUUID"),
      entry_date: "",
      amount: "",
      comments: "",
      source_uuid: localStorage.getItem("activeSourceUUID")
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.entry_name === "" || this.state.amount === "") {
      alert("New sources require a name and a type.");
    } else {
      let url = "/api/sourcedetail";
      console.log(url);
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source_name: this.state.source_name,
          type: this.state.type,
          user_uuid: this.state.user_uuid,
          source_uuid: this.state.source_uuid,
          entry_date: this.state.entry_date,
          amount: this.state.amount,
          comments: this.state.comments
        })
      }).then(response => {
        console.log(response);
      });
    }
  };

  render() {
    return (
      <div className="full-height animated flipInY" style={flexCenter}>
        <div className="card rounded shadow p-4" style={cardStyle}>
          <h3>Add an Entry</h3>
          <hr></hr>
          <form>
            <div class="form-group">
              <label>Effective Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Effective date"
                name="entry_date"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label>Amount</label>
              <input
                type="number"
                step="0.01"
                class="form-control"
                placeholder="Amount"
                name="amount"
                onChange={this.handleInputChange}
              />
            </div>
            <div class="form-group">
              <label>Comments</label>
              <input
                type="text"
                class="form-control"
                placeholder="Comments"
                name="comments"
                onChange={this.handleInputChange}
              />
            </div>
            <button
              onClick={this.handleFormSubmit}
              type="submit"
              class="btn btn-primary"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddNewEntry;
