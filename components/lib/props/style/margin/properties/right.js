/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let rightMargins = {
        'mr-auto': 'auto'
    };

    for (const i in scales) {
        rightMargins['mr-' + i] = `${scales[i]}rem`;
        rightMargins['-mr-' + i] = `-${scales[i]}rem`;
    }

    styleClass('margin-right', rightMargins, root, opts, true);
};
 */
