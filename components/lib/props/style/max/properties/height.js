/* const { styleClass } = require('../../../utils');
const { addFixedSize } = require('../../base/size');

module.exports = (root, opts) => {
    let maxHeights = {
        'max-h-auto': 'auto',
        'max-h-0': '0px',
        'max-h-full': '100%',
        'max-h-screen': '100vh',
        'min-h-min': 'min-content',
        'min-h-max': 'max-content',
        'min-h-fit': 'fit-content'
    };

    addFixedSize(maxHeights, 'max-h-', opts);

    styleClass('max-height', maxHeights, root, opts, true);
};
 */
