<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
`
            }
        };
    }
};
</script>
