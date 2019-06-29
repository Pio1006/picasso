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
const SvgSettings24 = (props) => {
    const { classes, className, style = {}, color, scale, size, base } = props;
    if (size) {
        const name = 'SvgSettings24';
        window.console.warn(`${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`);
    }
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M7.209 19.62l-1.573 1.572-2.828-2.828 1.572-1.573A8.948 8.948 0 0 1 3.223 14H1v-4h2.223A8.948 8.948 0 0 1 4.38 7.209L2.808 5.636l2.828-2.828L7.209 4.38A8.948 8.948 0 0 1 10 3.223V1h4v2.223a8.948 8.948 0 0 1 2.791 1.157l1.573-1.572 2.828 2.828-1.572 1.573c.533.845.929 1.786 1.157 2.791H23v4h-2.223a8.948 8.948 0 0 1-1.157 2.791l1.572 1.573-2.828 2.828-1.573-1.572A8.948 8.948 0 0 1 14 20.777V23h-4v-2.223a8.948 8.948 0 0 1-2.791-1.157zm-.143-1.272l.676.426c.76.48 1.598.828 2.48 1.028l.778.176V22h2v-2.022l.779-.176a7.947 7.947 0 0 0 2.48-1.028l.675-.426 1.43 1.43 1.414-1.414-1.43-1.43.426-.676a7.947 7.947 0 0 0 1.028-2.48l.176-.778H22v-2h-2.022l-.176-.779a7.947 7.947 0 0 0-1.028-2.48l-.426-.675 1.43-1.43-1.414-1.414-1.43 1.43-.676-.426a7.947 7.947 0 0 0-2.48-1.028L13 4.022V2h-2v2.022l-.779.176c-.881.2-1.718.549-2.48 1.028l-.675.426-1.43-1.43-1.414 1.414 1.43 1.43-.426.676a7.947 7.947 0 0 0-1.028 2.48L4.022 11H2v2h2.022l.176.779c.2.881.549 1.718 1.028 2.48l.426.675-1.43 1.43 1.414 1.414 1.43-1.43zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', id: 'settings24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'settings24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#settings24_svg__a' })),
            react_1.default.createElement("use", { fillRule: 'nonzero', xlinkHref: '#settings24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#settings24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
};
SvgSettings24.displayName = 'SvgSettings24';
exports.default = styles_1.withStyles(styles_2.default)(SvgSettings24);
//# sourceMappingURL=Settings24.js.map