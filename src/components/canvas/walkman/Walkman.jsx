import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WalkmanModel from "./WalkmanModel";

const Walkman = () => {
  return (
    <Canvas>
      <Suspense fallback={null}></Suspense>
      <Stage environment="city" intensity={0.6}>
        <WalkmanModel />
      </Stage>
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
};

export default Walkman;
