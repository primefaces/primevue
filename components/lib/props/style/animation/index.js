import { token } from '..';
import delay from './properties/delay';
import duration from './properties/duration';
import fillMode from './properties/fillMode';
import iterationCount from './properties/iterationCount';
import timingFunction from './properties/timingFunction';

export default {
    animation: token.prop('animation'),
    ...delay,
    ...duration,
    ...fillMode,
    ...iterationCount,
    ...timingFunction
};

/* const delay = require('./properties/delay');
const duration = require('./properties/duration');
const fill_mode = require('./properties/fill_mode');
const iteration_count = require('./properties/iteration_count');
const timing_function = require('./properties/timing_function');
const animate = require('./modules/animate');
const fade = require('./modules/fade');
const flip = require('./modules/flip');
const scale = require('./modules/scale');
const slide = require('./modules/slide');
const zoom = require('./modules/zoom');

module.exports = (root, opts) => {
    // properties
    delay(root, opts);
    duration(root, opts);
    fill_mode(root, opts);
    iteration_count(root, opts);
    timing_function(root, opts);

    // modules
    animate(root, opts);
    fade(root, opts);
    flip(root, opts);
    scale(root, opts);
    slide(root, opts);
    zoom(root, opts);
};
 */
