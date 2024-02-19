import shade from './shade';
import tint from './tint';

export default (color) =>
    typeof color === 'string'
        ? Array.from({ length: 10 }).reduce((acc, _, i) => {
              i <= 5 ? (acc[i === 0 ? '50' : `${i * 100}`] = tint(color, (5 - i) * 19)) : (acc[`${i * 100}`] = shade(color, (i - 5) * 15));

              return acc;
          }, {})
        : color;
