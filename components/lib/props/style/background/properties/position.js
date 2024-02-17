import { token } from '../..';

export default {
    backgroundPosition: token.prop('backgroundPosition'),
    bgPos: token.prop('backgroundPosition')
};

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const positions = {
        'bg-bottom': 'bottom',
        'bg-center': 'center',
        'bg-left': 'left',
        'bg-left-bottom': 'left bottom',
        'bg-left-top': 'left top',
        'bg-right': 'right',
        'bg-right-bottom': 'right bottom',
        'bg-right-top': 'right top',
        'bg-top': 'top'
    };

    styleClass('background-position', positions, root, opts, true);
};
 */
