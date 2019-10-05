import React from "react";
import Entry from "./Entry";

class entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};

      this.handleChange = 
    this.handleChange.bind(this);
      this.handleSubmit =
    this.handleSubmit.bind(this);
  }
  handleChange(event) {this.setState({value:event.target.value});
}
handleSubmit(event) {
  alert('Date was entered: ' + this.state.value);
  event.preventDefault();
}
render () {
  return (
    <form onSubmit =
    {this.handleSubmit}>
      <label>
        Entry Date:
        <input type="Date" value= {this.state.value} onChange = {this.handleChange} />
        Amount:
        <input type="Amount" value= {this.state.value} onChange= {this.handleChange} />
        Comments:
        <input type="Comments" value= {this.state.value} onChange= {this.handleChange} />
      </label>
      <input type ="submit" value ="submit" />
    </form>
  );
 }
}

export default Entry;
