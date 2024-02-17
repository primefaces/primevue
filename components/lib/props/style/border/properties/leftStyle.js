import { token } from '../..';

export default {
    borderLeftStyle: token.prop('borderLeftStyle')
};

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const borderStyles = {
        'border-solid': 'solid',
        'border-dashed': 'dashed',
        'border-dotted': 'dotted',
        'border-double': 'double'
    };

    styleClass('border-style', borderStyles, root, opts, true);
};
 */
