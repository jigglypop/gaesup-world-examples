import { Ray, RayColliderToi } from "@dimforge/rapier3d-compat";
import * as THREE from "three";
export type rayType = {
    origin: THREE.Vector3;
    dir: THREE.Vector3;
    offset: THREE.Vector3;
    springDir: THREE.Vector3;
    velocity: THREE.Vector3;
    hit: RayColliderToi | null;
    parent: THREE.Object3D | null;
    rayCast: Ray | null;
    length: number;
};
export default function FloatMove(): import("react/jsx-runtime").JSX.Element;
