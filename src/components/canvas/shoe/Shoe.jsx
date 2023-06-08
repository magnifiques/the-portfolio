import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ShoeModel from "./ShoeModel";

const Shoe = () => {
  return (
    <Canvas>
      <Suspense fallback={null}></Suspense>
      <Stage environment="city" intensity={0.6}>
        <ShoeModel />
      </Stage>
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
};

export default Shoe;
