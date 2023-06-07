/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

const Planet = () => {
  const planet = useGLTF("/planet/scene.gltf");

  return (
    <mesh>
      <primitive object={planet.scene} scale={2.5} />
    </mesh>
  );
};

const PlanetCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 9] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Planet />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PlanetCanvas;
