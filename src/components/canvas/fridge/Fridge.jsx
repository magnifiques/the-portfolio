/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FridgeModel from "./FridgeModel";
import CanvasLoader from "../../CanvasLoader";

const Computer = () => {
  return (
    <Canvas>
      <Suspense fallback={CanvasLoader}>
        <Stage environment="city" intensity={0.6}>
          <FridgeModel />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Computer;
