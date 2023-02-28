<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `import DataTable from 'primevue/datatable';
import Column from 'primevue/column';`
            }
        };
    }
};
</script>
