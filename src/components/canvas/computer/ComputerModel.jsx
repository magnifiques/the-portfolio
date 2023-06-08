/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/interests/computer-transformed.glb");
  return (
    <group {...props} dispose={null} scale={0.75}>
      <mesh
        geometry={nodes.Plane002_digital_displays_0.geometry}
        material={materials.digital_displays}
        position={[0, 0.289, 3.122]}
        rotation={[-1.469, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane002_digital_display_sides_0.geometry}
        material={materials.digital_display_sides}
        position={[0, 0.289, 3.122]}
        rotation={[-1.469, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle_metal_2_0.geometry}
        material={materials.metal_2}
        position={[0, 0, -0.948]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.238}
      />
      <mesh
        geometry={nodes.Circle_metal_1_0.geometry}
        material={materials.metal_1}
        position={[0, 0, -0.948]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.238}
      />
    </group>
  );
}

useGLTF.preload("/interests/computer-transformed.glb");
