import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgBell16 = forwardRef(function SvgBell16(props, ref) {
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
        React.createElement("path", { d: 'M7 1.022V0h1v1.022A5.5 5.5 0 0 1 13 6.5v3.505c0 .72.276.995 1 .995v1H1v-1c.724 0 1-.275 1-.995V6.5a5.5 5.5 0 0 1 5-5.478zM5 13.5V13h1v.5a1.5 1.5 0 0 0 3 0V13h1v.5a2.5 2.5 0 1 1-5 0zm7-3.495V6.5a4.5 4.5 0 1 0-9 0v3.505c0 .383-.066.716-.192.995h9.384a2.397 2.397 0 0 1-.192-.995z' })));
});
SvgBell16.displayName = 'SvgBell16';
export default withStyles(styles)(SvgBell16);
//# sourceMappingURL=Bell16.js.map