import React from "react";
import App from "./App";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Grid() {
  return (
    <div className="grid auto-rows-fr grid-cols-4 gap-4">
      {/* <div className="nav row-span-1 col-start-1 col-end-5">
        <Navbar />
      </div> */}
      <div className="main row-span-4 col-start-1 col-end-5 pl-2 pr-2 pt-2">
        <App />
      </div>
      <div className="footer row-span-1 col-start-1 col-end-5">
        <Footer />
      </div>
    </div>
  );
}

export default Grid;
