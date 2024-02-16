/* const { styleClass } = require('../../utils');
const { getThemeColors, getWhiteAndBlackRgbaColors } = require('../base/color');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const fill = {
        'fill-none': 'none',
        'fill-inherit': 'inherit',
        'fill-current': 'currentColor',
        'fill-transparent': 'transparent',
        'fill-white': '#ffffff',
        'fill-black': '#000000'
    };

    const themes = getThemeColors(opts, 'fill-', p);
    const whiteAndBlackRgba = getWhiteAndBlackRgbaColors('fill-');

    styleClass('fill', fill, root, opts, true, true);
    styleClass('fill', themes, root, opts, true, true);
    styleClass('fill', whiteAndBlackRgba, root, opts, true, true);
};
 */
