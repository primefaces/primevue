<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.</p>
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
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import App from './App.vue'
const app = createApp(App);

app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
`
            }
        };
    }
};
</script>
