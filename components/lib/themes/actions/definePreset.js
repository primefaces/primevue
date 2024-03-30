import Theme, { SharedUtils } from 'primevue/themes';

export default (preset1, preset2) => {
    const VARIABLE = Theme.defaults.variable;
    const newPreset = SharedUtils.object.mergeKeysByRegex(preset1, preset2, VARIABLE.excludedKeyRegex);

    Theme.setPreset(newPreset);

    return newPreset;
};
