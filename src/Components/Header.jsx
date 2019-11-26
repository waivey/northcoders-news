import React from "react";
import { Link } from "@reach/router";
import UserSignIn from "./UserSignIn";

const Header = () => {
  return (
    <header className="headerBox">
      <h1>
        <Link to="/">Northcoders News</Link>
      </h1>
      <UserSignIn />
    </header>
  );
};

export default Header;
