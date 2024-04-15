import Theme, { SharedUtils } from 'primevue/themes';

export default (preset1, preset2) => {
    const newPreset = SharedUtils.object.mergeKeys(preset1, preset2);

    Theme.setPreset(newPreset);

    return newPreset;
};
