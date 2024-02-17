import { token } from '../..';

export default {
    borderRightRadius: token.prop('borderRightRadius')
};

/* const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const borderRadius = {
        'border-noround': '0',
        'border-round': `var(--${p}border-radius)`,
        'border-circle': '50%'
    };
    const edges = ['top', 'right', 'bottom', 'left'];
    const scales = {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
    };

    const scaledBorderRadius = {};

    for (let scale in scales) {
        scaledBorderRadius['border-round-' + scale] = scales[scale];
    }

    const borderRadiusEdges = {};

    edges.forEach((edge) => (borderRadiusEdges[edge] = {}));

    for (let borderRadiusKey in borderRadius) {
        edges.forEach((edge) => (borderRadiusEdges[edge][borderRadiusKey + '-' + edge] = borderRadius[borderRadiusKey]));
    }

    for (let scale in scales) {
        edges.forEach((edge) => (borderRadiusEdges[edge]['border-round-' + edge + '-' + scale] = scales[scale]));
    }

    styleClass('border-radius', borderRadius, root, opts, true);
    styleClass('border-radius', scaledBorderRadius, root, opts, true);
    styleClass(['border-top-left-radius', 'border-top-right-radius'], borderRadiusEdges.top, root, opts, true);
    styleClass(['border-top-right-radius', 'border-bottom-right-radius'], borderRadiusEdges.right, root, opts, true);
    styleClass(['border-bottom-left-radius', 'border-bottom-right-radius'], borderRadiusEdges.bottom, root, opts, true);
    styleClass(['border-top-left-radius', 'border-bottom-left-radius'], borderRadiusEdges.left, root, opts, true);
};
 */
