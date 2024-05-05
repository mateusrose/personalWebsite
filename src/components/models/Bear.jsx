"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Bear(props) {
  const { nodes, materials } = useGLTF('models/bear/bear-transformed.glb')
    const modelRef = useRef();
    useFrame((state,delta,xrFrame) => {
    modelRef.current.position.y = -1 + Math.sin(state.clock.getElapsedTime()) * 0.2;
    });



  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[-0.8, -1, 0]}
    scale={[0.25, 0.25, 0.25]}
    rotation={[0, 350, 50]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object_0.geometry}
        material={materials.object_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object_1.geometry}
        material={materials.object_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object_2.geometry}
        material={materials.object_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.object_3.geometry}
        material={materials.object_3}
      />
    </group>
  )
}

useGLTF.preload('models/bear/bear-transformed.glb')