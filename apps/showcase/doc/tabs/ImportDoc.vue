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
import Tabs from 'primevue-vaultic/tabs';
import TabList from 'primevue-vaultic/tablist';
import Tab from 'primevue-vaultic/tab';
import TabPanels from 'primevue-vaultic/tabpanels';
import TabPanel from 'primevue-vaultic/tabpanel';
`
            }
        };
    }
};
</script>
