<template>
    <div class="doc-notification">TabView is deprecated, use <NuxtLink to="/tabs" class="doc-link">Tabs</NuxtLink> instead.</div>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
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
