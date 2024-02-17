import { token } from '..';
import color from './properties/color';
import image from './properties/image';
import position from './properties/position';
import repeat from './properties/repeat';
import size from './properties/size';

export default {
    background: token.prop('background'),
    bg: token.prop('background'),

    // properties
    ...color,
    ...image,
    ...position,
    ...repeat,
    ...size
};

/* const color = require('./properties/color');
const image = require('./properties/image');
const position = require('./properties/position');
const repeat = require('./properties/repeat');
const size = require('./properties/size');
const rules = require('./rules');

module.exports = (root, opts) => {
    // properties
    color(root, opts);
    image(root, opts);
    position(root, opts);
    repeat(root, opts);
    size(root, opts);

    // rules
    rules(root, opts);
};
 */
