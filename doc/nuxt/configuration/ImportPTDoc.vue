<template>
    <DocSectionText v-bind="$attrs">
        <p>Configures the global pass through import path.</p>

        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <p>The path may also be a location within your application.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
}
`
            },
            code2: {
                basic: `
primevue: {
    importPT: { as: 'MyCustomPreset', from: path.resolve(__dirname, './assets/presets/mypreset.js')}
}
`
            },
            code3: {
                basic: `
const MyPreset = {
    ...
    button: {
        root: 'my-button',
       ...
    },
    ...
}

export default MyPreset;
`
            }
        };
    }
};
</script>
