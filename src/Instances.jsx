import React, {useRef,useEffect} from "react";
import * as THREE from 'three'

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Instance,
  Cloud,
} from "@react-three/drei";
import { InstancedMesh } from "three";


//TODO: Use instances to render
function Instances({ count = 1000, temp = new THREE.Object3D() }) {
  const ref = useRef();
  useEffect(() => {
    // Set positions
    for (let i = 0; i < count; i++) {
      temp.position.set(Math.random(), Math.random(), Math.random());
      temp.updateMatrix();
      ref.current.setMatrixAt(i, temp.matrix);
    }
    // Update the instance
    ref.current.instanceMatrix.needsUpdate = true;
  }, []);
  return (
    <InstancedMesh ref={ref} args={[null, null, count]}>
      <boxGeometry />
      <meshPhongMaterial />
    </InstancedMesh>
  );
}

export default Instances;