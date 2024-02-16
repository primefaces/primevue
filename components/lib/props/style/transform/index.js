/* const { styleClass } = require('../../utils');
const origin = require('./properties/origin');

module.exports = (root, opts) => {
    const translate = {
        'translate-x-0': 'translateX(0%)',
        'translate-x-100': 'translateX(100%)',
        '-translate-x-100': 'translateX(-100%)',
        'translate-y-0': 'translateY(0%)',
        'translate-y-100': 'translateY(100%)',
        '-translate-y-100': 'translateY(-100%)'
    };

    const rotate = {
        'rotate-45': 'rotate(45deg)',
        '-rotate-45': 'rotate(-45deg)',
        'rotate-90': 'rotate(90deg)',
        '-rotate-90': 'rotate(-90deg)',
        'rotate-180': 'rotate(180deg)',
        '-rotate-180': 'rotate(-180deg)'
    };

    const scale = {
        'scale-0': 'scale(0)',
        'scale-50': 'scale(0.5)',
        'scale-75': 'scale(0.75)',
        'scale-90': 'scale(0.9)',
        'scale-95': 'scale(0.95)',
        'scale-100': 'scale(1)',
        'scale-105': 'scale(1.05)',
        'scale-110': 'scale(1.1)',
        'scale-125': 'scale(1.25)',
        'scale-150': 'scale(1.5)',
        'scale-x-0': 'scaleX(0)',
        'scale-x-50': 'scaleX(0.5)',
        'scale-x-75': 'scaleX(0.75)',
        'scale-x-90': 'scaleX(0.9)',
        'scale-x-95': 'scaleX(0.95)',
        'scale-x-100': 'scaleX(1)',
        'scale-x-105': 'scaleX(1.05)',
        'scale-x-110': 'scaleX(1.1)',
        'scale-x-125': 'scaleX(1.25)',
        'scale-x-150': 'scaleX(1.5)',
        'scale-y-0': 'scaleY(0)',
        'scale-y-50': 'scaleY(0.5)',
        'scale-y-75': 'scaleY(0.75)',
        'scale-y-90': 'scaleY(0.9)',
        'scale-y-95': 'scaleY(0.95)',
        'scale-y-100': 'scaleY(1)',
        'scale-y-105': 'scaleY(1.05)',
        'scale-y-110': 'scaleY(1.1)',
        'scale-y-125': 'scaleY(1.25)',
        'scale-y-150': 'scaleY(1.5)'
    };

    styleClass('transform', translate, root, opts, true, true);
    styleClass('transform', rotate, root, opts, true, true);
    styleClass('transform', scale, root, opts, true, true);

    // properties
    origin(root, opts);
};
 */
