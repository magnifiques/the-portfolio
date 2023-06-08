/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";

const Diner = () => {
  const scene = useGLTF("/diner/cafe.glb");
  return (
    <mesh>
      <ambientLight intensity={0.4} />

      <primitive
        object={scene.scene}
        scale={1.5}
        position={[0, -1.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </mesh>
  );
};

const DinerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 75 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          autoRotate
          enableDamping
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
          autoRotateSpeed={1}
        />
        <Diner />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DinerCanvas;
