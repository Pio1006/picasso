"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const SvgLogoEmblem = (props) => {
    const { classes, className, style, size, color } = props;
    const svgStyle = Object.assign({ fontSize: size && `${size}rem` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 35 40', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("path", { d: 'M7.398 23.727l9.923-10.04 2.044 2.068L9.44 25.793l-2.042-2.066zm19.585-7.045L10.493.004 7.158 3.377l6.183 6.254L0 23.125l16.489 16.679 3.334-3.373-6.182-6.258 13.342-13.49zm7.64-12.564V0h-.828l-1.232 2.995L31.33 0h-.828v4.118h.54V.71l1.444 3.407h.154L34.084.71v3.407h.539zM29.884.487V0H27v.487h1.176v3.63h.532V.488h1.176z' })));
};
SvgLogoEmblem.displayName = 'SvgLogoEmblem';
exports.default = styles_1.withStyles(styles_2.default)(SvgLogoEmblem);
//# sourceMappingURL=LogoEmblem.js.map