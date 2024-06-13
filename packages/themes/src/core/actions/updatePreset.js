import Theme from '../config/index.js';
import { SharedUtils } from '../utils/index.js';

export default (...presets) => {
    const newPreset = SharedUtils.object.mergeKeys(Theme.getPreset(), ...presets);

    Theme.setPreset(newPreset);

    return newPreset;
};
