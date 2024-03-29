/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";

const Cafe = () => {
  const scene = useGLTF("/cafe/cafe.glb");

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <primitive
        object={scene.scene}
        scale={1.5}
        position={[0, -1.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </mesh>
  );
};

const CafeCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{ fov: 75 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
        />
        <Cafe />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CafeCanvas;
