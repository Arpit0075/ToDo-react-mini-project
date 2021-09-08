import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      ToDos: [],
      errors: { title: "", description: "" },
    };
  }

  //event object  includes target
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    let errors = {};

    if (/[^\w+]/.test(this.state.title)) {
      errors["title"] = "Do not use special characters/space in title";
    } else errors["title"] = "";

    if (
      this.state.description.length < 15 ||
      this.state.description.length > 50
    ) {
      errors["description"] = "Note should be between 15 to 50 characters";
    } else {
      errors["description"] = "";
    }
    this.setState({ errors: errors });
    //console.log(this.state.errors.description);
  };

  handleSubmit = () => {
    this.state.ToDos.push({
      title: this.state.title,
      description: this.state.description,
    });
    this.setState({ title: "", description: "" });
    //console.log(this.state.ToDos);
  };

  render() {
    return (
      <>
        <h1>To do List</h1>
        <div className="fil-container">
          <input
            type="text"
            name="title"
            placeholder="enter title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <span> {this.state.errors.title} </span>
          <textarea
            value={this.state.description}
            name="description"
            rows="0"
            cols="50"
            type="text"
            placeholder="enter details"
            onChange={this.handleChange}
          />
          <span> {this.state.errors.description} </span>
          <button className="btn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>

        {this.state.ToDos.map((el) => {
          return (
            <div className="display-container">
              <h3>Title: {el.title}</h3>
              <p> Description: {el.description}</p>
            </div>
          );
        })}
      </>
    );
  }
}
