import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Plane, RoundedBox, Sky } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { MathUtils } from "three";
import "../src/index.css";
import { RigidBody, CuboidCollider, Physics, Debug } from "@react-three/rapier";

function setRandomPositions() {
  let pos = {};
  pos.x = MathUtils.randFloat(-5, 5);
  pos.y = MathUtils.randFloat(50, 10);
  pos.z = MathUtils.randFloat(-5, 5);
  return pos;
}

let rows = [];
for (let i = 0; i < 100; i++) {
  const p = setRandomPositions();
  rows.push(
    <mesh castShadow key={i}>
      <Scene position={p} />
    </mesh>
  );
}

function Scene({ position }) {
  const boxRef = useRef();
  const bodyRef = useRef();
  const [disabled, setDisabled] = useState(false);

  return (
    <RigidBody
      ref={bodyRef}
      colliders={"cuboid"}
      restitution={0.5}
      position={[position.x, position.y, position.z]}
    >
      <RoundedBox
        castShadow
        ref={boxRef}
        onClick={(event) => {
          setDisabled(true);
          console.log("setting disabled");
        }}
      >
        <meshStandardMaterial
          attach="material"
          color={disabled ? "gray" : "orange"}
        />
      </RoundedBox>
    </RigidBody>
  );
}

export default function App(props) {
  return (
    <Canvas shadows camera={{ position: [15, 5, 5], fov: 75 }}>
      {/* <fog attach="fog" args={["white", 10, 40]} /> */}
      <ambientLight intensity={0.5} />
        <directionalLight
          intensity={0.5}
          castShadow
          position={[1, 3, 2]}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
        {...props}
      />
      <Suspense>
        <Physics>
          {/* <Debug /> */}
          {rows}
          <CuboidCollider
            position={[0, 0, 0]}
            args={[100, 0, 100]}
            color={"red"}
          />

          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            args={[1000, 1000]}
          >
            <meshStandardMaterial attach="material" color="white" />
          </Plane>
        </Physics>
      </Suspense>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  );
}
