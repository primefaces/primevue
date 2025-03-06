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
import IconField from 'primevue-vaultic/iconfield';
import InputIcon from 'primevue-vaultic/inputicon';
`
            }
        };
    }
};
</script>
