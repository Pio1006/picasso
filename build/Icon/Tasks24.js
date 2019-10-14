import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 24;
const SvgTasks24 = forwardRef(function SvgTasks24(props, ref) {
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
        React.createElement("path", { d: 'M5.5 5.793l5-5 .707.707-5 5-.707.707L2.793 4.5l.707-.707 2 2zM5 1v1H1v7h7V7h1v3H0V1h5zM0 13h9v9H0v-9zm1 1v7h7v-7H1zm11-9h12v1H12V5zm0 12h12v1H12v-1z' })));
});
SvgTasks24.displayName = 'SvgTasks24';
export default withStyles(styles)(SvgTasks24);
//# sourceMappingURL=Tasks24.js.map