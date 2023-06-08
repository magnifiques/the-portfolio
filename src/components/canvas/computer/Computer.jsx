/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ComputerModel from "./ComputerModel";
const Computer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}></Suspense>
      <Stage environment="city" intensity={0.6}>
        <ComputerModel />
      </Stage>
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
};

export default Computer;
