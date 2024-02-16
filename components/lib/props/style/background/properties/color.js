/* const { styleClass } = require('../../../utils');
const { getColors, getThemeColors, getWhiteAndBlackRgbaColors } = require('../../base/color');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const colors = {
        'bg-white': '#ffffff',
        'bg-transparent': 'transparent',
        'bg-primary': `var(--${p}primary-color)`,
        'bg-primary-reverse': `var(--${p}primary-color-text)`,
        'surface-ground': `var(--${p}surface-ground)`,
        'surface-section': `var(--${p}surface-section)`,
        'surface-card': `var(--${p}surface-card)`,
        'surface-overlay': `var(--${p}surface-overlay)`,
        'surface-hover': `var(--${p}surface-hover)`
    };

    const themes = getThemeColors(opts, 'bg-', p);
    const surfaces = getColors('surface', 'surface-', `${p}-surface-`);
    const whiteAndBlackRgba = getWhiteAndBlackRgbaColors('bg-');

    styleClass('background-color', colors, root, opts, true, true, true);
    styleClass('background-color', themes, root, opts, true, true, true);
    styleClass('background-color', surfaces, root, opts, true, true, true);
    styleClass('background-color', whiteAndBlackRgba, root, opts, true, true, true);
};
 */
