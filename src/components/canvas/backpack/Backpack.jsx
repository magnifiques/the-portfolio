import { Float, OrbitControls, Preload, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Backpack from "./BackpackModel.jsx";
import CanvasLoader from "../../CanvasLoader.jsx";

const Car = () => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Float speed={1.4}>
          <Stage environment="city" intensity={0.6}>
            <Backpack />
          </Stage>
        </Float>
        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Car;
