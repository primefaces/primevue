import { token } from '..';

export default {
    all: token.prop('all')
};

/* const { styleClass } = require('../../utils');

module.exports = (root, opts) => {
    const all = {
        'all-initial': 'initial',
        'all-inherit': 'inherit',
        'all-unset': 'unset'
    };

    styleClass('all', all, root, opts, true);
};
 */
