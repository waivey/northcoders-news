import React, { Component } from "react";
import * as api from "../Utils/api";
import UserLogOut from "./UserLogOut";

class UserSignIn extends Component {
  state = {
    users: [],
    isSignedIn: ""
  };

  componentDidMount() {
    api.fetchAllUsers().then(users => {
      this.setState({ users });
    });
  }

  handleSelect = ({ target: { value } }) => {
    console.log(value);
    this.props.getLoginStatus(value);
    this.setState({ isSignedIn: value });
  };

  logout = loggedout => {
    this.props.getLoginStatus(loggedout);
    this.setState({ isSignedIn: loggedout });
  };

  render() {
    const { isSignedIn, users } = this.state;
    if (isSignedIn === "") {
      return (
        <div className="signIn">
          <select name="signIn" id="" onChange={this.handleSelect}>
            <option value="" defaultValue hidden>
              Sign In
            </option>
            {users.map(user => {
              return <option key={user.username}>{user.username}</option>;
            })}
          </select>
        </div>
      );
    } else {
      return (
        <div className="signIn">
          <h5>Hi, {isSignedIn}</h5>
          <UserLogOut logout={this.logout} />
        </div>
      );
    }
  }
}

export default UserSignIn;
