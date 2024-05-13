import { Theme } from 'primevue/themes';

export default (...presets) => {
    const newPreset = SharedUtils.object.mergeKeys(...presets);

    Theme.setPreset(newPreset);

    return newPreset;
};
