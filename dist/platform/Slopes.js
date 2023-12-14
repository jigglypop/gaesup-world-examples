"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Html, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GaeSupProps } from "../../../src";
import { S3 } from "../../../src/gaesup/utils/constant";
import { ControlledInput } from "./ControlledInput";
export default function Slopes() {
    // Load models
    var slopes = useGLTF(S3 + "/slopes.glb");
    var _a = useState(25), angle = _a[0], setAngle = _a[1];
    var rigidBodyRef = useRef(null);
    useEffect(function () {
        // Receive Shadows
        slopes.scene.traverse(function (child) {
            if (child instanceof THREE.Mesh &&
                child.material instanceof THREE.MeshStandardMaterial) {
                child.receiveShadow = true;
            }
        });
    }, []);
    return (_jsxs(GaeSupProps, { text: "Slopes", jumpPoint: true, position: [-15, -0.8, 15], children: [_jsx(RigidBody, { type: "fixed", colliders: "hull", ref: rigidBodyRef, rotation: [-(angle * Math.PI) / 180, 0, 0], children: _jsxs("mesh", { receiveShadow: true, castShadow: true, children: [_jsx("boxGeometry", { args: [10, 1, 10] }), _jsx("meshBasicMaterial", { transparent: true, opacity: 0.9 })] }) }), _jsx(Html, { zIndexRange: [1, 0], children: _jsx(ControlledInput, { type: angle, onChange: function (e) {
                        return setAngle(e.target.value);
                    }, value: angle }) })] }));
}
