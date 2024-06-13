import { SharedUtils } from '../utils/index.js';
import { dt } from './dt';

export const css = (style) => SharedUtils.object.getItemValue(style, { dt });
