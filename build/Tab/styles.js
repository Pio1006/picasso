"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const Picasso_1 = require("../Picasso");
Picasso_1.PicassoProvider.override(({ breakpoints, palette, typography }) => ({
    MuiTab: {
        root: {
            fontWeight: typography.fontWeights.semibold,
            minHeight: 0,
            minWidth: 0,
            lineHeight: 1,
            textTransform: 'none',
            color: palette.grey.dark,
            '&$selected': {
                color: palette.common.black
            },
            '&:not(:last-child)': {
                marginRight: '2em'
            },
            [breakpoints.up('md')]: {
                minWidth: undefined,
                fontSize: undefined
            }
        },
        selected: {},
        labelContainer: {
            padding: '0.625em 0',
            [breakpoints.up('md')]: {
                padding: undefined
            }
        },
        label: {
            fontSize: '0.8125em'
        }
    }
}));
exports.default = () => styles_1.createStyles({});
//# sourceMappingURL=styles.js.map