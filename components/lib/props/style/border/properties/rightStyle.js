import { token } from '../..';

export default {
    borderRightStyle: token.prop('borderRightStyle')
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
