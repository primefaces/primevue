<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>FormField</i> is a helper component that provides validation and tracking for input elements, offering a more flexible structure to bind PrimeVue, non-PrimeVue components or native HTML elements to Form API. Additionally, with
            props like <i>validateOn*</i>, <i>initialValue</i>, <i>resolver</i>, and <i>name</i>, behaviors can be controlled directly from this component.
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
import { FormField } from '@primevue/forms';
`
            }
        };
    }
};
</script>
