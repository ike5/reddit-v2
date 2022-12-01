import React from "react";
import App from "./App";
import Navbar from "./Navbar"
import Footer from "./Footer"

function Grid() {
  return (
    <div className="container">
      <div className="nav"><Navbar /></div>
      <div className="main"><App /></div>
      <div className="sidebar">Sidebar</div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default Grid;
