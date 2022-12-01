import React from "react";
import App from "./App";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Coffee from "./Coffee";

function Grid() {
  return (
    <div className="grid grid-rows-6 grid-cols-4 gap-4 place-content-center">
      <div className="row-start-1 row-end-5 col-start-1 col-end-5 pl-2 pr-2 pt-2">
        <App />
      </div>
      <div className="row-start-5 row-end-7 col-start-1 col-end-5">
        <Footer />
      </div>
      <div className="row-start-4 row-end-5 col-start-4 col-end-5 z-0">
        <Coffee />
      </div>
    </div>
  );
}

export default Grid;
