<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank" rel="noopener noreferrer">unplugin-vue-components</a> library can automatically import and register PrimeVue components with the help of
            <i>@primevue/auto-import-resolver</i>. Begin with installing the packages as dev dependencies.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>Next step would be adding the <i>PrimeVueResolver</i> at vite.config using the <i>Components</i> plugin.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <p>
            That's it, now the initialization code can be refactored as the following. For configuration like namespacing, visit the
            <a href="https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#configuration" target="_blank" rel="noopener noreferrer">official documentation</a>.
        </p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
npm i unplugin-vue-components -D
npm i @primevue/auto-import-resolver -D
`
            },
            code2: {
                basic: `
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })]
})
`
            },
            code3: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from './App.vue'
const app = createApp(App);

app.use(PrimeVue);
`
            }
        };
    }
};
</script>
