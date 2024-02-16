/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let topMargins = {
        'mt-auto': 'auto'
    };

    for (const i in scales) {
        topMargins['mt-' + i] = `${scales[i]}rem`;
        topMargins['-mt-' + i] = `-${scales[i]}rem`;
    }

    styleClass('margin-top', topMargins, root, opts, true);
};
 */
