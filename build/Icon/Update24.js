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
const SvgUpdate24 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgUpdate24';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M4.5 17.832V20.5h-1v-4h4v1H5.519a8.47 8.47 0 0 0 6.481 3 8.5 8.5 0 0 0 8.5-8.5h1a9.5 9.5 0 0 1-17 5.832zm15-11.664V3.5h1v4h-4v-1h1.981A8.47 8.47 0 0 0 12 3.5 8.5 8.5 0 0 0 3.5 12h-1a9.5 9.5 0 0 1 17-5.832z', id: 'update24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'update24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#update24_svg__a' })),
            react_1.default.createElement("use", { fillRule: 'nonzero', xlinkHref: '#update24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#update24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
};
SvgUpdate24.displayName = 'SvgUpdate24';
exports.default = styles_1.withStyles(styles_2.default)(SvgUpdate24);
//# sourceMappingURL=Update24.js.map