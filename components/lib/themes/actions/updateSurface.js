import Theme from 'primevue/themes';

export default (surface) => {
    const { primitive, semantic, components, directives } = Theme.getPreset();
    const hasLightDark = surface?.hasOwnProperty('light') || surface?.hasOwnProperty('dark');
    const newColorScheme = {
        colorScheme: {
            light: { ...semantic?.colorScheme?.light, ...{ surface: hasLightDark ? surface?.light : surface } },
            dark: { ...semantic?.colorScheme?.dark, ...{ surface: hasLightDark ? surface?.dark : surface } }
        }
    };
    const newPreset = {
        primitive,
        semantic: { ...semantic, ...newColorScheme },
        components,
        directives
    };

    Theme.setPreset(newPreset);

    return newPreset;
};
