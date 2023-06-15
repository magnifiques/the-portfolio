/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import FridgeModel from "./FridgeModel";

const BurgerModel = () => {
  const scene = useGLTF("/interests/burger.glb");
  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <primitive object={scene.scene} scale={0.01} />
    </mesh>
  );
};

const Burger = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{ fov: 25 }}>
      <OrbitControls
        enableZoom={false}
        autoRotate
        enableRotate={false}
        maxPolarAngle={Math.PI / 2.4}
        minPolarAngle={Math.PI / 2.4}
      />
      <BurgerModel />

      <Preload all />
    </Canvas>
  );
};

export default Burger;
