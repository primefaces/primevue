<template>
    <DocSectionText v-bind="$attrs">
        <p>The form component is responsible for managing the form state and must encapsulate the form fields.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { Form } from '@primevue/forms';
`
            }
        };
    }
};
</script>
