import React, { useRef } from "react";
import { Howl } from "howler";
import { Html } from "@react-three/drei";

// Credit to: https://freesound.org/people/LittleRainySeasons/
let audio_ping = new Howl({
  src: [
    "https://cdn.freesound.org/previews/335/335908_5865517-lq.mp3",
    "https://cdn.freesound.org/previews/335/335908_5865517-lq.ogg",
  ],
  volume: 0.1,
});

function Cube(props) {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  const [disabled, setDisabled] = useState(false);

  return (
    <mesh
      onClick={() => {
        setDisabled(true);
        audio_ping.play();
      }}
      castShadow
      ref={ref}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        transparent
        opacity={disabled ? 0.5 : 1}
        color={disabled ? "gray" : "orange"}
      />
      <Html>
        <h1>i will track and follow this cube</h1>
      </Html>
    </mesh>
  );
}

export default Cube;
