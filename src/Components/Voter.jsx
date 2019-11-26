import React, { Component } from "react";
import * as api from "../Utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleClick = ({ target }) => {
    api.updateVotes(this.props.type, this.props.id, +target.name);
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + +target.name };
    });
  };

  render() {
    return (
      <section>
        <button
          name="1"
          disabled={this.state.optimisticVotes > 0}
          onClick={this.handleClick}
        >
          Up
        </button>
        <h4>Votes: {this.props.votes + this.state.optimisticVotes}</h4>
        <button
          name="-1"
          disabled={this.state.optimisticVotes < 0}
          onClick={this.handleClick}
        >
          Down
        </button>
      </section>
    );
  }
}

export default Voter;
