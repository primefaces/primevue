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
import DataTable from 'primevue-vaultic/datatable';
import Column from 'primevue-vaultic/column';
import ColumnGroup from 'primevue-vaultic/columngroup';   // optional
import Row from 'primevue-vaultic/row';                   // optional
`
            }
        };
    }
};
</script>
