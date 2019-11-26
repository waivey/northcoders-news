import React from "react";

const UserLogOut = ({ logout }) => {
  const handleClick = () => {
    logout("");
  };
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default UserLogOut;
