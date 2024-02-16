/* const { styleClass } = require('../../../utils');
const { addFixedSize } = require('../../base/size');

module.exports = (root, opts) => {
    let maxWidths = {
        'max-w-auto': 'auto',
        'max-w-0': '0px',
        'max-w-full': '100%',
        'max-w-screen': '100vw',
        'max-w-min': 'min-content',
        'max-w-max': 'max-content',
        'max-w-fit': 'fit-content'
    };

    addFixedSize(maxWidths, 'max-w-', opts);

    styleClass('max-width', maxWidths, root, opts, true);
};
 */
