import { createRules, token } from '../..';

export default createRules({
    paddingLeft: token.spacing('paddingLeft'),
    pl: token.spacing('paddingLeft')
});

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const scales = opts.spacing;
    let leftPaddings = {};

    for (const i in scales) {
        leftPaddings['pl-' + i] = `${scales[i]}rem`;
    }

    styleClass('padding-left', leftPaddings, root, opts, true);
};
 */
