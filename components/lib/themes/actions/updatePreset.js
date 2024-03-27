import Theme, { SharedUtils } from 'primevue/themes';

export default (preset) => {
    const VARIABLE = Theme.defaults.variable;
    const newPreset = SharedUtils.object.mergeKeysByRegex(Theme.getPreset(), preset, VARIABLE.excludedKeyRegex);

    Theme.setPreset(newPreset);

    return newPreset;
};
