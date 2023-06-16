/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader";

const CassetteModel = () => {
  const scene = useGLTF("/interests/cassette-transformed.glb");

  return (
    <mesh>
      <ambientLight intensity={1} />
      <primitive object={scene.scene} scale={9} />
    </mesh>
  );
};

const Cassette = () => {
  return (
    <Canvas camera={{ fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <CassetteModel />

        <OrbitControls enableZoom={false} autoRotate enableRotate={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Cassette;
