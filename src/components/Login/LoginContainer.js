import React, { Component } from "react";
import LoginView from "./LoginView";
import { loginRequest } from "./../../redux/actions/loginActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginRequest(user, this.props.history);
  };

  render() {
    return (
      <LoginView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = { loginRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginContainer));
