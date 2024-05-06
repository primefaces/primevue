import Theme, { SharedUtils } from 'primevue/themes';

export default (...presets) => {
    const newPreset = SharedUtils.object.mergeKeys(Theme.getPreset(), ...presets);

    Theme.setPreset(newPreset);

    return newPreset;
};
