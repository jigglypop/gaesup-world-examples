"use client";

import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { GaeSupProps } from "gaesup-world";
import { useEffect } from "react";
import * as THREE from "three";
import { S3 } from "../src";

export default function RoughPlane() {
  const roughPlane = useGLTF(S3 + "/roughPlane.glb");
  useEffect(() => {
    roughPlane.scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.receiveShadow = true;
      }
    });
  }, []);

  return (
    <GaeSupProps text="RoughPlane" jumpPoint={true} position={[10, -1, 10]}>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={roughPlane.scene} />
      </RigidBody>
    </GaeSupProps>
  );
}
