import { token } from '../..';

export default {
    borderBottomColor: token.prop('borderBottomColor')
};

/* const { styleClass } = require('../../../utils');
const { getColors, getThemeColors, getWhiteAndBlackRgbaColors } = require('../../base/color');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const colors = {
        'border-primary': `var(--${p}primary-color)`,
        'border-white': '#ffffff',
        'surface-border': `var(--${p}surface-border)`
    };

    const themes = getThemeColors(opts, 'border-', p);
    const surfaces = getColors('surface', 'border-', `${p}-surface-`);
    const whiteAndBlackRgba = getWhiteAndBlackRgbaColors('border-');

    styleClass('border-color', colors, root, opts, true, true, true);
    styleClass('border-color', themes, root, opts, true, true, true);
    styleClass('border-color', surfaces, root, opts, true, true, true);
    styleClass('border-color', whiteAndBlackRgba, root, opts, true, true, true);
};
 */
