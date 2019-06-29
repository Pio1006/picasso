"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const BASE_SIZE = 24;
const SvgEmail24 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgEmail24';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M1.721 4L12 13.342 22.279 4H1.72zM23 4.693l-11 9.966L1 4.693V20h22V4.693zM0 3h24v18H0V3z', id: 'email24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'email24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#email24_svg__a' })),
            react_1.default.createElement("use", { fillRule: 'nonzero', xlinkHref: '#email24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#email24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
};
SvgEmail24.displayName = 'SvgEmail24';
exports.default = styles_1.withStyles(styles_2.default)(SvgEmail24);
//# sourceMappingURL=Email24.js.map