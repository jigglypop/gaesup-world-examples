import * as THREE from "three";
export type dynamicType = {
    time: number | null;
    X: THREE.Vector3;
    Y: THREE.Vector3;
    Qt: THREE.Quaternion;
};
export default function DynamicPlatforms(): import("react/jsx-runtime").JSX.Element;
