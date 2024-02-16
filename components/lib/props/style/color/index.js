/* const { styleClass } = require('../../utils');
const { getColors, getThemeColors, getWhiteAndBlackRgbaColors } = require('../base/color');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const colors = {
        'text-primary': `var(--${p}primary-color)`,
        'text-white': '#ffffff',
        'text-color': `var(--${p}text-color)`,
        'text-color-secondary': `var(--${p}text-color-secondary)`,
        'text-primary-invert': `var(--${p}primary-color-text)`
    };

    const themes = getThemeColors(opts, 'text-', p);
    const surfaces = getColors('surface', 'text-', `${p}-surface-`);
    const whiteAndBlackRgba = getWhiteAndBlackRgbaColors('text-');

    styleClass('color', colors, root, opts, true, true, true);
    styleClass('color', themes, root, opts, true, true, true);
    styleClass('color', surfaces, root, opts, true, true, true);
    styleClass('color', whiteAndBlackRgba, root, opts, true, true, true);
};
 */
