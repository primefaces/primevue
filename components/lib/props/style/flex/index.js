/* const { styleClass } = require('../../utils');
const direction = require('./properties/direction');
const grow = require('./properties/grow');
const shrink = require('./properties/shrink');
const wrap = require('./properties/wrap');

module.exports = (root, opts) => {
    const flex = {
        'flex-1': '1 1 0%',
        'flex-auto': '1 1 auto',
        'flex-initial': '0 1 auto',
        'flex-none': 'none'
    };

    styleClass('flex', flex, root, opts, true);

    // properties
    direction(root, opts);
    grow(root, opts);
    shrink(root, opts);
    wrap(root, opts);
};
 */
