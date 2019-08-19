"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const Container_1 = __importDefault(require("../../Container"));
exports.SidebarLogo = (_a) => {
    var { children, className, classes, style } = _a, rest = __rest(_a, ["children", "className", "classes", "style"]);
    return (react_1.default.createElement(Container_1.default
    // eslint-disable-next-line react/jsx-props-no-spreading
    , Object.assign({}, rest, { flex: true, bottom: 'small', left: 'medium', alignItems: 'center', className: className, style: style, classes: classes }), children));
};
exports.SidebarLogo.defaultProps = {};
exports.SidebarLogo.displayName = 'SidebarLogo';
exports.default = styles_1.withStyles(styles_2.default)(exports.SidebarLogo);
//# sourceMappingURL=SidebarLogo.js.map