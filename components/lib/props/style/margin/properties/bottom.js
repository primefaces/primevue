/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let bottomMargins = {
        'mb-auto': 'auto'
    };

    for (const i in scales) {
        bottomMargins['mb-' + i] = `${scales[i]}rem`;
        bottomMargins['-mb-' + i] = `-${scales[i]}rem`;
    }

    styleClass('margin-bottom', bottomMargins, root, opts, true);
};
 */
