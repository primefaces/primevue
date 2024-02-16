/* const { styleClass } = require('../../utils');
const { addFixedSize } = require('../base/size');

module.exports = (root, opts) => {
    let heights = {
        'h-full': '100%',
        'h-screen': '100vh',
        'h-auto': 'auto',
        'h-min': 'min-content',
        'h-max': 'max-content',
        'h-fit': 'fit-content'
    };

    addFixedSize(heights, 'h-', opts);

    styleClass('height', heights, root, opts, true);
};
 */
