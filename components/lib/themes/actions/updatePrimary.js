import Theme from 'primevue/themes';

export default (primary) => {
    const { primitive, semantic, components, directives } = Theme.getPreset();
    const newPreset = {
        primitive,
        semantic: { ...semantic, primary },
        components,
        directives
    };

    Theme.setPreset(newPreset);

    return newPreset;
};
