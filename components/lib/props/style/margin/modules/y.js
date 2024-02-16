const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let yMargins = {
        'my-auto': 'auto'
    };

    for (const i in scales) {
        yMargins['my-' + i] = scales[i] + 'rem';
        yMargins['-my-' + i] = '-' + scales[i] + 'rem';
    }

    styleClass(['margin-top', 'margin-bottom'], yMargins, root, opts, true);
};
