import Theme, { SharedUtils } from 'primevue/themes';

const VARIABLE = Theme.defaults.variable;

export default (preset) => {
    const newPreset = SharedUtils.object.mergeKeysByRegex(Theme.getPreset(), preset, VARIABLE.excludedKeyRegex);

    Theme.setPreset(newPreset);

    return newPreset;
};
