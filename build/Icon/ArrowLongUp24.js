"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("@material-ui/core/styles");
const styles_2 = __importDefault(require("./styles"));
const BASE_SIZE = 24;
const SvgArrowLongUp24 = react_1.forwardRef(function SvgArrowLongUp24(props, ref) {
    const { classes, className, style = {}, color, scale, base } = props;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (react_1.default.createElement("svg", { viewBox: '0 0 24 24', className: classnames_1.default(classes.root, className), style: svgStyle, color: color, ref: ref },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { d: 'M11.5 2.793L17.207 8.5l-.707.707-4.5-4.5V21h-1V4.707l-4.5 4.5-.707-.707L11.5 2.793z', id: 'arrowLongUp24_svg__a' })),
        react_1.default.createElement("g", { fillRule: 'evenodd' },
            react_1.default.createElement("mask", { id: 'arrowLongUp24_svg__b' },
                react_1.default.createElement("use", { xlinkHref: '#arrowLongUp24_svg__a' })),
            react_1.default.createElement("use", { fillRule: 'nonzero', xlinkHref: '#arrowLongUp24_svg__a' }),
            react_1.default.createElement("g", { mask: 'url(#arrowLongUp24_svg__b)' },
                react_1.default.createElement("path", { d: 'M0 0h24v24H0z' })))));
});
SvgArrowLongUp24.displayName = 'SvgArrowLongUp24';
exports.default = styles_1.withStyles(styles_2.default)(SvgArrowLongUp24);
//# sourceMappingURL=ArrowLongUp24.js.map