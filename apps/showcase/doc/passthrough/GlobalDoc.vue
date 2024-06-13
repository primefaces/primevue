<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Defines the shared pass through properties per component type. For example, with the configuration below all panel headers have the <i>bg-primary</i> style class and the all autocomplete components have a fixed width. These settings can
            be overriden by a particular component as components <i>pt</i> property has higher precedence over global <i>pt</i>.
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
        panel: {
            header: {
                class: 'bg-primary text-primary-contrast'
            }
        },
        autocomplete: {
            input: {
                root: 'w-64' // OR { class: 'w-64' }
            }
        }
    }
});
`
            }
        };
    }
};
</script>
