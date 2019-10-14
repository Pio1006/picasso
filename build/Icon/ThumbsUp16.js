import React, { forwardRef } from 'react';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import kebabToCamelCase from '../utils/kebab-to-camel-case';
import styles from './styles';
const BASE_SIZE = 16;
const SvgThumbsUp16 = forwardRef(function SvgThumbsUp16(props, ref) {
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
        React.createElement("path", { d: 'M8.778.26L9.5.5a1.707 1.707 0 0 1 1.117 2.034l-.642 2.56 1.762-.319a3 3 0 0 1 3.488 3.488l-.628 3.453A4 4 0 0 1 10.662 15H9c-1.664 0-3.33-.333-5-1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.45L7.593.712A1 1 0 0 1 8.778.259zm-.316.948l-.01.015L5.02 7 5 6.999v6.307c1.341.464 2.673.695 4 .694h1.662a3 3 0 0 0 2.951-2.463l.628-3.452a2 2 0 0 0-2.326-2.326l-3.287.596.377-1.503.641-2.56a.707.707 0 0 0-.462-.843l-.722-.241zM4 13V6.999L2 7v6h2z' })));
});
SvgThumbsUp16.displayName = 'SvgThumbsUp16';
export default withStyles(styles)(SvgThumbsUp16);
//# sourceMappingURL=ThumbsUp16.js.map