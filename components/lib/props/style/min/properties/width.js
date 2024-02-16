/* const { styleClass } = require('../../../utils');
const { addFixedSize } = require('../../base/size');

module.exports = (root, opts) => {
    let minWidths = {
        'min-w-auto': 'auto',
        'min-w-0': '0px',
        'min-w-full': '100%',
        'min-w-screen': '100vw',
        'min-w-min': 'min-content',
        'min-w-max': 'max-content',
        'min-w-fit': 'fit-content'
    };

    addFixedSize(minWidths, 'min-w-', opts);

    styleClass('min-width', minWidths, root, opts, true);
};
 */
