<template>
    <DocSectionText v-bind="$attrs">
        <p>Configures the global pass through import path.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue: {
    importPT: { as: 'MyCustomPreset', from: path.resolve(__dirname, './presets/mypreset.js')}
}
`
            },
            code2: {
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
