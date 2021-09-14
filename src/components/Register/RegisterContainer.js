import React, { Component } from "react";
import RegisterView from "./RegisterView";

export default class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password1: "",
      password2: "",
      email: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <RegisterView
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
