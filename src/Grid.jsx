import React, { useEffect } from "react";
import App from "./App";
import Instances from "./Instances";
import Navbar from "./Navbar";
import { Howl } from "howler";

function Grid() {
  // credit to: https://pixabay.com/music/synthwave-black-knight-121105/
  let audio_track = new Howl({
    src: "https://cdn.pixabay.com/audio/2022/09/27/audio_2a84af0774.mp3",
    html5: true,
    volume: 0.5,
    loop: true,
  });

  // async function postData(url = "") {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     mode: "no-cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //   });
  //   return response.json;
  // }

  // postData("https://www.reddit.com/r/AskReddit/comments.json")
  //   .then((stuff) => {
  //     console.log(stuff);
  //   })
  //   .catch((e) => console.error(e));



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
