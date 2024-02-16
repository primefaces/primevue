/* const { styleClass } = require('../../../utils');
const { addFixedSize } = require('../../base/size');

module.exports = (root, opts) => {
    let minHeights = {
        'min-h-auto': 'auto',
        'min-h-0': '0px',
        'min-h-full': '100%',
        'min-h-screen': '100vh',
        'min-h-min': 'min-content',
        'min-h-max': 'max-content',
        'min-h-fit': 'fit-content'
    };

    addFixedSize(minHeights, 'min-h-', opts);

    styleClass('min-height', minHeights, root, opts, true);
};
 */
