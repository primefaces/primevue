import { token } from '../..';

export default {
    alignItems: token.prop('alignItems')
};

/*const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const alignItems = {
        'align-items-stretch': 'stretch',
        'align-items-start': 'flex-start',
        'align-items-center': 'center',
        'align-items-end': 'flex-end',
        'align-items-baseline': 'baseline'
    };

    styleClass('align-items', alignItems, root, opts, true);
};*/
