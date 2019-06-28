"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const styles_2 = require("../styles");
const ICON_SPACING = '0.4em';
const primary = (mainColor, secondaryColor) => ({
    border: 'none',
    color: secondaryColor,
    backgroundColor: mainColor,
    '&:hover, &$hovered': {
        backgroundColor: styles_2.darken(mainColor, 0.2)
    },
    '&:active, &$active': {
        backgroundColor: styles_2.darken(mainColor, 0.2)
    }
});
const secondary = (mainColor, secondaryColor) => ({
    color: mainColor,
    backgroundColor: secondaryColor,
    '&:hover, &$hovered': {
        backgroundColor: styles_2.lighten(mainColor, 0.84),
        borderColor: mainColor
    },
    '&:active, &$active': {
        backgroundColor: styles_2.lighten(mainColor, 0.84),
        borderColor: mainColor
    }
});
exports.default = ({ palette, spacing, transitions, typography }) => styles_1.createStyles({
    root: {
        position: 'relative',
        textTransform: 'none',
        borderRadius: spacing.borderRadius,
        border: `solid ${spacing.borderWidth} ${palette.grey.light}`,
        fontSize: '1rem',
        transition: `all ${transitions.duration.short}ms ${transitions.easing.easeOut}`,
        transitionProperty: 'border, color, background',
        '&:focus, &$focused': {
            textDecoration: 'underline',
            '&:active, &$active, &:hover': {
                textDecoration: 'none'
            }
        },
        '&+&': {
            marginLeft: '0.5em'
        }
    },
    content: {
        lineHeight: '1.5em',
        fontWeight: typography.fontWeights.semibold
    },
    loader: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    // sizes
    small: {
        height: '1.5em',
        padding: '0 0.75em',
        '& $content': {
            fontSize: typography.buttons.fontSizeSmall
        },
        '&$circular': {
            width: '1.5em'
        }
    },
    medium: {
        height: '2.25em',
        padding: '0 1em',
        '& $content': {
            fontSize: typography.buttons.fontSizeMedium
        },
        '&$circular': {
            width: '2.25em'
        }
    },
    large: {
        height: '3em',
        padding: '0 3.625em',
        '& $content': {
            fontSize: typography.buttons.fontSizeLarge,
            fontWeight: typography.fontWeights.semibold
        },
        '&$circular': {
            width: '3em'
        }
    },
    // variants
    primaryBlue: primary(palette.primary.main, palette.common.white),
    secondaryBlue: secondary(palette.primary.main, palette.common.white),
    primaryRed: primary(palette.red.main, palette.common.white),
    secondaryRed: secondary(palette.red.main, palette.common.white),
    primaryGreen: primary(palette.green.main, palette.common.white),
    secondaryWhite: Object.assign({}, secondary(palette.common.white, palette.common.white), { backgroundColor: 'transparent', border: `solid ${spacing.borderWidth} rgba(255, 255, 255, 0.32)`, '&:hover, &$hovered': {
            backgroundColor: styles_2.alpha(palette.common.white, 0.16),
            borderColor: palette.common.white
        }, '&:active, &$active': {
            backgroundColor: styles_2.alpha(palette.common.white, 0.16),
            borderColor: palette.common.white
        } }),
    flat: Object.assign({}, secondary(palette.common.black, palette.common.white), { border: 'none' }),
    primaryDisabled: primary(palette.grey.light, palette.common.white),
    secondaryDisabled: secondary(palette.grey.light, palette.common.white),
    flatDisabled: Object.assign({}, secondary(palette.grey.light, palette.common.white), { border: 'none' }),
    // Other props
    fullWidth: {
        width: '100%'
    },
    hovered: {},
    focused: {},
    active: {},
    circular: {
        borderRadius: '50%',
        padding: 0
    },
    // Child elements
    icon: {
        fontSize: '1.2em !important'
    },
    iconLeft: {
        marginRight: ICON_SPACING
    },
    iconRight: {
        marginLeft: ICON_SPACING
    },
    hidden: {
        opacity: 0
    }
});
//# sourceMappingURL=styles.js.map