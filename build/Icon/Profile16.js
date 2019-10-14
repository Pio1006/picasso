import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgProfile16 = forwardRef(function SvgProfile16(props, ref) {
    const { classes: availableClasses, className, style = {}, color, scale, base } = props;
    const classes = [availableClasses.root, className];
    let svgColor;
    const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1);
    const colorClassName = kebabToCamelCase(`${color}`);
    if (!availableClasses[`${colorClassName}`]) {
        svgColor = color;
    }
    else {
        classes.push(availableClasses[colorClassName]);
    }
    const svgStyle = Object.assign({ minWidth: `${scaledSize}px`, minHeight: `${scaledSize}px` }, style);
    return (React.createElement("svg", { viewBox: '0 0 16 16', className: cx(...classes), style: svgStyle, color: svgColor, ref: ref },
        React.createElement("path", { d: 'M5.639 9.408a5 5 0 1 1 4.723 0A7.003 7.003 0 0 1 15 16h-1a6 6 0 1 0-12 0H1a7.003 7.003 0 0 1 4.639-6.592zM8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' })));
});
SvgProfile16.displayName = 'SvgProfile16';
export default withStyles(styles)(SvgProfile16);
//# sourceMappingURL=Profile16.js.map