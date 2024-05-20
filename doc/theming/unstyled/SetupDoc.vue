<template>
    <DocSectionText v-bind="$attrs">
        <p>Unstyled mode is enabled for the whole suite by setting <i>unstyled</i> as true during PrimeVue installation.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>Alternatively even in the default styled mode, a particular component can still be used as unstyled by adding the <i>unstyled</i> prop of the component.</p>
        <div class="card flex justify-center">
            <Button label="Check" icon="pi pi-check" unstyled />
        </div>
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
`
            },
            code2: {
                basic: `
<Button label="Check" icon="pi pi-check" unstyled></Button>
`
            }
        };
    }
};
</script>
