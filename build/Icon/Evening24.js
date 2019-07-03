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
const SvgEvening24 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgEvening24';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M19 16v-1h1v1h1v1h-1v1h-1v-1h-1v-1h1zm-9-3v-1h1v1h1v1h-1v1h-1v-1H9v-1h1zm7-4V7h1v2h2v1h-2v2h-1v-2h-2V9h2zM5 17v-2h1v2h2v1H6v2H5v-2H3v-1h2zM9 6h2v1H9v2H8V7H6V6h2V4h1v2z', id: 'evening24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'evening24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#evening24_svg__a' })),
            react_1.default.createElement("use", { xlinkHref: '#evening24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#evening24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
};
SvgEvening24.displayName = 'SvgEvening24';
exports.default = styles_1.withStyles(styles_2.default)(SvgEvening24);
//# sourceMappingURL=Evening24.js.map