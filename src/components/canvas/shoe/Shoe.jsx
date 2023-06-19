/* eslint-disable react/no-unknown-property */
import {
  Center,
  Float,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import ShoeModel from "./ShoeModel";
import CanvasLoader from "../../CanvasLoader";

const ShoeModel = () => {
  const scene = useGLTF("/interests/shoe/scene.gltf");

  return (
    <Center>
      <mesh>
        <ambientLight intensity={0.8} />
        <primitive object={scene.scene} scale={10} position={[0, -1, 0]} />
      </mesh>
    </Center>
  );
};

const Shoe = () => {
  return (
    <Canvas camera={{ fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <Float speed={1.1} rotationIntensity={1.2} floatIntensity={1}>
          <ShoeModel />
        </Float>
        <Preload all />
        <OrbitControls autoRotate enableRotate={false} enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Shoe;
