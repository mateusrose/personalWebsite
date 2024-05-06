"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

export default function BookSteampunk(props) {
  const { nodes, materials } = useGLTF("models/steampunk_book-transformed.glb");
  const modelRef = useRef();
  useFrame(()=>{
    modelRef.current.rotation.z += 0.003;
  
  })
  return (
    <group {...props} dispose={null}
      position={[0, 1, 1]}
      scale={[0.2, 0.2, 0.2]}
      rotation={[20, 0, 120]}
      ref={modelRef}
      >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.lambert6SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.lambert7SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("models/steampunk_book-transformed.glb");
