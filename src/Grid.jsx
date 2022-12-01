import React from "react";
import App from "./App";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Coffee from "./Coffee";

function Grid() {
  return (
    <div className="my-container gap-4 place-content-center">
      <div className="main pl-2 pr-2 pt-2">
        <App />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Grid;
