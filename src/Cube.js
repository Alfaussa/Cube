
import React from "react";
import {  } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";





export function Cube() {
 

  return (
 <mesh rotation={[90, 0, 20]}>,
   <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
   <meshLambertMaterial attach="material" color="gray" />
  </mesh>
 );
}