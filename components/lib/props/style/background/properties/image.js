import { token } from '../..';

export default {
    backgroundImage: token.prop('backgroundImage'),
    bgImg: token.prop('backgroundImage')
};

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const images = {
        'bg-none': 'none'
    };

    const gradientDirections = {
        'bg-gradient-to-t': 'to top',
        'bg-gradient-to-tr': 'to top right',
        'bg-gradient-to-r': 'to right',
        'bg-gradient-to-br': 'to bottom right',
        'bg-gradient-to-b': 'to bottom',
        'bg-gradient-to-bl': 'to bottom left',
        'bg-gradient-to-l': 'to left',
        'bg-gradient-to-tl': 'to top left'
    };

    const radialGradientDirections = {
        'bg-radial-gradient-to-t': 'at top',
        'bg-radial-gradient-to-tr': 'at top right',
        'bg-radial-gradient-to-r': 'at right',
        'bg-radial-gradient-to-br': 'at bottom right',
        'bg-radial-gradient-to-b': 'at bottom',
        'bg-radial-gradient-to-bl': 'at bottom left',
        'bg-radial-gradient-to-l': 'at left',
        'bg-radial-gradient-to-tl': 'at top left'
    };

    const gradients = {};

    for (let direction in gradientDirections) {
        gradients[
            direction
        ] = `linear-gradient(${gradientDirections[direction]}, var(--gradient-from) var(--gradient-from-percentage, 0%),var(--gradient-via, var(--gradient-from)) var(--gradient-via-percentage, 50%), var(--gradient-to, var(--gradient-from),transparent) var(--gradient-to-percentage, 100%))`;
    }

    for (let direction in radialGradientDirections) {
        gradients[
            direction
        ] = `radial-gradient(${radialGradientDirections[direction]}, var(--gradient-from) var(--gradient-from-percentage, 0%), var(--gradient-to,var(--gradient-via, var(--gradient-from)) var(--gradient-via-percentage, 50%), var(--gradient-from),transparent) var(--gradient-to-percentage, 100%))`;
    }

    styleClass('background-image', gradients, root, opts, true, true);
    styleClass('background-image', images, root, opts, true, true);
};
 */
