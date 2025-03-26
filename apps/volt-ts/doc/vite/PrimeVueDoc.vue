<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm registry</a>.</p>
        <DocSectionCode :code="code1" />
        <p>Configure PrimeVue to enable the unstyled mode that disables the default design token based theming globally.</p>
        <DocSectionCode :code="code2" lang="script" />
    </DocSectionText>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code1 = ref(`
# Using npm
npm install primevue

# Using yarn
yarn add primevue

# Using pnpm
pnpm add primevue
`);

const code2 = ref(`import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true
});
`);
</script>
