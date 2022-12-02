// <a href="https://www.flaticon.com/free-icons/play" title="play icons">Play icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/stop-button" title="stop button icons">Stop button icons created by Pixel perfect - Flaticon</a>
import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";

function Navbar({ audio }) {
  let [play, setPlay] = useState(false);

  // Clear listener after first call.
  audio.once("load", function () {
    setPlay(!play);
    audio.play();
  });

  // Fires when the sound finishes playing.
  audio.on("end", function () {
    console.log("Finished!");
  });

  return (
    <>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              setPlay(!play);
              play ? audio.stop() : audio.play();
            }}
          >
            {play ? (
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="stop-button.png" alt="stop button" />
                </div>
              </div>
            ) : (
              <div className="avatar">
                <div className="w-8 rounded">
                  <img src="play-button-arrowhead.png" alt="play button" />
                </div>
              </div>
            )}
          </a>
        </div>
        <div className="">
          <Coffee />
        </div>
      </div>
    </>
  );
}

export default Navbar;
