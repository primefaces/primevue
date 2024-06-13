import { SharedUtils } from '../utils/index.js';

export default (...presets) => SharedUtils.object.mergeKeys(...presets);
