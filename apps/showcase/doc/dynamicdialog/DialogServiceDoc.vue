<template>
    <DocSectionText v-bind="$attrs">
        <p>A single shared dialog instance is required in the application, ideal location would be defining it once at the main application template.</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
        <p>A dynamic dialog is controlled via the <i>DialogService</i> that needs to be installed as an application plugin.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <p>The service is available with the <i>useDialog</i> function for Composition API or using the <i>$dialog</i> property of the application for Options API.</p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<DynamicDialog />
`
            },
            code2: {
                basic: `
import {createApp} from 'vue';
import DialogService from 'primevue/dialogservice';

const app = createApp(App);
app.use(DialogService);
`
            },
            code3: {
                basic: `
/* Composition API */
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();

/* Options API */
const dialog = this.$dialog;
`
            }
        };
    }
};
</script>
