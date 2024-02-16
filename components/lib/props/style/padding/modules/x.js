import { createRules, token } from '../..';

export default createRules({
    paddingX: token.spacing(['paddingLeft', 'paddingRight']),
    px: token.spacing(['paddingLeft', 'paddingRight'])
});

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let xPaddings = {};

    for (const i in scales) {
        xPaddings['px-' + i] = scales[i] + 'rem';
    }

    styleClass(['padding-left', 'padding-right'], xPaddings, root, opts, true);
};
 */
