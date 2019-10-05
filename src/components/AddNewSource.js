import React, { Component } from "react";
class Form extends Component {
  // Setting the component's initial state
  state = {
    user_uuid: "",
    date_created: "",
    source_name: "",
    uuid: "",
    type: ""
  };
  handleInputChange = event => {
    const value = event.target.value;
    const source = event.target.source;
    this.setState({
      [source]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.source_name === "" || this.state.type === "") {
      alert("You need to provide a bank name and select a type");
    } else {
      alert(`Your sourse is ${this.state.source_name} ${this.state.type}`);
      let url = "/api/liquidassets";
      fetch(url, {
        method: "POST",
        body: {
          source_name: this.state.source_name,
          type: this.state.type
        }
      }).then(response => {
        console.log(response);
        this.setState({
          source_name: "",
          type: ""
        });
      });
    }
  };
  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.source_name}
            name="source_name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Source Name"
          />
          <input
            value={this.state.type}
            name="type"
            onChange={this.handleInputChange}
            type="text"
            placeholder="type"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
