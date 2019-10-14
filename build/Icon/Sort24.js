import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgSort24 = forwardRef(function SvgSort24(props, ref) {
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
    return (React.createElement("svg", { viewBox: '0 0 24 24', className: cx(...classes), style: svgStyle, color: svgColor, ref: ref },
        React.createElement("path", { d: 'M7 7v13.292l4.5-4.5.707.708L6.5 22.207l-.707-.707-5-5 .707-.707 4.5 4.5V7h1zm10.5-5.207L23.207 7.5l-.707.707-4.5-4.5V17h-1V3.707l-4.5 4.5-.707-.707 5-5 .707-.707z' })));
});
SvgSort24.displayName = 'SvgSort24';
export default withStyles(styles)(SvgSort24);
//# sourceMappingURL=Sort24.js.map