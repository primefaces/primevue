/* const { styleClass } = require('../../utils');
const { getThemeColors, getWhiteAndBlackRgbaColors } = require('../base/color');
const width = require('./properties/width');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const stroke = {
        'stroke-none': 'none',
        'stroke-inherit': 'inherit',
        'stroke-current': 'currentColor',
        'stroke-transparent': 'transparent',
        'stroke-white': '#ffffff',
        'stroke-black': '#000000'
    };

    const themes = getThemeColors(opts, 'stroke-', p);
    const whiteAndBlackRgba = getWhiteAndBlackRgbaColors('stroke-');

    styleClass('stroke', stroke, root, opts, true, true);
    styleClass('stroke', themes, root, opts, true, true);
    styleClass('stroke', whiteAndBlackRgba, root, opts, true, true);

    // properties
    width(root, opts);
};
 */
