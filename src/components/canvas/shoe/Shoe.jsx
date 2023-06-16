import { Float, OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ShoeModel from "./ShoeModel";
import CanvasLoader from "../../CanvasLoader";

const Shoe = () => {
  return (
    <Canvas camera={{ fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <Float speed={4} rotationIntensity={2}>
          <ShoeModel />
        </Float>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Shoe;
