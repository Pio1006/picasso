"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const BASE_SIZE = 16;
const SvgInfo16 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgInfo16';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 16 16', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM7 6h1v6H7V6zm0-3h1v1H7V3z', id: 'info16_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'info16_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#info16_svg__a' })),
            react_1.default.createElement("use", { xlinkHref: '#info16_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#info16_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h16v16H0z' })))));
};
SvgInfo16.displayName = 'SvgInfo16';
exports.default = styles_1.withStyles(styles_2.default)(SvgInfo16);
//# sourceMappingURL=Info16.js.map