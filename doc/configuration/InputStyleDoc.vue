<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Input fields come in two styles, default is <i>outlined</i> with borders around the field whereas <i>filled</i> alternative adds a background color to the field. Applying <i>p-variant-filled</i> to an ancestor of an input enables the
            filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element,
            components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputVariant to
            <i>filled</i> at PrimeVue configuration as well.
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
import {createApp} from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { inputVariant: "filled" });
`
            }
        };
    }
};
</script>
