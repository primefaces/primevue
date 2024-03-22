import Theme from 'primevue/themes';

export default (preset1, preset2) => {
    const [{ primitive: p1, semantic: s1, components: c1, directives: d1 }, { primitive: p2, semantic: s2, components: c2, directives: d2 }] = [preset1, preset2];
    const newPreset = {
        primitive: { ...p1, ...p2 },
        semantic: { ...s1, ...s2 },
        components: { ...c1, ...c2 },
        directives: { ...d1, ...d2 }
    };

    Theme.setPreset(newPreset);

    return newPreset;
};
