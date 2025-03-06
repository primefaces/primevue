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
import InputGroup from 'primevue-vaultic/inputgroup';
import InputGroupAddon from 'primevue-vaultic/inputgroupaddon';
`
            }
        };
    }
};
</script>
