function normalizeColor(color) {
    if (color.length === 4) {
        color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }

    return color;
}

function hexToRgb(hex) {
    var bigint = parseInt(hex.substring(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export default (color1, color2, weight) => {
    color1 = normalizeColor(color1);
    color2 = normalizeColor(color2);

    var p = weight / 100;
    var w = p * 2 - 1;
    var w1 = (w + 1) / 2.0;
    var w2 = 1 - w1;

    var rgb1 = hexToRgb(color1);
    var rgb2 = hexToRgb(color2);

    var r = Math.round(rgb1.r * w1 + rgb2.r * w2);
    var g = Math.round(rgb1.g * w1 + rgb2.g * w2);
    var b = Math.round(rgb1.b * w1 + rgb2.b * w2);

    return rgbToHex(r, g, b);
};
