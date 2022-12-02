import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";

function Navbar({ audio }) {
  let [play, setPlay] = useState(false);

  // Clear listener after first call.

  // audio.once("load", function () {
  //   audio.play();
  // });

  // Fires when the sound finishes playing.
  // audio.on("end", function () {
  //   console.log("Finished!");
  // });

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
            {play ? "Play" : "Stop"}
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
