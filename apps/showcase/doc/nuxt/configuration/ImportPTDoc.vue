<template>
    <DocSectionText v-bind="$attrs">
        <p>Configures the global pass through import path.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <p><i>mycustompt.js</i> file defines the configuration and exports it.</p>
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
    importPT: { from: '@/passthrough/mycustompt.js' }
}
`
            },
            code2: {
                basic: `
const MyCustomPT = {
    ...
    button: {
        root: 'my-button',
       ...
    },
    ...
}

export default MyCustomPT;
`
            }
        };
    }
};
</script>
