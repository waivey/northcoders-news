import React from "react";

const ErrHandler = ({ msg }) => {
  const err = msg ? msg : "Oooops... Page not found!";
  return (
    <div>
      <h4>{err}</h4>
    </div>
  );
};

export default ErrHandler;
