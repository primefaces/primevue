import { token } from '../..';

export default {
    backgroundRepeat: token.prop('backgroundRepeat'),
    bgRepeat: token.prop('backgroundRepeat')
};

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const repeats = {
        'bg-repeat': 'repeat',
        'bg-no-repeat': 'no-repeat',
        'bg-repeat-x': 'repeat-x',
        'bg-repeat-y': 'repeat-y',
        'bg-repeat-round': 'round',
        'bg-repeat-space': 'space'
    };

    styleClass('background-repeat', repeats, root, opts, true);
};
 */
