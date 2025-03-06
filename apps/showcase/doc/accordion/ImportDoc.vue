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
import Accordion from 'primevue-vaultic/accordion';
import AccordionPanel from 'primevue-vaultic/accordionpanel';
import AccordionHeader from 'primevue-vaultic/accordionheader';
import AccordionContent from 'primevue-vaultic/accordioncontent';
`
            }
        };
    }
};
</script>
