<template>
    <DocSectionText v-bind="$attrs">
        <p>Toast component is controlled via the <i>ToastService</i> that needs to be installed as an application plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <div class="doc-section-description">
        <p><i>$toast</i> is available as a property in the application instance for Options API. The service can be injected with the <i>useToast</i> function for Composition API.</p>
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
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService);`
            },
            code2: {
                basic: `
import { useToast } from 'primevue/usetoast';

const toast = useToast();`
            }
        };
    }
};
</script>
