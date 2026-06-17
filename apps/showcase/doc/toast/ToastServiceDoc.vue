<template>
    <DocSectionText v-bind="$attrs">
        <p>Toast component is controlled via the <i>ToastService</i> that needs to be installed as an application plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    <div class="doc-section-description">
        <p>The service is available with the <i>useToast</i> function for Composition API or using the <i>$toast</i> property of the application for Options API.</p>
    </div>
    <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />

    <DocSectionText>
        <p>You can provide default options when installing the service, or set defaults at runtime (including basing defaults off an existing message object). Defaults are shallow-merged with each message; message fields override defaults.</p>
    </DocSectionText>
    <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
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
app.use(ToastService);
`
            },
            code2: {
                basic: `
import { useToast } from 'primevue/usetoast';

const toast = useToast();
`
            },
            code3: {
                basic: `
import {createApp} from 'vue';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService, {
    life: 5000,
    severity: 'error'
});
`
            }
        };
    }
};
</script>
