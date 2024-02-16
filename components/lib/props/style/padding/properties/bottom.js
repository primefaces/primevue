import { createRules, token } from '../..';

export default createRules({
    paddingBottom: token.spacing('paddingBottom'),
    pb: token.spacing('paddingBottom')
});

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let bottomPaddings = {};

    for (const i in scales) {
        bottomPaddings['pb-' + i] = `${scales[i]}rem`;
    }

    styleClass('padding-bottom', bottomPaddings, root, opts, true);
};
 */
