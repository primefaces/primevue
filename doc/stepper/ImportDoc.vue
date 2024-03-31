<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
`
            }
        };
    }
};
</script>
