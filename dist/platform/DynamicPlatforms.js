"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, CylinderCollider, RigidBody, quat, vec3, } from "@react-three/rapier";
import { useMemo, useRef } from "react";
import { GaeSupProps } from "../../../src";
export default function DynamicPlatforms() {
    var sideMovePlatformRef = useRef(null);
    var verticalMovePlatformRef = useRef(null);
    var rotatePlatformRef = useRef(null);
    var rotationDrumRef = useRef(null);
    // Initializ animation settings
    var dynamic = useMemo(function () {
        return {
            time: null,
            X: vec3().set(1, 0, 0),
            Y: vec3().set(0, 1, 0),
            Qt: quat(),
        };
    }, []);
    useFrame(function (state) {
        var _a, _b, _c, _d, _e;
        dynamic.time = state.clock.elapsedTime;
        var time = dynamic.time, Qt = dynamic.Qt, X = dynamic.X, Y = dynamic.Y;
        if (dynamic.time) {
            // Move platform
            (_a = sideMovePlatformRef.current) === null || _a === void 0 ? void 0 : _a.setNextKinematicTranslation({
                x: 5 * Math.sin(time / 2) - 12,
                y: -0.5,
                z: -10,
            });
            // Elevate platform
            (_b = verticalMovePlatformRef.current) === null || _b === void 0 ? void 0 : _b.setNextKinematicTranslation({
                x: -25,
                y: 2 * Math.sin(time / 2) + 2,
                z: 0,
            });
            (_c = verticalMovePlatformRef.current) === null || _c === void 0 ? void 0 : _c.setNextKinematicRotation(Qt.setFromAxisAngle(Y, time * 0.5));
            // Rotate platform
            (_d = rotatePlatformRef.current) === null || _d === void 0 ? void 0 : _d.setNextKinematicRotation(Qt.setFromAxisAngle(Y, time * 0.5));
            // Rotate drum
            (_e = rotationDrumRef.current) === null || _e === void 0 ? void 0 : _e.setNextKinematicRotation(Qt.setFromAxisAngle(X, time * 0.5));
        }
    });
    return (_jsxs(GaeSupProps, { text: "dynamic", jumpPoint: true, position: [-10, 0, -10], children: [_jsxs(RigidBody, { type: "kinematicPosition", ref: sideMovePlatformRef, colliders: false, children: [_jsx(Text, { scale: 0.5, color: "black", maxWidth: 10, textAlign: "center", position: [0, 2.5, 0], children: "Kinematic Moving Platform" }), _jsx(CuboidCollider, { args: [2.5, 0.1, 2.5] }), _jsxs("mesh", { receiveShadow: true, castShadow: true, children: [_jsx("boxGeometry", { args: [5, 0.2, 5] }), _jsx("meshStandardMaterial", { color: "moccasin" })] })] }), _jsxs(RigidBody, { type: "kinematicPosition", position: [-25, 0, 0], ref: verticalMovePlatformRef, colliders: false, children: [_jsx(Text, { scale: 0.5, color: "black", maxWidth: 10, textAlign: "center", position: [0, 2.5, 0], rotation: [0, Math.PI / 2, 0], children: "Kinematic Elevating Platform" }), _jsx(CuboidCollider, { args: [2.5, 0.1, 2.5] }), _jsxs("mesh", { receiveShadow: true, castShadow: true, children: [_jsx("boxGeometry", { args: [5, 0.2, 5] }), _jsx("meshStandardMaterial", { color: "moccasin" })] })] }), _jsxs(RigidBody, { type: "kinematicPosition", position: [-25, -0.5, -10], ref: rotatePlatformRef, colliders: false, children: [_jsx(Text, { scale: 0.5, color: "black", maxWidth: 10, textAlign: "center", position: [0, 2.5, 0], children: "Kinematic Rotating Platform" }), _jsx(CuboidCollider, { args: [2.5, 0.1, 2.5] }), _jsxs("mesh", { receiveShadow: true, castShadow: true, children: [_jsx("boxGeometry", { args: [5, 0.2, 5] }), _jsx("meshStandardMaterial", { color: "moccasin" })] })] }), _jsx(Text, { scale: 0.5, color: "black", maxWidth: 10, textAlign: "center", position: [-15, 2.5, -15], children: "Kinematic Rotating Drum" }), _jsx(RigidBody, { colliders: false, type: "kinematicPosition", position: [-15, -1, -15], ref: rotationDrumRef, children: _jsxs("group", { rotation: [0, 0, Math.PI / 2], children: [_jsx(CylinderCollider, { args: [5, 1] }), _jsxs("mesh", { receiveShadow: true, children: [_jsx("cylinderGeometry", { args: [1, 1, 10] }), _jsx("meshStandardMaterial", { color: "moccasin" })] })] }) })] }));
}
