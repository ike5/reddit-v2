import { Howl } from "howler";
import React, { useRef, useEffect } from "react";

export default function userHowler({ options }) {
  const player = useRef();

  useEffect(() => {
    player.current = new Howl(options);

    // Unload the Audio player during unmount --cleanup
    return () => {
      player.current && player.current.unload();
    };
  }, []);
  return { play: player.play() };
}
