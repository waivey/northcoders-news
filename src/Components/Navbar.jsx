import React from "react";
import { Link } from "@reach/router";

class Navbar extends React.Component {
  state = {
    topics: []
  };
  render() {
    return (
      <nav className="navBar">
        <h4>Nav Bar</h4>
        <h5>
          <Link to="/topics">Topics</Link>
        </h5>
        <h5>Filter? ->no functionality yet</h5>
      </nav>
    );
  }
}

export default Navbar;
