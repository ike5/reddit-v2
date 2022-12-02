import React from "react";
import App from "./App";
import Instances from "./Instances";
import Navbar from "./Navbar";

function Grid() {
  return (
    <div className="my-container gap-4 place-content-center">
      <div className="navbar sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="main pl-2 pr-2">
        <App />
      </div>
    </div>
  );
}

export default Grid;
