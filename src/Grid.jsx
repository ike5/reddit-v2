import React from "react";
import App from "./App";
import Instances from "./Instances";
import Navbar from "./Navbar";
import { Howl } from "howler";

function Grid() {
  let audio_sky = new Howl({
    src: [
      "https://cdn.freesound.org/previews/477/477479_973833-lq.mp3",
      "https://cdn.freesound.org/previews/477/477479_973833-lq.ogg",
    ],
    html5: true,
    volume: 0.5,
    loop: true,
  });

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
    </div>
  );
}

export default Grid;
