<template>
    <DocSectionText v-bind="$attrs">
        <p>Toast messages are dynamically created using a <i>ToastService</i> that needs to be installed globally before the application instance is created.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import {createApp} from 'vue';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService);`
            }
        };
    }
};
</script>
