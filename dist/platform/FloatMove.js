import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody, useRapier, vec3, } from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";
import { GaeSupProps } from "../../../src";
export default function FloatMove() {
    // Preset
    var cuboidColliderRef = useRef(null);
    var rigidBodyRef = useRef(null);
    var _a = useRapier(), rapier = _a.rapier, world = _a.world;
    var ray = useMemo(function () {
        return {
            origin: vec3(),
            dir: vec3({ x: 0, y: -1, z: 0 }),
            offset: vec3(),
            springDir: vec3(),
            velocity: vec3(),
            hit: null,
            parent: null,
            rayCast: null,
            length: 0.8,
        };
    }, []);
    ray.rayCast = new rapier.Ray(ray.origin, ray.dir);
    var movingDir = 1;
    useEffect(function () {
        if (rigidBodyRef.current) {
            rigidBodyRef.current.setEnabledRotations(false, true, false, false);
            rigidBodyRef.current.setEnabledTranslations(true, true, false, false);
        }
    }, []);
    useFrame(function () {
        // Ray cast for moving platform
        if (rigidBodyRef.current && ray.rayCast && cuboidColliderRef.current) {
            ray.origin.set(rigidBodyRef.current.translation().x, rigidBodyRef.current.translation().y, rigidBodyRef.current.translation().z);
            ray.hit = world.castRay(ray.rayCast, ray.length, false, undefined, undefined, cuboidColliderRef.current, rigidBodyRef.current);
            // Apply moving velocity to the platform
            if (rigidBodyRef.current.translation().x > 10) {
                movingDir = -1;
            }
            else if (rigidBodyRef.current.translation().x < -5) {
                movingDir = 1;
            }
            if (movingDir > 0) {
                rigidBodyRef.current.setLinvel(ray.velocity.set(2, rigidBodyRef.current.linvel().y, 0), false);
            }
            else {
                rigidBodyRef.current.setLinvel(ray.velocity.set(-2, rigidBodyRef.current.linvel().y, 0), false);
            }
        }
        // Ray for moving platform
        if (ray.hit && rigidBodyRef.current) {
            if (ray.hit.collider.parent()) {
                var floatingForceMove = 2.5 * (0.8 - ray.hit.toi) - rigidBodyRef.current.linvel().y * 0.15;
                rigidBodyRef.current.applyImpulse(vec3().set(0, floatingForceMove, 0), true);
            }
        }
    });
    return (_jsx(GaeSupProps, { text: "moving", jumpPoint: true, position: [0, 5, -17], children: _jsxs(RigidBody, { mass: 1, colliders: false, ref: rigidBodyRef, children: [_jsx(CuboidCollider, { args: [1.25, 0.1, 1.25], ref: cuboidColliderRef }), _jsxs("mesh", { receiveShadow: true, castShadow: true, children: [_jsx("boxGeometry", { args: [2.5, 0.2, 2.5] }), _jsx("meshStandardMaterial", { color: "#d8fff6", transparent: true, opacity: 0.8 })] })] }) }));
}
