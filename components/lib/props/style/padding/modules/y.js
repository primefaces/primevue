import { createRules, token } from '../..';

export default createRules({
    paddingX: token.spacing(['paddingTop', 'paddingBottom']),
    px: token.spacing(['paddingTop', 'paddingBottom'])
});

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let yPaddings = {};

    for (const i in scales) {
        yPaddings['py-' + i] = scales[i] + 'rem';
    }

    styleClass(['padding-top', 'padding-bottom'], yPaddings, root, opts, true);
};
 */
