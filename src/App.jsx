import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Instances,
  Instance,
  Cloud,
} from "@react-three/drei";
import { MathUtils } from "three";
import "../src/index.css";
import { Howl } from "howler";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { motion } from "framer-motion";
import Modal from "./components/Modal/index";



//TODO: Manage modal after clicking on box
const modal = {
  modalOpen: false,
};
const close = () => (modal.modalOpen = false);
const open = () => (modal.modalOpen = true);

function setRandomPositions() {
  return [
    MathUtils.randFloat(-10, 10),
    MathUtils.randFloat(-10, 10),
    MathUtils.randFloat(-10, 10),
  ];
}

//TODO: Need to add rotations to each box
function setRandomRotation() {
  return [
    MathUtils.randFloat(0, 1),
    MathUtils.randFloat(0, 1),
    MathUtils.randFloat(0, 1),
  ];
}

let rows = [];
for (let i = 0; i < 100; i++) {
  const p = setRandomPositions();
  rows.push(<Cube position={p} key={i} />);
}

// Credit to: https://freesound.org/people/LittleRainySeasons/
let audio_ping = new Howl({
  src: "https://cdn.freesound.org/previews/335/335908_5865517-lq.mp3",
  volume: 0.5,
});

function Cube(props) {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  const [disabled, setDisabled] = useState(false);

  return (
    <mesh
      onClick={() => {
        modal.modalOpen ? close() : open();
        setDisabled(true);
        audio_ping.play();
      }}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
      castShadow
      ref={ref}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        transparent
        opacity={disabled ? 0.5 : 1}
        color={disabled ? "gray" : "orange"}
      />
    </mesh>
  );
}

function Clouds() {
  return (
    <group>
      <Cloud position={[-10, -6, -10]} speed={0.2} opacity={0.4} />
      <Cloud position={[10, 6, -15]} speed={0.2} opacity={0.25} />
      <Cloud position={[0, 10, 0]} speed={0.2} opacity={0.2} />
      <Cloud position={[0, -10, 0]} speed={0.2} opacity={0.2} />
      <Cloud position={[-10, -6, 15]} speed={0.2} opacity={0.3} />
      <Cloud position={[10, 6, 10]} speed={0.2} opacity={0.25} />
    </group>
  );
}

export default function App() {
  return (
    <>
      <Canvas
        className="rounded-lg drop-shadow-2xl"
        shadows
        camera={{ position: [-2, 0, 20], fov: 60 }}
      >
        {/* <fog attach="fog" args={["white", 10, 40]} /> */}

        <ambientLight intensity={0.4} />
        <directionalLight intensity={0.7} castShadow position={[1, 3, 2]} />
        <Sky sunPosition={[1, 3, 2]} />
        <Clouds />
        <Suspense>
          <Physics gravity={[0, 0, 0]}>{rows}</Physics>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      {modal.modalOpen && (
        <Modal modalOpen={modal.modalOpen} handleClose={close} />
      )}
    </>
  );
}
