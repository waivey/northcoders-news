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
          <select name="signIn" id="">
            <option value="" defaultValue hidden>
              Sign In
            </option>
            {users.map(user => {
              return (
                <option key={user.username} onClick={this.handleSelect}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else {
      return (
        <div className="signIn">
          <h4>Hi, {isSignedIn}</h4>
          <UserLogOut logout={this.logout} />
        </div>
      );
    }
  }
}

export default UserSignIn;
