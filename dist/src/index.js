"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Environment, KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import { GaeSupTools, GaesupController, GaesupWorld } from "../../../src";
import { S3 } from "../../../src/gaesup/utils/constant";
import FloatMove from "../platform/FloatMove";
import Floor from "../platform/Floor";
import RigidObjects from "../platform/RigidObjects";
import RoughPlane from "../platform/RoughPlane";
import * as style from "./style.css";
import { button } from "./style.css";
export var keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "space", keys: ["Space"] },
    { name: "shift", keys: ["Shift"] },
    { name: "keyZ", keys: ["KeyZ"] },
];
export default function Selected() {
    var CHARACTER_URL = "./gaesupyee.glb";
    var AIRPLANE_URL = "./airplane.glb";
    var VEHICLE_URL = S3 + "/kart2.glb";
    var _a = useState({
        type: "character",
        controller: isMobile ? "joystick" : "joystick",
    }), mode = _a[0], changeMode = _a[1];
    var _b = useState({
        cameraType: "perspective",
        controlType: "orbit",
    }), camera = _b[0], changeCamera = _b[1];
    return (_jsxs(GaesupWorld, { debug: true, mode: __assign({}, mode), url: {
            characterUrl: CHARACTER_URL,
            vehicleUrl: VEHICLE_URL,
            airplaneUrl: AIRPLANE_URL,
        }, children: [_jsx(GaeSupTools, {}), _jsxs("div", { className: style.mainButtonContainer, children: [_jsx("button", { className: button({
                            selected: mode.type === "character",
                        }), onClick: function () {
                            return changeMode(function (mode) { return ({
                                type: "character",
                                controller: mode.controller,
                            }); });
                        }, children: "CHARACTER" }), _jsx("button", { className: button({
                            selected: mode.type === "vehicle",
                        }), onClick: function () {
                            return changeMode(function (mode) { return ({
                                type: "vehicle",
                                controller: mode.controller,
                            }); });
                        }, children: "VEHICLE" }), _jsx("button", { className: button({
                            selected: mode.type === "airplane",
                        }), onClick: function () {
                            return changeMode(function (mode) { return ({
                                type: "airplane",
                                controller: mode.controller,
                            }); });
                        }, children: "AIRPLANE" }), _jsx("button", { className: button({
                            selected: camera.controlType === "normal",
                        }), onClick: function () {
                            return changeCamera(function () { return ({
                                cameraType: "perspective",
                                controlType: "normal",
                            }); });
                        }, children: "NORMAL" }), _jsx("button", { className: button({
                            selected: camera.controlType === "orbit" &&
                                camera.cameraType === "perspective",
                        }), onClick: function () {
                            return changeCamera(function () { return ({
                                cameraType: "perspective",
                                controlType: "orbit",
                            }); });
                        }, children: "ORBIT" }), _jsx("button", { className: button({
                            selected: camera.cameraType === "orthographic",
                        }), onClick: function () {
                            changeCamera(function () { return ({
                                cameraType: "orthographic",
                                controlType: "orbit",
                            }); });
                        }, children: "MAP" }), !isMobile && (_jsx("button", { className: button({
                            selected: mode.controller === "keyboard",
                        }), onClick: function () {
                            changeMode(function (mode) { return ({
                                type: mode.type,
                                controller: "keyboard",
                            }); });
                        }, children: "\uD0A4\uBCF4\uB4DC" })), _jsx("button", { className: button({
                            selected: mode.controller === "joystick",
                        }), onClick: function () {
                            changeMode(function (mode) { return ({
                                type: mode.type,
                                controller: "joystick",
                            }); });
                        }, children: "\uC870\uC774\uC2A4\uD2F1" }), _jsx("button", { className: button({
                            selected: mode.controller === "gameboy",
                        }), onClick: function () {
                            changeMode(function (mode) { return ({
                                type: mode.type,
                                controller: "gameboy",
                            }); });
                        }, children: "\uAC8C\uC784\uBCF4\uC774" })] }), _jsxs(Canvas, { shadows: true, dpr: [1, 2], style: { width: "100dvw", height: "100dvh" }, children: [_jsx(Environment, { background: true, preset: "sunset", blur: 0.8 }), _jsx("directionalLight", { castShadow: true, "shadow-normalBias": 0.06, position: [20, 30, 10], intensity: 0.5, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 50, "shadow-camera-top": 50, "shadow-camera-right": 50, "shadow-camera-bottom": -50, "shadow-camera-left": -50 }), _jsx("ambientLight", { intensity: 0.5 }), _jsxs(Physics, { debug: true, children: [_jsx(KeyboardControls, { map: keyboardMap, children: _jsx(GaesupController, { isRider: mode.type === "vehicle" ? true : false, cameraMode: __assign({}, camera), orthographicCamera: {
                                        zoom: 80,
                                    }, groupProps: {
                                        rotation: [0, Math.PI, 0],
                                    }, onAnimate: function (_a) {
                                        var control = _a.control, states = _a.states, playAnimation = _a.playAnimation;
                                        var keyZ = control.keyZ;
                                        if (keyZ) {
                                            states.isAnimationOuter = true;
                                            playAnimation("greet");
                                        }
                                        else {
                                            states.isAnimationOuter = false;
                                        }
                                    } }) }), _jsx(RoughPlane, {}), _jsx(RigidObjects, {}), _jsx(FloatMove, {}), _jsx(Floor, {})] })] }), _jsx(GaeSupTools, { keyboardToolTip: {
                    keyBoardMap: keyboardMap,
                    keyBoardLabel: {
                        keyZ: "GREET",
                        space: "JUMP",
                    },
                } })] }));
}
