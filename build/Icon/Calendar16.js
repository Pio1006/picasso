import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgCalendar16 = forwardRef(function SvgCalendar16(props, ref) {
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
        React.createElement("path", { d: 'M3 2V1h1v1h8V1h1v1h3v13H0V2h3zm0 1H1v2h14V3h-2v1h-1V3H4v1H3V3zm12 3H1v8h14V6z' })));
});
SvgCalendar16.displayName = 'SvgCalendar16';
export default withStyles(styles)(SvgCalendar16);
//# sourceMappingURL=Calendar16.js.map