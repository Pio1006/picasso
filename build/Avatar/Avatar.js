"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const Image_1 = __importDefault(require("../Image"));
const Logo_1 = __importDefault(require("../Logo"));
const Typography_1 = __importDefault(require("../Typography"));
const get_name_initials_1 = __importDefault(require("../utils/get-name-initials"));
const styles_2 = __importDefault(require("./styles"));
class Avatar extends react_1.PureComponent {
    renderLogo() {
        const { classes, src, size } = this.props;
        if (!src || size === 'small' || size === 'xsmall') {
            return null;
        }
        return (react_1.default.createElement("div", { className: classes.logoContainer },
            react_1.default.createElement(Logo_1.default, { emblem: true, variant: 'white', className: classes.logo })));
    }
    renderInitials() {
        const { classes, src, name } = this.props;
        if (src || !name) {
            return null;
        }
        return (react_1.default.createElement(Typography_1.default, { className: classes.text, invert: true }, get_name_initials_1.default(name)));
    }
    render() {
        const _a = this.props, { alt, src, classes, className, name, size, style, variant } = _a, rest = __rest(_a, ["alt", "src", "classes", "className", "name", "size", "style", "variant"]);
        const sizeClassName = classes[size];
        const variantClassName = classes[variant];
        return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        react_1.default.createElement("div", Object.assign({}, rest, { className: classnames_1.default(classes.root, sizeClassName) }),
            src ? (react_1.default.createElement(Image_1.default, { alt: alt || name, className: classnames_1.default(classes.image, variantClassName, sizeClassName, classes.clippedCorner, className), src: src, style: style })) : (react_1.default.createElement("div", { className: classnames_1.default(classes.textContainer, variantClassName, sizeClassName, classes.clippedCorner, className) })),
            this.renderInitials(),
            this.renderLogo()));
    }
}
Avatar.defaultProps = {
    size: 'xsmall',
    variant: 'square'
};
Avatar.displayName = 'Avatar';
exports.Avatar = Avatar;
exports.default = styles_1.withStyles(styles_2.default)(Avatar);
//# sourceMappingURL=Avatar.js.map