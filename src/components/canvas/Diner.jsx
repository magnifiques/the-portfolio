/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";

const Diner = () => {
  const diner = useGLTF("/diner/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />

      <pointLight intensity={3} />
      <spotLight
        position={[5, 1, 1]}
        // angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={diner.scene} scale={1.5} position={[5, -4.5, -3.5]} />
    </mesh>
  );
};

const DinerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [5, 5, 5], fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Diner />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DinerCanvas;
