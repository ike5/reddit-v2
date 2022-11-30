import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, Plane } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import "../src/index.css";
import { RigidBody, CuboidCollider, Physics } from "@react-three/rapier";

const Scene = () => {
  const boxRef = useRef();
  const bodyRef = useRef();
  return (
    <group>
      <RigidBody
        ref={bodyRef}
        colliders={"cuboid"}
        restitution={1.1}
        position={[0, 0, 0]}
      >
        <Box castShadow receiveShadow ref={boxRef} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
      </RigidBody>
    </group>
  );
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
