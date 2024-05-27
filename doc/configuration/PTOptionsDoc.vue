<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Used to configure the <i>ptOptions</i> properties of components and the <i>usePassThrough</i> method. The <i>mergeSections</i> defines whether the sections from the main configuration gets added and the <i>mergeProps</i> controls whether
            to override or merge the defined props. Defaults are <i>true</i> for <i>mergeSections</i> and <i>false</i> for <i>mergeProps</i>.
        </p>
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
const app = createApp(App);

app.use(PrimeVue, {
    ptOptions: {
        mergeSections: true,
        mergeProps: false
    }
});
`
            }
        };
    }
};
</script>
