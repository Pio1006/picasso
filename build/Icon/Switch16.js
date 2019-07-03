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
const SvgSwitch16 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgSwitch16';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 16 16', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M14.275 15.277a2.456 2.456 0 0 1-2.691.531A21.21 21.21 0 0 1 .192 4.421a2.462 2.462 0 0 1 .53-2.694L2.106.34a1.156 1.156 0 0 1 1.637 0l2.33 2.326a1.159 1.159 0 0 1 0 1.638L5.07 5.309l.158.218a23.35 23.35 0 0 0 5.247 5.247l.215.157 1.004-1.005a1.156 1.156 0 0 1 1.637 0l2.33 2.326a1.159 1.159 0 0 1 0 1.638l-1.386 1.387zm-2.304-.391c.547.23 1.176.106 1.597-.315l1.385-1.388a.158.158 0 0 0 .001-.224l-2.33-2.327a.156.156 0 0 0-.223 0l-1.609 1.612-.692-.505-.21-.154a24.345 24.345 0 0 1-5.47-5.47l-.662-.907 1.608-1.61a.158.158 0 0 0 .001-.225l-2.33-2.327a.156.156 0 0 0-.222 0L1.429 2.435a1.463 1.463 0 0 0-.315 1.602c2.048 4.899 5.95 8.8 10.857 10.85zM10.707 6H13v1H9V3h1v2.293l4.5-4.5.707.707-4.5 4.5z', id: 'switch16_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'switch16_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#switch16_svg__a' })),
            react_1.default.createElement("use", { fillRule: 'nonzero', xlinkHref: '#switch16_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#switch16_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h16v16H0z' })))));
};
SvgSwitch16.displayName = 'SvgSwitch16';
exports.default = styles_1.withStyles(styles_2.default)(SvgSwitch16);
//# sourceMappingURL=Switch16.js.map