import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Plane } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { MathUtils } from "three";
import "../src/index.css";
import { RigidBody, CuboidCollider, Physics } from "@react-three/rapier";

let pos = {
  x: 0,
  y: 0,
  z: 0,
};

function setRandomPositions() {
  pos.x = MathUtils.randFloat(-5, 5);
  pos.y = MathUtils.randFloat(50, 10);
  pos.z = MathUtils.randFloat(-5, 5);
  return pos;
}

const Scene = () => {
  const boxRef = useRef();
  const bodyRef = useRef();

  let rows = [];
  for (let i = 0; i < 100; i++) {
    setRandomPositions();
    rows.push(
      <RigidBody
        ref={bodyRef}
        colliders={"cuboid"}
        restitution={0.1}
        // position={[0, 0, 0]}
        position={[pos.x, pos.y, pos.z]}
      >
        <Box
          castShadow
          receiveShadow
          ref={boxRef}
          key={i}
        >
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
      </RigidBody>
    );
  }

  return <group>{rows}</group>;
};

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-3, 2, 5], fov: 90 }}>
      <Suspense>
        <Physics>
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            intensity={0.7}
            castShadow
            position={[1, 3, 2]}
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            args={[1000, 1000]}
          >
            <meshStandardMaterial attach="material" color="white" />
          </Plane>
          <Scene />
          <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
          <CuboidCollider
            position={[0, 0, 0]}
            args={[20, 0, 20]}
            color={"red"}
          ></CuboidCollider>
        </Physics>
      </Suspense>
    </Canvas>
  );
}
