<template>
    <DocSectionText v-bind="$attrs">
        <p>Dynamic dialogs are controlled via the <i>DialogService</i> that needs to be installed as an application plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <div class="doc-section-description">
        <p><i>$dialog</i> is available as a property in the application instance for Options API. The service can be injected with the <i>useDialog</i> function for Composition API.</p>
    </div>
    <DocSectionCode :code="code2" importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import {createApp} from 'vue';
import DialogService from 'primevue/dialogservice';

const app = createApp(App);
app.use(DialogService);`
            },
            code2: {
                basic: `
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();`,
                options: `const dialogRef = this.$dialog;`,
                composition: `
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();`
            }
        };
    }
};
</script>
