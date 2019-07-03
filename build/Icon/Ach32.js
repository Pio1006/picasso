"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const BASE_SIZE = 32;
const SvgAch32 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgAch32';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 32 32', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M25 12v-1h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h6v1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1h-5zM14 24h14v1H14v-1zm4-4h10v1H18v-1zm-.5-13.793L5 18.707V23h4.293l12.5-12.5L17.5 6.207zm.707-.707L22.5 9.793 24.793 7.5 20.5 3.207 18.207 5.5zM4 18.293l16.5-16.5L26.207 7.5 9.707 24H4v-5.707z', id: 'ach32_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'ach32_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#ach32_svg__a' })),
            react_1.default.createElement("use", { fillRule: 'nonzero', xlinkHref: '#ach32_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#ach32_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h32v32H0z' })))));
};
SvgAch32.displayName = 'SvgAch32';
exports.default = styles_1.withStyles(styles_2.default)(SvgAch32);
//# sourceMappingURL=Ach32.js.map