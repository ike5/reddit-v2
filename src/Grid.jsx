import React, { useEffect } from "react";
import App from "./App";
import Instances from "./Instances";
import Navbar from "./Navbar";
import { Howl } from "howler";
import Footer from "./Footer";
import Tree from "./Tree"

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
      <div className="main">
        <App />
      </div>
    </div>
  );
}

export default Grid;
