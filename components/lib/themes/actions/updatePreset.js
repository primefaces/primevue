import Theme, { SharedUtils } from 'primevue/themes';

export default (preset) => {
    const newPreset = SharedUtils.object.mergeKeys(Theme.getPreset(), preset);

    Theme.setPreset(newPreset);

    return newPreset;
};
