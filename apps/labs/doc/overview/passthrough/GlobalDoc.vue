<template>
    <DocSectionText v-bind="$attrs">
        <p>PassThrough configuration for each component type can be defined globally with the <i>pt</i> option of PrimeVue.</p>
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
        inputtext: {
            root: 'bg-surface-50 text-surface-900 ...'
        }
        panel: {
            //...
            header: {
                class: 'bg-primary-400'
            }
        },
        autocomplete: {
            //...
            input: {
                root: 'w-16rem' // OR { class: 'w-16rem' }
            }
        },
        //...
    }
});
`
            }
        };
    }
};
</script>
