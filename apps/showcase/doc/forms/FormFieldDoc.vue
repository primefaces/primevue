<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>FormField</i> is a helper component that provides validation and tracking for form fields, offering a more flexible structure to bind PrimeVue, non-PrimeVue components or HTML elements to Form component. Additionally, with props
            like <i>validateOn*</i>, <i>initialValue</i>, <i>resolver</i>, and <i>name</i>, Form behaviors can be controlled directly from this component.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    <BuiltInDoc />
    <NonPrimeVueDoc />
    <ResolverDoc />
    <TemplateDoc />
</template>

<script>
import { markRaw } from 'vue';
import BuiltInDoc from './formfield/BuiltInDoc.vue';
import NonPrimeVueDoc from './formfield/NonPrimeVueDoc.vue';
import ResolverDoc from './formfield/ResolverDoc.vue';
import TemplateDoc from './formfield/TemplateDoc.vue';

export default {
    data() {
        return {
            code: {
                basic: `
import { FormField } from '@primevue/forms';
`
            }
        };
    },
    components: {
        BuiltInDoc: markRaw(BuiltInDoc),
        NonPrimeVueDoc: markRaw(NonPrimeVueDoc),
        ResolverDoc: markRaw(ResolverDoc),
        TemplateDoc: markRaw(TemplateDoc)
    }
};
</script>
