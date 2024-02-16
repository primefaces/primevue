/* const { getWhiteAndBlackRgbaColors, getThemeColors } = require('../base/color');
const { appendRules } = require('../../utils');

module.exports = (root, opts) => {
    appendGradients(root, opts);
};

function appendGradients(root, opts) {
    const p = opts.prefix.cssVariable;

    function appendColors(type) {
        const gradients = {
            [`${type}-from-to`]: `--gradient-from: var(--${type}-from-color); --gradient-to: var(--${type}-to-color, var(--${type}-from-color), transparent);`
        };
        const themes = getThemeColors(opts, `${type}-`, p, `--gradient-${type}`);
        const whiteAndBlackRgba = getWhiteAndBlackRgbaColors(`${type}-`, `--gradient-${type}`);

        appendRules(root, opts, gradients);
        appendRules(root, opts, themes);
        appendRules(root, opts, whiteAndBlackRgba);
    }

    appendColors('from');
    appendColors('via');
    appendColors('to');

    const percentages = {};

    for (let i = 0; i <= 100; i += 10) {
        percentages[`from-${i}\\%`] = `--gradient-from-percentage: ${i}%;`;
        percentages[`via-${i}\\%`] = `--gradient-via-percentage: ${i}%;`;
        percentages[`to-${i}\\%`] = `--gradient-to-percentage: ${i}%;`;
    }

    appendRules(root, opts, percentages);
}
 */
