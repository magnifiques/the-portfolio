import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CassetteModel from "./CassetteModel";
import CanvasLoader from "../../CanvasLoader";

const Walkman = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Stage environment="city" intensity={0.6}>
          <CassetteModel />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Walkman;
