import React from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";

class Navbar extends React.Component {
  state = {
    topics: []
  };

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  handleSelect = ({ target: { value } }) => {
    console.log(value, "<<< val from selector");
  };

  render() {
    return (
      <nav className="navBar">
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
        <h5>Filter? ->no functionality yet</h5>
      </nav>
    );
  }
}

export default Navbar;
