/* eslint-disable react/no-unknown-property */
import {
  Float,
  OrbitControls,
  Preload,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import ShoeModel from "./ShoeModel";
import CanvasLoader from "../../CanvasLoader";

const ShoeModel = () => {
  const scene = useGLTF("/interests/shoes_final.glb");

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <primitive object={scene.scene} scale={0.2} position={[0, -0.5, 0]} />
    </mesh>
  );
};

const Shoe = () => {
  return (
    <Canvas camera={{ fov: 30 }}>
      <OrbitControls autoRotate enableRotate={false} enableZoom={false} />
      <ShoeModel />
    </Canvas>
  );
};

export default Shoe;
