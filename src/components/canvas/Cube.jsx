/* eslint-disable react/no-unknown-property */
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

const CubeMesh = () => {
  const textRef = useRef();

  useFrame((state) => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh>
      <ambientLight intensity={1} />
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["purple"]} />
          <Text ref={textRef} fontSize={3} color="#fff">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

const Cube = () => {
  return (
    <>
      <Canvas camera={{ position: [2.3, 2.3, 2.3], fov: 25 }}>
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            autoRotate
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          />

          <CubeMesh />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default Cube;
