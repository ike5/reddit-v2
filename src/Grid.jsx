import React, { useEffect } from "react";
import App from "./App";
import Instances from "./Instances";
import Navbar from "./Navbar";
import { Howl } from "howler";
import Footer from "./Footer";

function Grid() {
  // credit to: https://pixabay.com/music/synthwave-black-knight-121105/
  let audio_track = new Howl({
    src: "https://cdn.pixabay.com/audio/2022/09/27/audio_2a84af0774.mp3",
    html5: true,
    volume: 0.5,
    loop: true,
  });

  return (
    <div className="my-container gap-4 place-content-center">
      <div className="navbar sticky top-0 z-50">
        <Navbar audio={audio_track} />
      </div>
      <div className="main pl-2 pr-2">
        <App />
      </div>
      <Footer />
    </div>
  );
}

export default Grid;
