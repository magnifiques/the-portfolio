/* eslint-disable react/no-unknown-property */
import {
  Center,
  Float,
  OrbitControls,
  Preload,
  Resize,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import ShoeModel from "./ShoeModel";
import CanvasLoader from "../../CanvasLoader";

const ShoeModel = () => {
  const scene = useGLTF("/interests/nike.glb");

  return (
    <mesh>
      <ambientLight intensity={0.7} />
      <primitive object={scene.scene} scale={10} position={[0, -1, 0]} />
    </mesh>
  );
};

const Shoe = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Canvas camera={{ fov: 25 }}>
        <OrbitControls autoRotate enableRotate={false} enableZoom={false} />
        <Float speed={1.1} rotationIntensity={1.2} floatIntensity={1}>
          <Center>
            <ShoeModel />
          </Center>
        </Float>
      </Canvas>
    </Suspense>
  );
};

export default Shoe;
