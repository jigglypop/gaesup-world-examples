"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect } from "react";
import * as THREE from "three";
import { GaeSupProps } from "../../../src";
import { S3 } from "../../../src/gaesup/utils/constant";
export default function RoughPlane() {
    var roughPlane = useGLTF(S3 + "/roughPlane.glb");
    useEffect(function () {
        roughPlane.scene.traverse(function (child) {
            if (child instanceof THREE.Mesh &&
                child.material instanceof THREE.MeshStandardMaterial) {
                child.receiveShadow = true;
            }
        });
    }, []);
    return (_jsx(GaeSupProps, { text: "RoughPlane", jumpPoint: true, position: [10, -1, 10], children: _jsx(RigidBody, { type: "fixed", colliders: "trimesh", children: _jsx("primitive", { object: roughPlane.scene }) }) }));
}
