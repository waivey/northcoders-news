import React from "react";
import * as api from "../Utils/api";
import { navigate } from "@reach/router";
import UserSignIn from "./UserSignIn";
import ArticleAdder from "./ArticleAdder";
import ViewToggler from "./ViewToggler";

class Navbar extends React.Component {
  state = {
    topics: [],
    topic: "",
    isSubmitted: false
  };

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  handleSelect = event => {
    navigate(`/topics/${event.target.value}`);
  };

  resetToggle = () => {
    this.setState({ isSubmitted: true });
  };

  render() {
    return (
      <nav className="navBar">
        <select name="topics" onChange={this.handleSelect}>
          <option defaultValue hidden>
            Topics
          </option>
          {this.state.topics.map(topic => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
        <UserSignIn getLoginStatus={this.props.getLoginStatus} />
        {this.props.user && (
          <ViewToggler type="Add Article" isSubmitted={this.state.isSubmitted}>
            <ArticleAdder
              user={this.props.user}
              topics={this.state.topics}
              resetToggle={this.resetToggle}
            />
          </ViewToggler>
        )}
      </nav>
    );
  }
}

export default Navbar;
