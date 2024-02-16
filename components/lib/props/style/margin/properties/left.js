/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let leftMargins = {
        'ml-auto': 'auto'
    };

    for (const i in scales) {
        leftMargins['ml-' + i] = `${scales[i]}rem`;
        leftMargins['-ml-' + i] = `-${scales[i]}rem`;
    }

    styleClass('margin-left', leftMargins, root, opts, true);
};
 */
