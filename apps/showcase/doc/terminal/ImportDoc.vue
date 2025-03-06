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
import Terminal from 'primevue-vaultic/terminal';
import TerminalService from 'primevue-vaultic/terminalservice'
`
            }
        };
    }
};
</script>
