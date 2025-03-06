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
import TreeTable from 'primevue-vaultic/treetable';
import Column from 'primevue-vaultic/column';
`
            }
        };
    }
};
</script>
