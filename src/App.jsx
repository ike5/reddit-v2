import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Cloud, Html } from "@react-three/drei";
import { MathUtils } from "three";
import "../src/index.css";
import { Howl } from "howler";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Modal from "./components/Modal/index";
import { init } from "@dimforge/rapier3d-compat";
import Tree from "./Tree";
import Presents1 from "./Presents1";
import Presents2 from "./Presents2";
import Presents3 from "./Presents3";

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
  const [openCard, setOpenCard] = useState(false);
  const [containsImage, setContainsImage] = useState(false);
  const [openHero, setOpenHero] = useState(false);

  return (
    <mesh
      onClick={() => {
        modal.modalOpen ? close() : open();
        setDisabled(true);
        setOpenCard(!openCard);
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
      {openCard ? (
        <Html distanceFactor={10}>
          <div className="indicator">
            <span className="indicator-item indicator-top indicator-center badge badge-primary">
              ⬆ {props.children.data.ups + props.children.data.downs}
            </span>

            <div className="card card-compact w-96 bg-neutral text-neutral-content">
              {props.children.data.post_hint == "image" ? (
                <figure>
                  <img
                    src={props.children.data.url_overridden_by_dest}
                    alt="Shoes"
                  />
                </figure>
              ) : (
                <></>
              )}
              <div className="card-body items-center text-center">
                <h2 className="card-title">{props.children.data.title}</h2>
                <p>{props.children.data.body}</p>
                <div className="card-actions justify-end">
                  <button onClick={() => {}} className="btn btn-outline">
                    Comments {props.children.data.num_comments}
                  </button>
                  <button
                    onClick={() => setOpenCard(false)}
                    className="btn btn-warning"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Html>
      ) : (
        <></>
      )}
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

function renderCubes(myCallback) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://www.reddit.com/r/AskReddit/rising.json?limit=20");
  req.onload = function () {
    if (req.status == 200) {
      let obj = JSON.parse(req.responseText);
      let arr = [];
      obj.data.children.map((children, index) => {
        // console.log(children.data.link_title);
        arr.push(
          <Cube
            position={setRandomPositions()}
            key={index}
            children={children}
          />
        );
      });
      myCallback(arr);
    } else {
      myCallback("Error: " + req.status);
    }
  };
  req.send();
}

export default function App() {
  const [rows, setRows] = useState();

  useEffect(() => {
    renderCubes(setRows);
  }, []);

  console.log(rows);
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
        <OrbitControls autoRotate autoRotateSpeed={0} />
      </Canvas>

      {modal.modalOpen && (
        <Modal modalOpen={modal.modalOpen} handleClose={close} />
      )}
    </>
  );
}
