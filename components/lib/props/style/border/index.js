import { token } from '..';
import bottomColor from './properties/bottomColor';
import bottomStyle from './properties/bottomStyle';
import bottomWidth from './properties/bottomWidth';
import color from './properties/color';
import leftColor from './properties/leftColor';
import leftStyle from './properties/leftStyle';
import leftWidth from './properties/leftWidth';
import rightColor from './properties/rightColor';
import rightStyle from './properties/rightStyle';
import rightWidth from './properties/rightWidth';
import style from './properties/style';
import topColor from './properties/topColor';
import topStyle from './properties/topStyle';
import topWidth from './properties/topWidth';
import width from './properties/width';

export default {
    border: token.prop('border'),
    // properties
    ...width,
    ...style,
    ...color,
    ...topWidth,
    ...topStyle,
    ...topColor,
    ...rightWidth,
    ...rightStyle,
    ...rightColor,
    ...bottomWidth,
    ...bottomStyle,
    ...bottomColor,
    ...leftWidth,
    ...leftStyle,
    ...leftColor
};

/* const color = require('./properties/color');
const radius = require('./properties/radius');
const style = require('./properties/style');
const rules = require('./rules');

module.exports = (root, opts) => {
    // properties
    color(root, opts);
    style(root, opts);
    radius(root, opts);

    // rules
    rules(root, opts);
};
 */
