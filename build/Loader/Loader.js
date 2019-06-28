"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const helpers_1 = require("@material-ui/core/utils/helpers");
const classnames_1 = __importDefault(require("classnames"));
const CircularProgress_1 = __importDefault(require("../CircularProgress"));
const styles_2 = __importDefault(require("./styles"));
var SIZES;
(function (SIZES) {
    SIZES[SIZES["small"] = 16] = "small";
    SIZES[SIZES["medium"] = 32] = "medium";
    SIZES[SIZES["large"] = 64] = "large";
})(SIZES || (SIZES = {}));
exports.Loader = ({ children, classes, size, inline, className, value, variant }) => (react_1.default.createElement("div", { className: classnames_1.default(classes.wrapper, className, {
        [classes.inline]: inline
    }) },
    react_1.default.createElement(CircularProgress_1.default, { classes: {
            root: classes[`spinner${helpers_1.capitalize(variant)}`]
        }, size: SIZES[size], value: value, variant: value ? 'static' : 'indeterminate' }),
    children && react_1.default.createElement("div", { className: classes.label }, children)));
exports.Loader.defaultProps = {
    inline: false,
    size: 'medium',
    variant: 'default'
};
exports.Loader.displayName = 'Loader';
exports.default = styles_1.withStyles(styles_2.default)(exports.Loader);
//# sourceMappingURL=Loader.js.map