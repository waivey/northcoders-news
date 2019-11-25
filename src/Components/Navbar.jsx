import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav>
      <h4>Nav Bar</h4>
      <h5>
        <Link to="/articles">Articles</Link>
      </h5>
      <h5>
        <Link to="/topics">Topics</Link>
      </h5>
      <h5>Filter? ->no functionality yet</h5>
    </nav>
  );
};

export default Navbar;
