/* const { styleClass } = require('../../utils');
const { addFixedSize } = require('../base/size');

module.exports = (root, opts) => {
    let widths = {
        'w-full': '100%',
        'w-screen': '100vw',
        'w-auto': 'auto',
        'w-min': 'min-content',
        'w-max': 'max-content',
        'w-fit': 'fit-content',
        'w-1': '8.3333%',
        'w-2': '16.6667%',
        'w-3': '25%',
        'w-4': '33.3333%',
        'w-5': '41.6667%',
        'w-6': '50%',
        'w-7': '58.3333%',
        'w-8': '66.6667%',
        'w-9': '75%',
        'w-10': '83.3333%',
        'w-11': '91.6667%',
        'w-12': '100%'
    };

    addFixedSize(widths, 'w-', opts);

    styleClass('width', widths, root, opts, true);
};
 */
