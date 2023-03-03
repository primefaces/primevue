//TODO:
<template>
    <DocSectionText v-bind="$attrs">
        <p>Dynamic dialogs require the <i>DialogService</i> to be configured globally.</p>
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
import DialogService from 'primevue/dialogservice';

const app = createApp(App);
app.use(DialogService);`
            }
        };
    }
};
</script>
