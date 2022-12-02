import React from "react";
import App from "./App";
import Instances from "./Instances";
import Navbar from "./Navbar";

function Grid() {
  let audio_sky = new Howl({
    src: [
      "https://cdn.freesound.org/previews/477/477479_973833-lq.mp3",
      "https://cdn.freesound.org/previews/477/477479_973833-lq.ogg",
    ],
    html5: true,
  });

  return (
    <div className="my-container gap-4 place-content-center">
      <div className="navbar sticky top-0 z-50">
        <Navbar audio={audio_sky}/>
      </div>
      <div className="main pl-2 pr-2">
        <App />
      </div>
    </div>
  );
}

export default Grid;
