import { token } from '../..';

export default {
    alignSelf: token.prop('alignSelf')
};

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const alignSelf = {
        'align-self-auto': 'auto',
        'align-self-start': 'flex-start',
        'align-self-end': 'flex-end',
        'align-self-center': 'center',
        'align-self-stretch': 'stretch',
        'align-self-baseline': 'baseline'
    };

    styleClass('align-self', alignSelf, root, opts, true);
};
 */
