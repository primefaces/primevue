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
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
`
            }
        };
    }
};
</script>
