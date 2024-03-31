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
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'
`
            }
        };
    }
};
</script>
