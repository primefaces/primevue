const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let xMargins = {
        'mx-auto': 'auto'
    };

    for (const i in scales) {
        xMargins['mx-' + i] = scales[i] + 'rem';
        xMargins['-mx-' + i] = '-' + scales[i] + 'rem';
    }

    styleClass(['margin-left', 'margin-right'], xMargins, root, opts, true);
};
