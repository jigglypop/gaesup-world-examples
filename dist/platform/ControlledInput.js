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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import * as style from "./style.css";
export var ControlledInput = function (props) {
    var value = props.value, onChange = props.onChange, rest = __rest(props, ["value", "onChange"]);
    var _a = useState(null), cursor = _a[0], setCursor = _a[1];
    var ref = useRef(null);
    useEffect(function () {
        var input = ref.current;
        if (input)
            input.setSelectionRange(cursor, cursor);
    }, [ref, cursor, value]);
    var handleChange = function (e) {
        setCursor(e.target.selectionStart);
        onChange && onChange(e);
    };
    return (_jsx("input", __assign({ ref: ref, value: value, onChange: handleChange }, rest, { className: style.input })));
};
