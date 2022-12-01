import React from "react";
import App from "./App";

function Grid() {
  return (
    <div className="container">
      <div className="item-1">
        <App />
      </div>
      <div className="item-2"><App /></div>
    </div>
  );
}

export default Grid;
