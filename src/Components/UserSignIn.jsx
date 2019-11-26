import React, { Component } from "react";
import * as api from "../Utils/api";

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
    this.setState({ isSignedIn: value });
  };

  render() {
    const { isSignedIn, users } = this.state;
    if (isSignedIn === "") {
      return (
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
      );
    } else {
      return <h4>Hi, {isSignedIn}</h4>;
    }
  }
}

export default UserSignIn;
