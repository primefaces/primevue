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
import Stepper from 'primevue-vaultic/stepper';
import StepList from 'primevue-vaultic/steplist';
import StepPanels from 'primevue-vaultic/steppanels';
import StepItem from 'primevue-vaultic/stepitem';
import Step from 'primevue-vaultic/step';
import StepPanel from 'primevue-vaultic/steppanel';
`
            }
        };
    }
};
</script>
