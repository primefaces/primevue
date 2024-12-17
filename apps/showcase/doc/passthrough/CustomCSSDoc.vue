<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>global</i> property has a <i>css</i> option to define custom css that belongs to a global <i>pt</i> configuration. Common use case of this feature is defining global styles and animations related to the pass through configuration.
        </p>
    </DocSectionText>

    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, {
    pt: {
        global: {
            css: \`
                .my-button {
                    border-width: 2px;
                }
            \`
        },
        button: {
            root: 'my-button'
        }
    }
});
`
            }
        };
    }
};
</script>
