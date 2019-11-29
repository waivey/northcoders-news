import React, { Component } from "react";

class ViewToggler extends Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };

  // resetView = () => {
  //   this.setState({ isVisible: false });
  // };

  render() {
    // if (this.props.isSubmitted) this.setState({ isVisible: false });
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.props.type} {this.props.name}
        </button>
        {this.state.isVisible && this.props.children}
      </div>
    );
  }
}

export default ViewToggler;
