"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
exports.default = ({ palette, screens, layout }) => styles_1.createStyles({
    root: {
        backgroundColor: palette.grey.darker,
        width: '100%'
    },
    content: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: `0.5rem ${layout.contentPaddingHorizontal} 1.5rem`,
        maxWidth: layout.contentWidth,
        color: palette.common.white,
        fontSize: '0.875rem',
        lineHeight: '1em',
        [screens('small', 'medium', 'large')]: {
            flexDirection: 'column'
        }
    },
    centered: {},
    fullWidth: {
        maxWidth: '100%'
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem'
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem',
        [screens('small', 'medium', 'large')]: {
            order: -1
        }
    }
});
//# sourceMappingURL=styles.js.map