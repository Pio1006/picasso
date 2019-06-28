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
const styles_1 = require("@material-ui/core/styles");
const classnames_1 = __importDefault(require("classnames"));
const Page_1 = require("../Page");
const styles_2 = __importDefault(require("./styles"));
const currentYear = new Date().getFullYear();
exports.PageFooter = ({ classes, className, style, rightContent }) => {
    const { fullWidth } = react_1.useContext(Page_1.PageContext);
    const contentClassnames = classnames_1.default({
        [classes.fullWidth]: fullWidth
    }, classes.content);
    return (react_1.default.createElement("footer", { className: classnames_1.default(classes.root, className), style: style },
        react_1.default.createElement("div", { className: contentClassnames },
            react_1.default.createElement("div", { className: classes.left }, `© Copyright 2010 – ${currentYear} Toptal, LLC`),
            react_1.default.createElement("div", { className: classes.right }, rightContent))));
};
exports.PageFooter.defaultProps = {
    rightContent: null
};
exports.PageFooter.displayName = 'PageFooter';
exports.default = styles_1.withStyles(styles_2.default)(exports.PageFooter);
//# sourceMappingURL=PageFooter.js.map