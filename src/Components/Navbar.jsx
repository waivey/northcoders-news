import React from "react";
import * as api from "../Utils/api";
import { navigate } from "@reach/router";
import UserSignIn from "./UserSignIn";
import ArticleAdder from "./ArticleAdder";
import ViewToggler from "./ViewToggler";

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
        <UserSignIn getLoginStatus={this.props.getLoginStatus} />
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
        {this.props.user && (
          <ViewToggler type="Add Article">
            <ArticleAdder user={this.props.user} />
          </ViewToggler>
        )}
      </nav>
    );
  }
}

export default Navbar;
