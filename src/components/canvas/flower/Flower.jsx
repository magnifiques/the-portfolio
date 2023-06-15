/* eslint-disable react/no-unknown-property */
import { Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../CanvasLoader.jsx";

const FlowerModel = () => {
  const scene = useGLTF("/interests/starbucks_cup.glb");
  return (
    <mesh>
      <ambientLight intensity={0.6} />
      <primitive object={scene.scene} scale={10} position={[0, -0.7, 0]} />
    </mesh>
  );
};

const Flower = () => {
  return (
    <Canvas camera={{ fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <FlowerModel />

        <OrbitControls
          enableZoom={false}
          autoRotate
          enableRotate={false}
          maxPolarAngle={Math.PI / 2.4}
          minPolarAngle={Math.PI / 2.4}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Flower;
