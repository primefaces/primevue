import shade from './shade';
import tint from './tint';

const scales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export default (color) => {
    if (/{([^}]*)}/g.test(color)) {
        const token = color.replace(/{|}/g, '');

        return scales.reduce((acc, scale) => ((acc[scale] = `{${token}.${scale}}`), acc), {});
    }

    return typeof color === 'string' ? scales.reduce((acc, scale, i) => ((acc[scale] = i <= 5 ? tint(color, (5 - i) * 19) : shade(color, (i - 5) * 15)), acc), {}) : color;
};
