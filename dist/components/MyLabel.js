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
import './myLabel.css';
/**
 * Componente principal para interacción con usuario
 */
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'No label' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, props = __rest(_a, ["label", "size", "color"]);
    return (_jsx("span", { className: "label ".concat(size, " text-").concat(color), style: { color: props.fontColor }, children: props.allCaps ? label.toUpperCase() : label }));
};
export default MyLabel;
