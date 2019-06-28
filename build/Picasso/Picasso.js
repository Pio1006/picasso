"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const react_1 = __importDefault(require("react"));
const CssBaseline_1 = __importDefault(require("../CssBaseline"));
const config_1 = require("./config");
const FontsLoader_1 = __importDefault(require("./FontsLoader"));
const PicassoProvider_1 = __importDefault(require("./PicassoProvider"));
const styles_2 = __importDefault(require("./styles"));
const picasso = {
    palette: config_1.palette,
    layout: config_1.layout,
    transitions: config_1.transitions,
    spacing: config_1.spacing,
    breakpoints: config_1.breakpoints,
    screens: config_1.screens,
    shadows: config_1.shadows,
    typography: config_1.typography,
    props: {
        MuiButtonBase: {
            disableRipple: true
        },
        MuiList: {
            disablePadding: true
        },
        MuiPaper: {
            square: true
        },
        MuiOutlinedInput: {
            notched: false
        }
    }
};
const PicassoProvider = new PicassoProvider_1.default(styles_1.createMuiTheme(picasso));
exports.PicassoProvider = PicassoProvider;
const PicassoGlobalStylesProvider = styles_1.withStyles(styles_2.default, {
    name: 'Picasso'
})((props) => {
    const { classes, children } = props;
    return react_1.default.createElement("div", { className: classes.root }, children);
});
const Picasso = ({ loadFonts, reset, children }) => (react_1.default.createElement(styles_1.MuiThemeProvider, { theme: PicassoProvider.theme },
    loadFonts && react_1.default.createElement(FontsLoader_1.default, null),
    reset && react_1.default.createElement(CssBaseline_1.default, null),
    react_1.default.createElement(PicassoGlobalStylesProvider, null, children)));
Picasso.defaultProps = {
    loadFonts: true,
    reset: true
};
exports.default = Picasso;
//# sourceMappingURL=Picasso.js.map