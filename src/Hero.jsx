import React from "react";
import Grid from "./Grid";
import App from "./App";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-fit">
          <h1 className="text-5xl font-bold">Hello there</h1>
       
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
