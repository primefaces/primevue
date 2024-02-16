/* const { styleClass } = require('../../../utils');
const { getThemeColors, getWhiteAndBlackRgbaColors } = require('../../base/color');

module.exports = (root, opts) => {
    const p = opts.prefix.cssVariable;
    const outlineColor = {
        'outline-transparent': 'transparent',
        'outline-white': '#ffffff',
        'outline-black': '#000000'
    };

    const themes = getThemeColors(opts, 'outline-', p);
    const whiteAndBlackRgba = getWhiteAndBlackRgbaColors('outline-');

    styleClass('outline-color', outlineColor, root, opts, true, true);
    styleClass('outline-color', themes, root, opts, true, true);
    styleClass('outline-color', whiteAndBlackRgba, root, opts, true, true);
};
 */
