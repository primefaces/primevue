//TODO:
<template>
    <DocSectionText v-bind="$attrs">
        <p>ConfirmDialog is controlled via the <i>ConfirmationService</i> that needs to be installed globally before the application instance is created.</p>
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
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);`
            }
        };
    }
};
</script>
