import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="headerBox">
      <h1>
        <Link to="/">Northcoders News</Link>
      </h1>
    </header>
  );
};

export default Header;
