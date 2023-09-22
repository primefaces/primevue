<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmDialog is controlled via the <i>ConfirmationService</i> that needs to be installed as an application plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <div class="doc-section-description">
        <p><i>$confirm</i> is available as a property in the application instance for Options API. The service can be injected with the <i>useConfirm</i> function for Composition API.</p>
    </div>
    <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);`
            },
            code2: {
                basic: `
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();`
            }
        };
    }
};
</script>
