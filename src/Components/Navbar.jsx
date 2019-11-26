import React from "react";
import * as api from "../Utils/api";
import { navigate } from "@reach/router";
import UserSignIn from "./UserSignIn";

class Navbar extends React.Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  handleSelect = event => {
    navigate(`/topics/${event.target.value}`);
  };

  render() {
    return (
      <nav className="navBar">
        <UserSignIn />
        <h4>Nav Bar</h4>
        <select name="topics">
          <option value="" defaultValue hidden>
            Topics
          </option>
          {this.state.topics.map(topic => {
            return (
              <option
                key={topic.slug}
                value={topic.slug}
                onClick={this.handleSelect}
              >
                {topic.slug}
              </option>
            );
          })}
        </select>
      </nav>
    );
  }
}

export default Navbar;
